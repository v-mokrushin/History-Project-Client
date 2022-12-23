import classNames from "classnames";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import styles from "./Navigation.module.scss";
import audioPlayerStore from "../../../javascript/store/mobx/audioPlayer";
import { observer } from "mobx-react";
import actualSectionStore from "../../../javascript/store/mobx/actualSection";
import burgerStore from "../../../javascript/store/mobx/burger";

const Navigation = observer(({ isTypeBurger = false }) => {
  const actualSection = actualSectionStore.actualSection;

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
          actualSectionStore.isHome() && styles.link_active
        )}
        onClick={actionOnClose}
      >
        Главная
      </NavLink>
      <NavLink
        to="/articles"
        className={classNames(
          styles.link,
          actualSectionStore.isArticles() && styles.link_active
        )}
        onClick={actionOnClose}
      >
        Статьи
      </NavLink>
      <NavLink
        to="/weapons"
        className={classNames(
          styles.link,
          actualSectionStore.isWeapons() && styles.link_active
        )}
        onClick={actionOnClose}
      >
        Вооружения
      </NavLink>
      <NavLink
        to="/battles"
        className={classNames(
          styles.link,
          actualSectionStore.isBattles() && styles.link_active
        )}
        onClick={() => {
          actionOnClose();
          actualSectionStore.set("/battles");
        }}
      >
        Сражения
      </NavLink>
      <div className={styles.musicBox}>
        <span className={styles.link} onClick={() => audioPlayerStore.toggle()}>
          Музыка
        </span>
        <AudioPlayer isMainPlayer={!isTypeBurger} />
      </div>
    </nav>
  );
});

export default Navigation;
