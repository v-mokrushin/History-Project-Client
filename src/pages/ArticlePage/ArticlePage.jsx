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
import { ANIMATIONS } from "../../constants/animation";
import Title2 from "../../components/Title2/Title2";
import { loadArticleContent } from "../../store/articleContent/loadingMiddleware";
import {
  selectArticleContentById,
  selectArticleContentLoadingStatus,
} from "../../store/articleContent/selectors";
import { selectArticlePreviewById } from "../../store/articlePreviews/selectors";
import { LOADING_STATUSES } from "../../store/constants";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import styles from "./ArticlePage.module.scss";

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
    dispatch(navigationMiddlewares.setArticlesActualSection());
  }, [articleId]);

  function getContent() {
    if (loadingStatus === LOADING_STATUSES.idle) {
      return;
    }
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return (
        <SpecialLogo
          type={SPECIAL_LOGO_TYPE.loading}
          className={styles.specialLogoStyle}
        />
      );
    }
    if (loadingStatus === LOADING_STATUSES.success) {
      if (!articleContent?.paragraphs?.length) {
        return (
          <SpecialLogo
            type={SPECIAL_LOGO_TYPE.inDevelopment}
            className={styles.specialLogoStyle}
          />
        );
      }
      return (
        <>
          <div className={styles.infoBox}>
            {articlePreview.author && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <span className={classNames(styles.text, styles.text_bolder)}>
                    Авторы
                  </span>
                </div>
                <span className={styles.text}>{articlePreview.author}</span>
              </div>
            )}
            {articlePreview.origin && (
              <div className={styles.infoBox__string}>
                <div className={styles.infoBox__titleBox}>
                  <span className={classNames(styles.text, styles.text_bolder)}>
                    Источник
                  </span>
                </div>
                <span className={styles.text}>{articlePreview.origin}</span>
              </div>
            )}
          </div>
          <div
            className={classNames(styles.paragraphsWrapper, ANIMATIONS.fadeIn)}
          >
            {articleContent.paragraphs.map((item, index) => (
              <p
                className={classNames(
                  styles.text,
                  !index && styles.text_bolder
                )}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      );
    }
  }

  return (
    <>
      <IntroImage imageUrl={articlePreview.backgroundURL} />
      <ContentWrapper>
        <Container type={CONTAINER_TYPES.default}>
          <div className={styles.innerWrapper}>
            {/* <h2 className={styles.title}>{articlePreview.title}</h2> */}
            <Title2 className={styles.title_2}>{articlePreview.title}</Title2>
            {getContent()}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
