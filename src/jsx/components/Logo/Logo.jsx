import classNames from "classnames";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../../javascript/utils/scroll";
import { BurgerContext } from "../Burger/context";
import styles from "./Logo.module.scss";

export default function Logo({ forHeader = false }) {
  const burgerContext = useContext(BurgerContext);
  return (
    <NavLink
      to="/"
      className={classNames(
        styles.wrapper,
        forHeader && styles.wrapper_typeForHeader
      )}
      onClick={() => {
        scrollToTop();
        burgerContext.setClose();
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
