import React from "react";
import Text from "../Text/Text";
import styles from "./SpecLine.module.scss";

export default function SpecLine({ crit, val, mesure = "" }) {
  return (
    val && (
      <div className={styles.root}>
        <Text bold className={styles.criteria}>
          {crit}
        </Text>
        <Text className={styles.value}>
          {val}
          {mesure && ` ${mesure}`}
        </Text>
      </div>
    )
  );
}
