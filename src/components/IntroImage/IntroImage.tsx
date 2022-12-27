import classNames from "classnames";
import React from "react";
import imageViewerStore from "../../stores/mobx/imageViewer";
import { getBackgroundImageStyleObject } from "../../utils/common";
import styles from "./IntroImage.module.scss";

interface IIntroImageProps {
  imageUrl: string;
}

export default function IntroImage({ imageUrl }: IIntroImageProps) {
  return (
    <div
      className={classNames(styles.root)}
      style={getBackgroundImageStyleObject(imageUrl)}
      onClick={() => imageViewerStore.setOpen(imageUrl)}
    ></div>
  );
}
