import React from "react";
import styles from "./ContentList.module.scss";
import classNames from "classnames";

export default function ContentList({ list, className }) {
  return (
    list && (
      <div className={classNames(styles.root, className)}>
        <p className={styles.title}>Содержание</p>
        <div className={classNames(styles.separator)}></div>
        <div className={classNames(styles.linksBox)}>
          {list.map((item) => (
            <a className={styles.link} href={`#${item}`}>
              {item}
            </a>
          ))}
        </div>
      </div>
    )
  );
}
