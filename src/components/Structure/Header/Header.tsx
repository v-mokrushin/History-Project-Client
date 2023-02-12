import React from "react";
import Logo from "../../Graphics/Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { PAGES } from "../../../constants/pages";
import LanguageSwitcher from "components/Controls/LanguageSwitcher/LanguageSwitcher";
import ButtonSearch from "components/Buttons/ButtonSearch/ButtonSearch";
import IconsBox from "components/Controls/IconsBox/IconsBox";

export default function Header() {
  const path: string = useLocation().pathname;

  return (
    <header
      className={classNames(
        styles.root,
        PAGES.getPathLength(path) === 4 && styles.ordinar,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo />
      <BurgerIcon />
      <Navigation />
      <IconsBox />
    </header>
  );
}
