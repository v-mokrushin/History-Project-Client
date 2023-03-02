import classNames from "classnames";
import React from "react";
import { Translation, useTranslation } from "react-i18next";
import { ANIMATIONS } from "../../../constants/animations";
import { SPECIAL_LOGO_TYPE } from "./constants";
import styles from "./SpecialLogo.module.scss";

interface ISpecialLogoProps {
  vertiacalFill?: boolean;
  title?: string;
  type: SPECIAL_LOGO_TYPE;
  whiteColor?: boolean;
  className?: string;
}

export default function SpecialLogo({
  vertiacalFill = false,
  title = "",
  type,
  whiteColor = false,
  className,
}: ISpecialLogoProps) {
  const { t } = useTranslation();

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
    if (title) {
      return title;
    } else {
      if (type == SPECIAL_LOGO_TYPE.loading) {
        return t("special_logo.loading");
      }
      if (type == SPECIAL_LOGO_TYPE.inDevelopment) {
        return t("special_logo.in_development");
      }
      if (type == SPECIAL_LOGO_TYPE.notFound) {
        return t("special_logo.not_found");
      }
    }
  }

  return (
    <div
      className={classNames(
        styles.root,
        vertiacalFill && styles.root_verticalFill
      )}
    >
      <div
        className={classNames(
          styles.wrapper,
          whiteColor && styles.wrapper_white,
          className
        )}
      >
        <div
          className={classNames(styles.animatedIcon_left, getIconStyle())}
        ></div>
        <div className={styles.bodyWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.title}>
              <span className={styles.decorated_letter}>H</span>aze of{" "}
              <span className={styles.decorated_letter}>W</span>ar
            </div>
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
