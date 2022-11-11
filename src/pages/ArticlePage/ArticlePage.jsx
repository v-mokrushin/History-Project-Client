import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IntroImage from "../../components/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { ANIMATIONS } from "../../constants/animation";
import { selectArticleById } from "../../store/acticles/selectors";
import { getBackgroundImageStyleObject } from "../../utils/common";
import styles from "./ArticlePage.module.scss";

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = useSelector((state) =>
    selectArticleById(state, { articleId })
  );

  return (
    <div className={styles.root}>
      {/* <div
        className={classNames(styles.intro, ANIMATIONS.fadeIn)}
        style={getBackgroundImageStyleObject(article.backgroundURL)}
      ></div> */}
      <IntroImage
        imageUrl={article.backgroundURL}
        className={classNames(ANIMATIONS.fadeIn)}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{article.title}</h2>
            <SpecialLogo
              type={SPECIAL_LOGO_TYPE.inDevelopment}
              className={styles.specialLogoStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
