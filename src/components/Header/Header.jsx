import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  // console.log(path);

  return (
    <header
      className={classNames(
        styles.root,
        path === "/weapons/armored/soviet-union" && styles.ordinar,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo forHeader />
      <BurgerIcon />
      <Navigation />
    </header>
  );
}
