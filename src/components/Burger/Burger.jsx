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
        burgerContext.isOpen && styles.rootOpen
      )}
    >
      <div className={styles.header}>
        <Logo onClick={burgerContext.toggle} />
        <div className={styles.closeIcon} onClick={burgerContext.toggle}></div>
      </div>
      <Navigation isTypeBurger={true} />
    </div>
  );
}
