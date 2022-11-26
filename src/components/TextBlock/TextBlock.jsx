import React from "react";
import styles from "./TextBlock.module.scss";

export default function TextBlock({ children }) {
  return <div className={styles.root}>{children}</div>;
}
