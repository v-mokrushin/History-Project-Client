import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import TimelineItem from "../TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

export default function Timeline({ contentCollection, uniqueDates }) {
  return (
    <div className={classNames(styles.wrapper, ANIMATIONS.fadeIn)}>
      {uniqueDates.map((year, yearIndex) => (
        <TimelineItem
          contentCollection={contentCollection}
          year={year}
          key={yearIndex}
        />
      ))}
    </div>
  );
}
