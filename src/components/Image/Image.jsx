import React from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";

export default function Image({ title, URL, className }) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <img className={classNames(styles.image)} src={URL} alt="" />
      {/* <Text>Рисунок - Схема бронирования</Text> */}
      <Text className={styles.title}>{title}</Text>
    </div>
  );
}
