import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

export default function Paragraph({ noMargin = false, className, children }) {
  return (
    <p
      className={classNames(
        styles.root,
        className,
        noMargin && styles.root_noMargin
      )}
    >
      {children}
    </p>
  );
}
