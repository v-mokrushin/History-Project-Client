import React from "react";
import styles from "./Subtitle.module.scss";

export default function Subtitle({ children }) {
  return <p className={styles.root}>{children}</p>;
}
