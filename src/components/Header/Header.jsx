import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header
      className={classNames(
        styles.root,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo forHeader />
      <BurgerIcon />
      <Navigation />
    </header>
  );
}
