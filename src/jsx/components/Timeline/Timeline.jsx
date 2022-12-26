import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../../javascript/constants/animation";
import TimelineItem from "../TimelineItem/TimelineItem";
import { TimelineContext } from "./context";
import styles from "./Timeline.module.sass";

export default function Timeline({
  contentCollection,
  uniqueDates,
  showFlags = false,
}) {
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
