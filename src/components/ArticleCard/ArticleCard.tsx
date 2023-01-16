import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { useSelector } from "react-redux";
import { selectArticlePreviewById } from "../../stores/redux/articlePreviews/selectors";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animations";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { Scroll } from "utils/scroll";

interface IArticleCardProps {
  articleId: string;
}

export default function ArticleCard({ articleId }: IArticleCardProps) {
  const article = useSelector((state) =>
    selectArticlePreviewById(state, { articleId })
  );

  return (
    <NavLink
      to={`/articles/${articleId}`}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
    >
      <div
        className={styles.backgroundWrapper}
        style={getBackgroundImageStyleObject(article.backgroundURL)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{article.title}</p>
        <div className={styles.separator}></div>
        <p className={styles.description}>{article.description}</p>
      </div>
    </NavLink>
  );
}
