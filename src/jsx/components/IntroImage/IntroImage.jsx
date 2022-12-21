import classNames from "classnames";
import React from "react";
import { imageViewerStore } from "../../../javascript/store/mobx";
import { getBackgroundImageStyleObject } from "../../../javascript/utils/common";
import { INTRO_IMAGE_TYPE } from "./constants";
import styles from "./IntroImage.module.scss";

export default function IntroImage({ imageUrl }) {
  return (
    <div
      className={classNames(styles.root)}
      style={imageUrl && getBackgroundImageStyleObject(imageUrl)}
      onClick={() => imageViewerStore.setOpen(imageUrl)}
    ></div>
  );
}
