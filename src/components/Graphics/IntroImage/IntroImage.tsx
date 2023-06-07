import classNames from "classnames";
import React from "react";
import imageViewerStore from "../../../stores/mobx/imageViewerStore";
import { getBackgroundImageStyleObject } from "../../../utils/common";
import styles from "./IntroImage.module.scss";

interface IIntroImageProps {
  imageUrl: string;
  animated?: boolean;
  shouldThrowAnimation?: boolean;
  className?: string;
}

export default function IntroImage({
  imageUrl,
  animated = false,
  shouldThrowAnimation = false,
  className,
}: IIntroImageProps) {
  console.log("function IntroImage");

  return (
    <div
      className={classNames(styles.root, className)}
      onClick={() => imageViewerStore.openPhoto(imageUrl)}
      key={!shouldThrowAnimation ? "intro" : Math.random()}
    >
      <div
        className={classNames(
          styles.backgroundWrapper,
          animated && styles.backgroundWrapper_animated
        )}
        style={getBackgroundImageStyleObject(imageUrl)}
      ></div>
    </div>
  );
}
