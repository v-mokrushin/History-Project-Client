import React from "react";
import WeaponCard from "../WeaponCard/WeaponCard";
import styles from "./TimelineItem.module.scss";
import { TimelineContext } from "../Timeline/context";
import classNames from "classnames";
import settingsStore from "stores/mobx/settingsStore";
import { observer } from "mobx-react";
import { IWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

interface ITimelineItemProps {
  contentCollection: IWeapon[];
  year: number;
}

const TimelineItem = observer(
  ({ contentCollection, year }: ITimelineItemProps) => {
    const { showFlags } = React.useContext(TimelineContext);

    return (
      <div className={styles.wrapper}>
        <div className={styles.yearBox}>
          <span className={styles.yearText}>{year}</span>
        </div>
        <div
          className={classNames(
            styles.contentBox,
            settingsStore.displaySize && styles.contentBox_large
          )}
        >
          {contentCollection
            .filter((item) => item.adoptedIntoServiceDate === year)
            .map((val, valIndex) => (
              <WeaponCard weapon={val} key={valIndex} showFlag={showFlags} />
            ))}
        </div>
      </div>
    );
  }
);

export default TimelineItem;
