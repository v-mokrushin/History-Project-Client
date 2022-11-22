import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./Timeline.module.scss";

export default function Timeline({ children }) {
  return (
    <div className={classNames(styles.wrapper, ANIMATIONS.fadeIn)}>
      {children}
    </div>
  );
}
