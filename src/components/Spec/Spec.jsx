import React from "react";
import styles from "./Spec.module.scss";
import classNames from "classnames";

export default function Spec({ className, children }) {
  return <div className={classNames(styles.root, className)}>{children}</div>;
}
