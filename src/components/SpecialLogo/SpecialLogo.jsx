import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import { SPECIAL_LOGO_TYPE } from "./constants";
import styles from "./SpecialLogo.module.scss";

export default function SpecialLogo({
  centered50vh = false,
  centered75vh = false,
  className,
  type,
}) {
  function getIconStyle() {
    if (type == SPECIAL_LOGO_TYPE.loading) {
      return styles.animatedIcon_typeLoading;
    }
    if (type == SPECIAL_LOGO_TYPE.inDevelopment) {
      return styles.animatedIcon_typeDevelopment;
    }
  }

  function getTitle() {
    if (type == SPECIAL_LOGO_TYPE.loading) {
      return "Загрузка";
    }
    if (type == SPECIAL_LOGO_TYPE.inDevelopment) {
      return "В разработке";
    }
  }

  return (
    <div
      className={classNames(
        styles.wrapper,
        // ANIMATIONS.fadeInDown,
        className,
        centered50vh && styles.сentered_50vh,
        centered75vh && styles.сentered_75vh
      )}
    >
      <div
        className={classNames(styles.animatedIcon_left, getIconStyle())}
      ></div>
      <div className={styles.bodyWrapper}>
        <div className={styles.logoWrapper}>
          <h1 className={styles.title}>
            <span className={styles.decorated_letter}>H</span>aze of{" "}
            <span className={styles.decorated_letter}>W</span>ar
          </h1>
          <div className={styles.datesWrapper}>
            <p className={styles.titleDates}>39</p>
            <div className={styles.datesSeparator}></div>
            <p className={styles.titleDates}>45</p>
          </div>
        </div>
        <p className={styles.causeTitle}>{getTitle()}</p>
      </div>
      <div
        className={classNames(styles.animatedIcon_right, getIconStyle())}
      ></div>
    </div>
  );
}
