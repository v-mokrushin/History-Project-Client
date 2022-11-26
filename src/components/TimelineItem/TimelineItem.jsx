import React from "react";
import PreviewWeaponCard from "../PreviewWeaponCard/PreviewWeaponCard";
import styles from "./TimelineItem.module.scss";

export default function TimelineItem({ contentCollection, year }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.yearBox}>
        <span className={styles.yearText}>{year}</span>
      </div>
      <div className={styles.contentBox}>
        {contentCollection
          .filter((item) => item.adoptedIntoServiceDate === year)
          .map((val, valIndex) => (
            <PreviewWeaponCard weapon={val} key={valIndex} />
          ))}
      </div>
    </div>
  );
}
