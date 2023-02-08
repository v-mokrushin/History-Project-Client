import React from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import imageViewerStore from "../../stores/mobx/imageViewerStore";

interface IImageProps {
  title?: string;
  URL: string;
  fullWidth?: boolean;
  className?: string;
}

export default function Image({
  title,
  URL,
  fullWidth = false,
  className,
}: IImageProps) {
  return (
    <div
      className={classNames(
        styles.wrapper,
        fullWidth && styles.wrapper_fullWidth,
        className
      )}
      onClick={() => imageViewerStore.openPhoto(URL)}
    >
      <img className={classNames(styles.image)} src={URL} alt="" />
      <Text className={styles.title}>{title}</Text>
    </div>
  );
}
