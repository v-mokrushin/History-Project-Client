import React from "react";
import PreviewWeaponCard from "../PreviewWeaponCard/PreviewWeaponCard";
import styles from "./TimelineItem.module.scss";
import { TimelineContext } from "../Timeline/context";

export default function TimelineItem({ contentCollection, year }) {
  const { showFlags } = React.useContext(TimelineContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.yearBox}>
        <span className={styles.yearText}>{year}</span>
      </div>
      <div className={styles.contentBox}>
        {contentCollection
          .filter((item) => item.adoptedIntoServiceDate === year)
          .map((val, valIndex) => (
            <PreviewWeaponCard
              weapon={val}
              key={valIndex}
              showFlag={showFlags}
            />
          ))}
      </div>
    </div>
  );
}
