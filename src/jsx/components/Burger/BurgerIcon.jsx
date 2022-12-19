import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import styles from "./Burger.module.scss";
import { BurgerContext } from "./context";

export default function BurgerIcon() {
  const burgerContext = useContext(BurgerContext);

  return (
    <div
      className={styles.openIcon}
      onClick={() => burgerContext.toggleBurgerOpen()}
    ></div>
  );
}
