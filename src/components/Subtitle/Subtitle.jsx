import classNames from "classnames";
import React from "react";
import styles from "./Subtitle.module.scss";

export default function Subtitle({ children, id, noMargin }) {
  return (
    <p id={id} className={classNames(styles.root, noMargin && styles.noMargin)}>
      {children}
    </p>
  );
}
