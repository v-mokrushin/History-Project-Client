import classNames from "classnames";
import React from "react";
import imageViewerStore from "../../../javascript/store/mobx/imageViewer";
import { getBackgroundImageStyleObject } from "../../../javascript/utils/common";
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
