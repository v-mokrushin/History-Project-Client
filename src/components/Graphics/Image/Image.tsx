import React from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import Text from "../../Texts/Text/Text";
import imageViewerStore from "../../../stores/mobx/imageViewerStore";
import Preloader from "components/Graphics/Preloader/Preloader";

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
        styles.root,
        fullWidth && styles.root_fullWidth,
        className
      )}
      onClick={() => imageViewerStore.openPhoto(URL)}
    >
      <div className={styles.fallbackBox}>
        {/* <Preloader color="black" dependsOnWidth /> */}
        <img className={classNames(styles.image)} src={URL} alt={title} />
      </div>
      <Text className={styles.title}>{title}</Text>
    </div>
  );
}
