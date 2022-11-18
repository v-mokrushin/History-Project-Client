import React from "react";
import styles from "./WideContainer.module.scss";

export default function WideContainer({ children }) {
  return <div className={styles.root}>{children}</div>;
}
