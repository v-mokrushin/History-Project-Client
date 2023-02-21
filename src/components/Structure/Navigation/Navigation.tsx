import classNames from "classnames";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../../Controls/AudioPlayer/AudioPlayer";
import styles from "./Navigation.module.scss";
import audioPlayerStore from "../../../stores/mobx/audioPlayerStore";
import { observer } from "mobx-react";
import actualSectionStore from "../../../stores/mobx/actualSectionStore";
import burgerStore from "../../../stores/mobx/burgerStore";
import settingsStore from "stores/mobx/settingsStore";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { DocumentTitle } from "utils/document-title";

interface INavigationProps {
  isTypeBurger?: boolean;
}

const Navigation: React.FC<INavigationProps> = observer(
  ({ isTypeBurger = false }) => {
    const actualSection = actualSectionStore.actualSection;
    const { t, i18n } = useTranslation();

    function actionOnClose() {
      burgerStore.setClose();
    }

    return (
      <nav
        className={classNames(
          styles.root,
          isTypeBurger && styles.rootTypeBurger
        )}
      >
        <NavLink
          to="/"
          className={classNames(
            styles.link,
            actualSectionStore.isHome() && styles.link_active
          )}
          onClick={actionOnClose}
        >
          {t("navigation.main")}
        </NavLink>
        <NavLink
          to="/articles"
          className={classNames(
            styles.link,
            actualSectionStore.isArticles() && styles.link_active
          )}
          onClick={actionOnClose}
        >
          {t("navigation.articles")}
        </NavLink>
        <div className={styles.weaponBox}>
          <NavLink
            to="/weapons"
            className={classNames(
              styles.link,
              styles.weaponBox__link,
              actualSectionStore.isWeapons() && styles.link_active
            )}
            onClick={actionOnClose}
          >
            {t("navigation.weapons")}
          </NavLink>
          <div
            className={classNames(
              styles.weaponBox__suggestion,
              commonApplicationStore.rdinarHeaderVisibility &&
                styles.weaponBox__suggestion_opaque
            )}
          >
            <NavLink
              to="weapons/armored-vehicles"
              className={classNames(styles.link, styles.link_mod)}
              onClick={actionOnClose}
            >
              Бронетехника
            </NavLink>
            <NavLink
              to="/weapons/aviation"
              className={classNames(styles.link, styles.link_mod)}
              onClick={actionOnClose}
            >
              Авиация
            </NavLink>
            <NavLink
              to="/weapons/artillery"
              className={classNames(styles.link, styles.link_mod)}
              onClick={actionOnClose}
            >
              Артиллерия
            </NavLink>
            <NavLink
              to="weapons/small-arms"
              className={classNames(styles.link, styles.link_mod)}
              onClick={actionOnClose}
            >
              Стрелковое
            </NavLink>
            <NavLink
              to="weapons/grenade-launchers"
              className={classNames(styles.link, styles.link_mod)}
              onClick={actionOnClose}
            >
              Гранатометы
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/battles"
          className={classNames(
            styles.link,
            actualSectionStore.isBattles() && styles.link_active
          )}
          onClick={() => {
            actionOnClose();
            actualSectionStore.set("/battles");
            DocumentTitle.set("Сражения");
          }}
        >
          {t("navigation.battles")}
        </NavLink>
        <NavLink
          to="/gallery"
          className={classNames(
            styles.link,
            actualSectionStore.isGallery() && styles.link_active
          )}
          onClick={() => {
            actionOnClose();
            actualSectionStore.set("/gallery");
          }}
        >
          {t("navigation.gallery")}
        </NavLink>
        <div className={styles.musicBox}>
          <span
            className={classNames(styles.link, styles.link_mod)}
            onClick={() => audioPlayerStore.toggle()}
          >
            {t("navigation.music")}
          </span>
          <AudioPlayer isMainPlayer={!isTypeBurger} />
        </div>
      </nav>
    );
  }
);

export default Navigation;
