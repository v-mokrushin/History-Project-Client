import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animations";
import { SPECIAL_LOGO_TYPE } from "./constants";
import styles from "./SpecialLogo.module.scss";

interface ISpecialLogoProps {
  vertiacalFill?: boolean;
  className?: string;
  type: SPECIAL_LOGO_TYPE;
}

export default function SpecialLogo({
  vertiacalFill = false,
  className,
  type,
}: ISpecialLogoProps) {
  function getIconStyle() {
    if (type == SPECIAL_LOGO_TYPE.loading) {
      return styles.animatedIcon_typeLoading;
    }
    if (type == SPECIAL_LOGO_TYPE.inDevelopment) {
      return styles.animatedIcon_typeDevelopment;
    }
    if (type == SPECIAL_LOGO_TYPE.notFound) {
      return styles.animatedIcon_typeNone;
    }
  }

  function getTitle() {
    if (type == SPECIAL_LOGO_TYPE.loading) {
      return "Загрузка";
    }
    if (type == SPECIAL_LOGO_TYPE.inDevelopment) {
      return "В разработке";
    }
    if (type == SPECIAL_LOGO_TYPE.notFound) {
      return "Не найдено";
    }
  }

  return (
    <div className={styles.root_verticalFill}>
      <div className={classNames(styles.wrapper, className)}>
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
    </div>
  );
}
