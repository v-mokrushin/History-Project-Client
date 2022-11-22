import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./Title2.module.scss";

export default function Title2({ className, children }) {
  return <h1 className={classNames(className, styles.title)}>{children}</h1>;
}
