import classNames from "classnames";
import { IWeapon } from "data/weapons/weapons";
import { observer } from "mobx-react";
import React from "react";
import settingsStore from "stores/mobx/settingsStore";
import { ANIMATIONS } from "../../constants/animations";
import TimelineItem from "../TimelineItem/TimelineItem";
import { TimelineContext } from "./context";
import styles from "./Timeline.module.scss";

interface ITimelineProps {
  contentCollection: IWeapon[];
  uniqueDates: number[];
  showFlags?: boolean;
}

const Timeline = observer(
  ({ contentCollection, uniqueDates, showFlags = false }: ITimelineProps) => {
    let dates = Array.from(uniqueDates);
    if (settingsStore.sortInAscending) dates.reverse();

    return (
      <TimelineContext.Provider value={{ showFlags }}>
        <div className={classNames(styles.wrapper, ANIMATIONS.fadeIn)}>
          {dates.map((year, yearIndex) => (
            <TimelineItem
              contentCollection={contentCollection}
              year={year}
              key={yearIndex}
            />
          ))}
        </div>
      </TimelineContext.Provider>
    );
  }
);

export default Timeline;
