import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { useSelector } from "react-redux";
import { selectArticleById } from "../../store/acticles/selectors";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import {
  getBackgroundImageStyleObject,
} from "../../utils/common";

export default function ArticleCard({ id }) {
  const article = useSelector((state) => selectArticleById(state, { id }));

  return (
    <NavLink className={classNames(styles.root, ANIMATIONS.zoomIn)}>
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
