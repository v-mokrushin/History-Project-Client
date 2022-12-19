import React from "react";
import styles from "./Comp.module.scss";
import classNames from "classnames";

export default function Comp({ className }) {
  return <div className={classNames(styles.root, className)}></div>;
}
