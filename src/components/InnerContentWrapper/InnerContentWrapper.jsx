import React from "react";
import styles from "./InnerContentWrapper.module.scss";

export default function InnerContentWrapper({ children }) {
  return <div className={styles.root}>{children}</div>;
}
