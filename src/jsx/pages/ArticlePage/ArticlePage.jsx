import classNames from "classnames";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CONTAINER_TYPES } from "../../components/Container/constants";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { ANIMATIONS } from "../../../javascript/constants/animation";
import Title from "../../components/Title/Title";
import { loadArticleContent } from "../../../javascript/store/redux/articleContent/loadingMiddleware";
import {
  selectArticleContentById,
  selectArticleContentLoadingStatus,
} from "../../../javascript/store/redux/articleContent/selectors";
import { selectArticlePreviewById } from "../../../javascript/store/redux/articlePreviews/selectors";
import { LOADING_STATUSES } from "../../../javascript/store/redux/constants";
import styles from "./ArticlePage.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
import Text from "../../components/Text/Text";
import ReadingProgressBar from "../../components/ReadingProgressBar/ReadingProgressBar";

export default function ArticlePage() {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const loadingStatus = useSelector(selectArticleContentLoadingStatus);
  const articlePreview = useSelector((state) =>
    selectArticlePreviewById(state, { articleId })
  );
  const articleContent = useSelector((state) =>
    selectArticleContentById(state, { articleId })
  );

  React.useEffect(() => {
    dispatch(loadArticleContent(articleId));
  }, [articleId]);

  function getContent() {
    if (loadingStatus === LOADING_STATUSES.idle) {
      return;
    }
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} centered75vh />;
    }
    if (loadingStatus === LOADING_STATUSES.success) {
      if (!articleContent?.paragraphs?.length) {
        return (
          <SpecialLogo
            type={SPECIAL_LOGO_TYPE.inDevelopment}
            className={styles.specialLogoStyle}
            centered75vh
          />
        );
      }
      return (
        <div className={classNames(styles.innerWrapper, ANIMATIONS.fadeIn)}>
          <div className={styles.infoBox}>
            {articlePreview.author && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <Text bold>Авторы</Text>
                </div>
                <Text>{articlePreview.author}</Text>
              </div>
            )}
            {articlePreview.origin && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <Text bold>Источник</Text>
                </div>
                <Text>{articlePreview.origin}</Text>
              </div>
            )}
          </div>
          <div>
            {articleContent.paragraphs.map((item, index) => (
              <Paragraph key={articlePreview.id + "par" + index}>
                {item}
              </Paragraph>
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <ReadingProgressBar />
      <IntroImage imageUrl={articlePreview.backgroundURL} />
      <ContentWrapper>
        <Container type={CONTAINER_TYPES.default}>
          <div className={styles.innerWrapper}>
            <Title centered>{articlePreview.title}</Title>
            {getContent()}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
