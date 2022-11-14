import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import { getBackgroundImageStyleObject } from "../../utils/common";
import styles from "./IntroImage.module.scss";

export default function IntroImage({ imageUrl }) {
  return (
    <div
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      style={imageUrl && getBackgroundImageStyleObject(imageUrl)}
    ></div>
  );
}
