import React from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { imageViewerStore } from "../../../javascript/store/mobx";

export default function Image({ title, URL, fullWidth = false, className }) {
  return (
    <div
      className={classNames(
        styles.wrapper,
        fullWidth && styles.wrapper_fullWidth,
        className
      )}
      onClick={() => imageViewerStore.setOpen(URL)}
    >
      <img className={classNames(styles.image)} src={URL} alt="" />
      <Text className={styles.title}>{title}</Text>
    </div>
  );
}
