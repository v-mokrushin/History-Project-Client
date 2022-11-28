import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./Title.module.scss";

export default function Title({
  noMargin = false,
  centered = false,
  className,
  children,
}) {
  return (
    <h1
      className={classNames(
        className,
        styles.title,
        centered && styles.centered,
        noMargin && styles.noMargin 
      )}
    >
      {children}
    </h1>
  );
}
