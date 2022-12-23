import React from "react";
import burgerStore from "../../../javascript/store/mobx/burger";
import styles from "./Burger.module.scss";

export default function BurgerIcon() {
  return (
    <div
      className={styles.openIcon}
      onClick={() => burgerStore.toggleOpen()}
    ></div>
  );
}
