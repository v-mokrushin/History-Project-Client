import React, { useEffect } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import styles from "./ArticlesPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlePreviewsIds,
  selectArticlePreviewsLoadingStatus,
} from "../../../javascript/store/redux/articlePreviews/selectors";
import { loadArticlePreviews } from "../../../javascript/store/redux/articlePreviews/loadingMiddleware";
import { LOADING_STATUSES } from "../../../javascript/store/redux/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { documentTitle } from "../../../utils/updateDocumentTitle";
import Container from "../../components/Container/Container";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import Title from "../../components/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../../constants/pages";

export default function ArticlesPage() {
  const dispatch = useDispatch<any>();
  const articlesIds = useSelector(selectArticlePreviewsIds);
  const loadingStatus = useSelector(selectArticlePreviewsLoadingStatus);
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  useEffect(() => {
    dispatch(loadArticlePreviews);
    documentTitle.setArticlesPage();
  }, [dispatch]);

  function getLayout() {
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} />;
    }

    if (loadingStatus === LOADING_STATUSES.success) {
      return (
        <>
          <Title>Статьи</Title>
          <div className={styles.cardsWrapper}>
            {articlesIds.map((val: string) => (
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
      <IntroImage imageUrl={pageInfo?.introImage} />
      <ContentWrapper>
        <Container>{getLayout()}</Container>
      </ContentWrapper>
    </>
  );
}
