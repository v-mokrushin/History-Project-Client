import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import classNames from "classnames";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { ANIMATIONS } from "../../constants/animation";
import BurgerIcon from "../Burger/BurgerIcon";
import Navigation from "../Navigation/Navigation";

export default function Header({ isTransparent = false }) {
  return (
    <header
      className={classNames(
        styles.root,
        isTransparent && styles.root_typeTransparent,
        ANIMATIONS.fadeIn
      )}
    >
      <Logo forHeader />
      <BurgerIcon />
      <Navigation />
    </header>
  );
}
