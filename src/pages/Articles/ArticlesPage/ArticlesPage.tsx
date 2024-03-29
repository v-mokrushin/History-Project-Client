import React, { useEffect } from "react";
import ArticleCard from "../../../components/Cards/ArticleCard/ArticleCard";
import styles from "./ArticlesPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlePreviewsIds,
  selectArticlePreviewsLoadingStatus,
} from "../../../stores/redux/articlePreviews/selectors";
import { loadArticlePreviews } from "../../../stores/redux/articlePreviews/loadingMiddleware";
import { LOADING_STATUSES } from "../../../stores/redux/constants";
import SpecialLogo from "../../../components/Graphics/SpecialLogo/SpecialLogo";
import IntroImage from "../../../components/Graphics/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../../components/Graphics/SpecialLogo/constants";
import ContentWrapper from "../../../components/Structure/ContentWrapper/ContentWrapper";
import Container from "../../../components/Structure/Container/Container";
import Title from "../../../components/Texts/Title/Title";
import { useLocation } from "react-router-dom";
import { Pages } from "../../../constants/pages";
import { AppDispatch } from "stores/redux";

export default function ArticlesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const articlesIds = useSelector(selectArticlePreviewsIds);
  const loadingStatus = useSelector(selectArticlePreviewsLoadingStatus);
  const pageInfo = Pages.getByPath(useLocation().pathname);

  useEffect(() => {
    dispatch(loadArticlePreviews);
  }, [dispatch]);

  return (
    <>
      <IntroImage imageUrl={pageInfo!.introImage} animated />
      <ContentWrapper>
        <Container>
          {loadingStatus === LOADING_STATUSES.inProgress && (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} vertiacalFill />
          )}
          {loadingStatus === LOADING_STATUSES.failed && (
            <span>Загрузка не удалась</span>
          )}
          {loadingStatus === LOADING_STATUSES.success && (
            <>
              <Title>Статьи</Title>
              <div className={styles.cardsWrapper}>
                {articlesIds.map((val: string) => (
                  <ArticleCard articleId={val} key={val} />
                ))}
              </div>
            </>
          )}
        </Container>
      </ContentWrapper>
    </>
  );
}
