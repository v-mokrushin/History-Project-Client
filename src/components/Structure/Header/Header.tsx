import React from "react";
import Logo from "../../Graphics/Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { Pages } from "../../../constants/pages";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ButtonSearch from "components/Buttons/SearchButton/SearchButton";
import HeaderButtonsGroup from "components/Buttons/HeaderButtonsGroup/HeaderButtonsGroup";
import actualSectionStore from "stores/mobx/actualSectionStore";
import { observer } from "mobx-react-lite";
import commonApplicationStore from "stores/mobx/commonApplicationStore";

const Header = observer(() => {
  const path: string = useLocation().pathname;

  return (
    <header
      className={classNames(
        styles.root,
        commonApplicationStore.ordinarHeaderVisibility && styles.ordinar,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo />
      <BurgerIcon />
      <Navigation />
      <HeaderButtonsGroup />
    </header>
  );
});

export default Header;
