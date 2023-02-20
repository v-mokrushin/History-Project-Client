import React, { useContext } from "react";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import burgerStore from "../../../stores/mobx/burgerStore";
import styles from "./Logo.module.scss";
import { Scroll } from "utils/scroll";

interface ILogoProps {
  disableLink?: boolean;
  forHeader?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Logo({
  disableLink = false,
  forHeader = false,
  className,
}: ILogoProps) {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        styles.wrapper,
        forHeader && styles.wrapper_typeForHeader,
        className
      )}
      onClick={() => {
        if (disableLink) return;

        Scroll.toTop();
        burgerStore.setClose();
        navigate("/");
      }}
    >
      <div className={styles.title}>
        <span className={styles.decorated_letter}>H</span>aze of{" "}
        <span className={styles.decorated_letter}>W</span>ar
      </div>
      <p className={styles.titleDates}>1939—1945</p>
    </div>
  );
}
