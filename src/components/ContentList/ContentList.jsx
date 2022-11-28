import React from "react";
import styles from "./ContentList.module.scss";
import classNames from "classnames";

export default function ContentList({ className }) {
  return (
    <div className={classNames(styles.root, className)}>
      <p className={styles.title}>На этой странице</p>
      <div className={classNames(styles.separator)}></div>
      <div className={classNames(styles.linksBox)}>
        <a className={styles.link} href="#ss">
          Характеристики
        </a>
        <a href="#history" className={styles.link}>
          Характеристики
        </a>
      </div>
    </div>
  );
}
