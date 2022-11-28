import classNames from "classnames";
import React from "react";
import styles from "./FullContainer.module.scss";

export default function FullContainer({ children }) {
  return <div className={classNames(styles.root)}>{children}</div>;
}
