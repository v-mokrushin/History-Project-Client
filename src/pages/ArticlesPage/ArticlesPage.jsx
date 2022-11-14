import React, { useEffect } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ArticlesPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesIds,
  selectArticlesLoadingStatus,
} from "../../store/acticles/selectors";
import { loadArticles } from "../../store/acticles/loadingMiddleware";
import { LOADING_STATUSES } from "../../store/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";

export default function ArticlesPage() {
  const dispatch = useDispatch();
  const articlesIds = useSelector(selectArticlesIds);
  const loadingStatus = useSelector(selectArticlesLoadingStatus);

  useEffect(() => {
    dispatch(loadArticles);
  }, []);

  function getLayout() {
    if (loadingStatus === LOADING_STATUSES.inProgress) {
      return <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} />;
    }

    if (loadingStatus === LOADING_STATUSES.success) {
      return (
        <>
          <div className={styles.titleWrapper}>
            <div
              className={classNames(
                styles.titleWrapper__stripe,
                styles.titleWrapper__stripeLeft
              )}
            ></div>
            <h1
              className={classNames(
                styles.titleWrapper__title,
                ANIMATIONS.fadeIn
              )}
            >
              Статьи
            </h1>
            <div className={styles.titleWrapper__stripe}></div>
          </div>
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
    <div>
      <div className={styles.root}>
        <IntroImage />
        <main className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>{getLayout()}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
