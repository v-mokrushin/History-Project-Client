import React, { useContext } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import burgerStore from "../../../javascript/store/mobx/burger";
import { scrollToTop } from "../../../javascript/utils/scroll";
import styles from "./Logo.module.scss";

interface ILogoProps {
  forHeader?: boolean;
  onClick?: () => void;
}

export default function Logo({ forHeader = false }: ILogoProps) {
  return (
    <NavLink
      to="/"
      className={classNames(
        styles.wrapper,
        forHeader && styles.wrapper_typeForHeader
      )}
      onClick={() => {
        scrollToTop();
        burgerStore.setClose();
      }}
    >
      <h1 className={styles.title}>
        <span className={styles.decorated_letter}>H</span>aze of{" "}
        <span className={styles.decorated_letter}>W</span>ar
      </h1>
      <p className={styles.titleDates}>1939—1945</p>
    </NavLink>
  );
}
