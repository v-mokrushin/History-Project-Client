import React from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { ImageViewerContext } from "../ImageViewer/context";

export default function Image({ title, URL, className }) {
  const imageViewerContext = React.useContext(ImageViewerContext);

  return (
    <div
      className={classNames(styles.wrapper, className)}
      onClick={() => imageViewerContext.setValue({ open: true, url: URL })}
    >
      <img className={classNames(styles.image)} src={URL} alt="" />
      <Text className={styles.title}>{title}</Text>
    </div>
  );
}
