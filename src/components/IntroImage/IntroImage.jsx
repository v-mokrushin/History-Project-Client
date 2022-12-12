import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { ImageViewerContext } from "../ImageViewer/context";
import { INTRO_IMAGE_TYPE } from "./constants";
import styles from "./IntroImage.module.scss";

export default function IntroImage({ imageUrl }) {
  const imageViewerContext = React.useContext(ImageViewerContext);

  return (
    <div
      className={classNames(styles.root)}
      style={imageUrl && getBackgroundImageStyleObject(imageUrl)}
      onClick={() => imageViewerContext.setValue({ open: true, url: imageUrl })}
    ></div>
  );
}
