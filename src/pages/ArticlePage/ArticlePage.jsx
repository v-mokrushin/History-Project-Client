import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { ANIMATIONS } from "../../constants/animation";
import { selectArticleById } from "../../store/acticles/selectors";
import styles from "./ArticlePage.module.scss";

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = useSelector((state) =>
    selectArticleById(state, { articleId })
  );

  function getContent() {
    if (article.paragraphs.length > 0) {
      return (
        <div className={styles.paragraphsWrapper}>
          {article.paragraphs.map((item, index) => (
            <p className={styles.text} key={index}>
              {item}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <SpecialLogo
          type={SPECIAL_LOGO_TYPE.inDevelopment}
          className={styles.specialLogoStyle}
        />
      );
    }
  }

  return (
    <div className={styles.root}>
      <IntroImage imageUrl={article.backgroundURL} />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{article.title}</h2>
            {getContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
