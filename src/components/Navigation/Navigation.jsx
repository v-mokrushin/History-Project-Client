import classNames from "classnames";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { audioMiddlewares } from "../../store/audioPlayer/playingMiddleware";
import { navigationSelectors } from "../../store/navigation/selectors";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { BurgerContext } from "../Burger/context";
import { NAVIGATION_ACTUAL_SECTION } from "./constants";
import styles from "./Navigation.module.scss";
import { changeActualSection } from "../../store/navigation/changeActualSectionMiddleware";

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
        onClick={burgerContext.setClose}
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
        onClick={burgerContext.setClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualWeapons) && styles.link_active
        )}
        onClick={burgerContext.setClose}
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
          burgerContext.setClose();
          dispatch(changeActualSection(NAVIGATION_ACTUAL_SECTION.battles));
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

{
  /* <NavLink
        to="/"
        className={({ isActive }) => {
          console.log(isActive);
          return classNames(styles.link, { [styles.link_active]: isActive });
        }}
        onClick={burgerContext.setClose}
      >
        Главная
      </NavLink>
      <NavLink
        to="/articles"
        className={({ isActive }) =>
          classNames(styles.link, { [styles.link_active]: isActive })
        }
        onClick={burgerContext.setClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={({ isActive }) =>
          classNames(styles.link, { [styles.link_active]: isActive })
        }
        onClick={burgerContext.setClose}
      >
        Вооружения
      </NavLink>
      <NavLink
        to="/battles"
        className={({ isActive }) =>
          classNames(styles.link, { [styles.link_active]: isActive })
        }
        onClick={burgerContext.setClose}
      >
        Сражения
      </NavLink> */
}
