import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { useSelector } from "react-redux";
import { selectArticlePreviewById } from "../../../javascript/store/articlePreviews/selectors";
import classNames from "classnames";
import { ANIMATIONS } from "../../../javascript/constants/animation";
import { getBackgroundImageStyleObject } from "../../../javascript/utils/common";
import { scrollTopInstantly, scrollToTop } from "../../../javascript/utils/scroll";

export default function ArticleCard({ articleId }) {
  const article = useSelector((state) =>
    selectArticlePreviewById(state, { articleId })
  );
  const articleName = article.title.split(" ").join("_");

  return (
    <NavLink
      to={`/articles/${articleId}`}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    >
      <div
        className={styles.backgroundWrapper}
        style={getBackgroundImageStyleObject(article.backgroundURL)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{article.title}</p>
        <div className={styles.separator}></div>
        <p className={styles.description}>
          {/* {article.description == "" ? (
            <>
              <br /> <br />
            </>
          ) : (
            article.description
          )} */}
          {article.description}
        </p>
      </div>
    </NavLink>
  );
}
