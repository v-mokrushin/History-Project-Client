import classNames from "classnames";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { BurgerContext } from "../Burger/context";
import styles from "./Navigation.module.scss";

export default function Navigation({ isTypeBurger = false }) {
  const burgerContext = useContext(BurgerContext);

  return (
    <nav
      className={classNames(styles.root, isTypeBurger && styles.rootTypeBurger)}
    >
      <NavLink to="/" className={styles.link} onClick={burgerContext.setClose}>
        Главная
      </NavLink>
      <NavLink
        to="/articles"
        className={styles.link}
        onClick={burgerContext.setClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={styles.link}
        onClick={burgerContext.setClose}
      >
        Вооружения
      </NavLink>
      <NavLink
        to="/battles"
        className={styles.link}
        onClick={burgerContext.setClose}
      >
        Сражения
      </NavLink>
      <NavLink
        to="/links"
        className={styles.link}
        onClick={burgerContext.setClose}
      >
        Ссылки
      </NavLink>
      <AudioPlayer />
    </nav>
  );
}
