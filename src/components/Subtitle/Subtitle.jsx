import React from "react";
import styles from "./Subtitle.module.scss";

export default function Subtitle({ children, id }) {
  return (
    <p id={id} className={styles.root}>
      {children}
    </p>
  );
}
