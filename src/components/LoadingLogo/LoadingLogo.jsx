import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./LoadingLogo.module.scss";

export default function LoadingLogo() {
  return (
    <div className={classNames(styles.wrapper, ANIMATIONS.fadeInDown)}>
      <div
        className={classNames(styles.loadingIcon, styles.loadingIcon_leftSide)}
      ></div>
      <h1 className={styles.title}>
        <span className={styles.decorated_letter}>H</span>aze of{" "}
        <span className={styles.decorated_letter}>W</span>ar
      </h1>
      <div className={styles.datesWrapper}>
        <p className={styles.titleDates}>39</p>
        <div className={styles.datesSeparator}></div>
        <p className={styles.titleDates}>45</p>
      </div>
      <div
        className={classNames(styles.loadingIcon, styles.loadingIcon_rightSide)}
      ></div>
    </div>
  );
}
