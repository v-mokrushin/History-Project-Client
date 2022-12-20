import classNames from "classnames";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { audioMiddlewares } from "../../../javascript/store/redux/audioPlayer/playingMiddleware";
import { navigationSelectors } from "../../../javascript/store/redux/navigation/selectors";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { BurgerContext } from "../Burger/context";
import styles from "./Navigation.module.scss";
import { navigationMiddlewares } from "../../../javascript/store/redux/navigation/changeActualSectionMiddleware";

export default function Navigation({ isTypeBurger = false }) {
  const burgerContext = useContext(BurgerContext);
  const dispatch = useDispatch();

  return (
    <nav
      className={classNames(styles.root, isTypeBurger && styles.rootTypeBurger)}
    >
      <NavLink
        to="/"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualHome) && styles.link_active
        )}
        onClick={burgerContext.setBurgerClose}
      >
        Главная
      </NavLink>
      <NavLink
        to="/articles"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualArticles) &&
            styles.link_active
        )}
        onClick={burgerContext.setBurgerClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualWeapons) && styles.link_active
        )}
        onClick={burgerContext.setBurgerClose}
      >
        Вооружения
      </NavLink>
      <NavLink
        to="/battles"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualBattles) && styles.link_active
        )}
        onClick={() => {
          burgerContext.setBurgerClose();
          dispatch(navigationMiddlewares.setBattlesActualSection());
        }}
      >
        Сражения
      </NavLink>
      <div className={styles.musicBox}>
        <span
          className={styles.link}
          onClick={() => dispatch(audioMiddlewares.toggle)}
        >
          Музыка
        </span>
        <AudioPlayer isMainPlayer={!isTypeBurger} />
      </div>
    </nav>
  );
}
