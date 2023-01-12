import React from "react";
import Text from "../Text/Text";
import styles from "./SpecLine.module.scss";

interface ISpecLineProps {
  crit: string;
  val: string | number | undefined;
  mesure?: string;
}

export default function SpecLine({ crit, val, mesure = "" }: ISpecLineProps) {
  return val ? (
    <div className={styles.root}>
      <Text bold className={styles.criteria}>
        {crit}
      </Text>
      <Text className={styles.value}>
        {val}
        {mesure && ` ${mesure}`}
      </Text>
    </div>
  ) : (
    <></>
  );
}
