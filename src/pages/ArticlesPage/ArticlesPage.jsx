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
import WideContainer from "../../components/WideContainer/WideContainer";
import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";
import Title from "../../components/Title/Title";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";

export default function ArticlesPage() {
  const dispatch = useDispatch();
  const articlesIds = useSelector(selectArticlePreviewsIds);
  const loadingStatus = useSelector(selectArticlePreviewsLoadingStatus);

  useEffect(() => {
    dispatch(loadArticlePreviews);
    dispatch(navigationMiddlewares.setArticlesActualSection());
    documentTitle.setArticlesPage();
  }, []);

  function getLayout() {
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} />;
    }

    if (loadingStatus === LOADING_STATUSES.success) {
      return (
        <>
          <Title text="Статьи" />
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
        <WideContainer>
          <InnerContentWrapper>{getLayout()}</InnerContentWrapper>
        </WideContainer>
      </ContentWrapper>
    </>
  );
}
