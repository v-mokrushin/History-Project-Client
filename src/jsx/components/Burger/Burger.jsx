import classNames from "classnames";
import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Burger.module.scss";
import { BurgerContext } from "./context";

export default function Burger() {
  const burgerContext = useContext(BurgerContext);

  return (
    <div
      className={classNames(
        styles.root,
        burgerContext.burgerOpen && styles.root_open
      )}
    >
      <div className={styles.header}>
        <Logo onClick={burgerContext.toggleBurgerOpen} />
        <div className={styles.closeIcon} onClick={burgerContext.setBurgerClose}></div>
      </div>
      <Navigation isTypeBurger={true} />
    </div>
  );
}
