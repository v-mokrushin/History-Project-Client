import classNames from "classnames";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { audioMiddlewares } from "../../../javascript/store/redux/audioPlayer/playingMiddleware";
import { navigationSelectors } from "../../../javascript/store/redux/navigation/selectors";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import styles from "./Navigation.module.scss";
import { navigationMiddlewares } from "../../../javascript/store/redux/navigation/changeActualSectionMiddleware";
import { burgerStore } from "../../../javascript/store/mobx/index";

export default function Navigation({ isTypeBurger = false }) {
  const dispatch = useDispatch();

  function actionOnClose() {
    burgerStore.setClose();
  }

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
        onClick={actionOnClose}
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
        onClick={actionOnClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={classNames(
          styles.link,
          useSelector(navigationSelectors.isActualWeapons) && styles.link_active
        )}
        onClick={actionOnClose}
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
          actionOnClose();
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
