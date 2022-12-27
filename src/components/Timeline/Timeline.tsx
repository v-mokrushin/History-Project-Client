import classNames from "classnames";
import { IWeapon } from "data/weapons/weapons";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import TimelineItem from "../TimelineItem/TimelineItem";
import { TimelineContext } from "./context";
import styles from "./Timeline.module.sass";

interface ITimelineProps {
  contentCollection: IWeapon[];
  uniqueDates: number[];
  showFlags?: boolean;
}

export default function Timeline({
  contentCollection,
  uniqueDates,
  showFlags = false,
}: ITimelineProps) {
  return (
    <TimelineContext.Provider value={{ showFlags }}>
      <div className={classNames(styles.wrapper, ANIMATIONS.fadeIn)}>
        {uniqueDates.map((year, yearIndex) => (
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
