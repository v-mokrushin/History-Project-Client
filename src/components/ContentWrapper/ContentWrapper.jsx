import React from "react";
import styles from "./ContentWrapper.module.scss";

export default function ContentWrapper({ children }) {
  return <div className={styles.root}>{children}</div>;
}
