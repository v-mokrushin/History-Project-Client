import React from "react";
import styles from "./SpecSection.module.scss";
import classNames from "classnames";

export default function SpecSection({ title, className, children }) {
  return (
    <div className={classNames(styles.root, className)}>
      <p className={styles.title}>{title}</p>
      <div className={styles.infoBox}>{children}</div>
    </div>
  );
}
