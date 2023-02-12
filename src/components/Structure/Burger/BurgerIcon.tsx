import React from "react";
import burgerStore from "../../../stores/mobx/burgerStore";
import styles from "./Burger.module.scss";

export default function BurgerIcon() {
  return (
    <div
      className={styles.openButton}
      onClick={() => burgerStore.toggleOpen()}
    ></div>
  );
}
