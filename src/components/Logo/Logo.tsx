import React, { useContext } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import burgerStore from "../../stores/mobx/burgerStore";
import styles from "./Logo.module.scss";
import { Scroll } from "utils/scroll";

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
        Scroll.toTop();
        burgerStore.setClose();
      }}
    >
      <div className={styles.title}>
        <span className={styles.decorated_letter}>H</span>aze of{" "}
        <span className={styles.decorated_letter}>W</span>ar
      </div>
      <p className={styles.titleDates}>1939—1945</p>
    </NavLink>
  );
}
