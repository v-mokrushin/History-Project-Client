import React from "react";
import styles from "./TimelineItem.module.scss";

export default function TimelineItem({ year, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.yearBox}>
        <span className={styles.yearText}>{year}</span>
      </div>
      <div className={styles.contentBox}>{children}</div>
    </div>
  );
}
