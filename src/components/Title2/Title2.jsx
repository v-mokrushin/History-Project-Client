import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./Title2.module.scss";

export default function Title2({ centered = false, className, children }) {
  return (
    <h1
      className={classNames(
        className,
        styles.title,
        centered && styles.centered
      )}
    >
      {children}
    </h1>
  );
}
