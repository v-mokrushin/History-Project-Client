import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { useSelector } from "react-redux";
import { selectArticleById } from "../../store/acticles/selectors";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { scrollToTop } from "../../utils/scroll";

export default function ArticleCard({ articleId }) {
  const article = useSelector((state) =>
    selectArticleById(state, { articleId })
  );

  return (
    <NavLink
      to={`/articles/article_${articleId}`}
      className={classNames(styles.root, ANIMATIONS.zoomIn)}
      onClick={scrollToTop}
    >
      <div
        className={styles.backgroundWrapper}
        style={getBackgroundImageStyleObject(article.backgroundURL)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{article.title}</p>
        <div className={styles.separator}></div>
        <p className={styles.description}>
          {article.description == "" ? (
            <>
              <br /> <br />
            </>
          ) : (
            article.description
          )}
        </p>
      </div>
    </NavLink>
  );
}
