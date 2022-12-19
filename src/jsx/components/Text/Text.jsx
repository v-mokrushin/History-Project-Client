import classNames from "classnames";
import React from "react";
import styles from "./Text.module.scss";

export default function Text({ className, bold = false, children }) {
  return (
    <span className={classNames(styles.root, className, bold && styles.bold)}>
      {children}
    </span>
  );
}
