import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animation";
import styles from "./Title.module.scss";

export default function Title({ text }) {
  return (
    <div className={classNames(styles.wrapper, ANIMATIONS.none)}>
      <div
        className={classNames(
          styles.wrapper__stripe,
          styles.wrapper__stripeLeft
        )}
      ></div>
      <h1 className={classNames(styles.wrapper__title)}>{text}</h1>
      <div className={styles.wrapper__stripe}></div>
    </div>
  );
}
