import React, { useEffect } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import styles from "./ArticlesPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlePreviewsIds,
  selectArticlePreviewsLoadingStatus,
} from "../../store/articlePreviews/selectors";
import { loadArticlePreviews } from "../../store/articlePreviews/loadingMiddleware";
import { LOADING_STATUSES } from "../../store/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { documentTitle } from "../../utils/updateDocumentTitle";
import Container from "../../components/Container/Container";
import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";
import Title from "../../components/Title/Title";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import Title2 from "../../components/Title2/Title2";

export default function ArticlesPage() {
  const dispatch = useDispatch();
  const articlesIds = useSelector(selectArticlePreviewsIds);
  const loadingStatus = useSelector(selectArticlePreviewsLoadingStatus);

  useEffect(() => {
    dispatch(loadArticlePreviews);
    dispatch(navigationMiddlewares.setArticlesActualSection());
    documentTitle.setArticlesPage();
  }, [dispatch]);

  function getLayout() {
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} />;
    }

    if (loadingStatus === LOADING_STATUSES.success) {
      return (
        <>
          {/* <Title text="Статьи" /> */}
          <Title2>Статьи</Title2>
          <div className={styles.cardsWrapper}>
            {articlesIds.map((val) => (
              <ArticleCard articleId={val} key={val} />
            ))}
          </div>
        </>
      );
    }

    if (loadingStatus === LOADING_STATUSES.failed) {
      return <span>Загрузка не удалась</span>;
    }
  }

  return (
    <>
      <IntroImage type={INTRO_IMAGE_TYPE.pages.articles} />
      <ContentWrapper>
        <Container>
          <InnerContentWrapper>{getLayout()}</InnerContentWrapper>
        </Container>
      </ContentWrapper>
    </>
  );
}
