import classNames from "classnames";
import React from "react";
import imageViewerStore from "../../stores/mobx/imageViewerStore";
import { getBackgroundImageStyleObject } from "../../utils/common";
import styles from "./IntroImage.module.scss";

interface IIntroImageProps {
  imageUrl: string;
  animated?: boolean;
  shouldThrowAnimation?: boolean;
}

export default function IntroImage({
  imageUrl,
  animated = false,
  shouldThrowAnimation = false,
}: IIntroImageProps) {
  return (
    <div
      className={classNames(styles.root)}
      onClick={() => imageViewerStore.setOpen(imageUrl)}
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
