import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../javascript/constants/animation";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { PAGES_DATA } from "../../../javascript/constants/pages";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <header
      className={classNames(
        styles.root,
        PAGES_DATA.getPathLength(path) === 4 && styles.ordinar,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo forHeader />
      <BurgerIcon />
      <Navigation />
    </header>
  );
}
