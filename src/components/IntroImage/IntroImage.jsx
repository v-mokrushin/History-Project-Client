import React from "react";
import { getBackgroundImageStyleObject } from "../../utils/common";
import styles from "./IntroImage.module.scss";

export default function IntroImage({ imageUrl }) {
  return (
    <div
      className={styles.root}
      style={imageUrl && getBackgroundImageStyleObject(imageUrl)}
    ></div>
  );
}
