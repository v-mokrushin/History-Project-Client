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
import { ANIMATIONS } from "../../constants/animations";
import Title from "../../components/Title/Title";
import { loadArticleContent } from "../../stores/redux/articleContent/loadingMiddleware";
import {
  selectArticleContentById,
  selectArticleContentLoadingStatus,
} from "../../stores/redux/articleContent/selectors";
import { selectArticlePreviewById } from "../../stores/redux/articlePreviews/selectors";
import { LOADING_STATUSES } from "../../stores/redux/constants";
import styles from "./ArticlePage.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph";
import Text from "../../components/Text/Text";
import ReadingProgressBar from "../../components/ReadingProgressBar/ReadingProgressBar";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import { Scroll } from "utils/scroll";

export default function ArticlePage() {
  const dispatch = useDispatch<any>();
  const { articleId } = useParams();
  const loadingStatus = useSelector(selectArticleContentLoadingStatus);
  const articlePreview = useSelector((state) =>
    selectArticlePreviewById(state, { articleId })
  );
  const articleContent = useSelector((state) =>
    selectArticleContentById(state, { articleId })
  );

  if (!articlePreview)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  React.useEffect(() => {
    Scroll.toTopInstantly();
  }, []);

  React.useEffect(() => {
    articleId && dispatch(loadArticleContent(articleId));
  }, [articleId]);

  function getContent() {
    if (loadingStatus === LOADING_STATUSES.idle) {
      return;
    }
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} vertiacalFill />;
    }
    if (loadingStatus === LOADING_STATUSES.success) {
      if (!articleContent) return;

      if (!articleContent.text) {
        return (
          <SpecialLogo
            type={SPECIAL_LOGO_TYPE.inDevelopment}
            className={styles.specialLogoStyle}
            vertiacalFill
          />
        );
      }

      return (
        <div className={classNames(styles.innerWrapper, ANIMATIONS.fadeIn)}>
          <div className={styles.infoBox}>
            {articleContent.author && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <Text bold>Авторы</Text>
                </div>
                <Text>{articleContent.author}</Text>
              </div>
            )}
            {articleContent.origin && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <Text bold>Источник</Text>
                </div>
                <Text>{articleContent.origin}</Text>
              </div>
            )}
          </div>
          {articleContent.text}
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
