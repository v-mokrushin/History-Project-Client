import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { INTRO_IMAGE_TYPE } from "./constants";
import styles from "./IntroImage.module.scss";

export default function IntroImage({ type, imageUrl }) {
  function getBackround() {
    if (type == INTRO_IMAGE_TYPE.pages.articles) {
      return styles.background_articlesPage;
    }
    if (type == INTRO_IMAGE_TYPE.pages.weapons) {
      return styles.background_weaponsPage;
    }

    if (type == INTRO_IMAGE_TYPE.pages.weapons.aviation) {
      return styles.background_aviationPage;
    }
    if (type == INTRO_IMAGE_TYPE.pages.weapons.armored) {
      return styles.background_armoredPage;
    }
    if (type == INTRO_IMAGE_TYPE.pages.weapons.smallArms) {
      return styles.background_smallArmsPage;
    }
    if (type == INTRO_IMAGE_TYPE.pages.weapons.artillery) {
      return styles.background_artilleryPage;
    }
  }

  return (
    <div
      className={classNames(styles.root, type && getBackround())}
      style={imageUrl && getBackgroundImageStyleObject(imageUrl)}
    ></div>
  );
}
