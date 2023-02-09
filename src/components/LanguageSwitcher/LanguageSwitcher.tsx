import React from "react";
import styles from "./LanguageSwitcher.module.scss";
import styles2 from "../Navigation/Navigation.module.scss";
import classNames from "classnames";
import settingsStore from "stores/mobx/settingsStore";
import i18n from "i18next";
import { observer } from "mobx-react";

interface ILanguageSwitcher {
  burgerType?: boolean;
  className?: string;
}

const LanguageSwitcher = observer(
  ({ burgerType, className }: ILanguageSwitcher) => {
    return (
      <button
        className={classNames(
          styles.wrapper,
          burgerType && styles.wrapper_forBurger
        )}
        onClick={() => i18n.changeLanguage(settingsStore.toggleLanguage())}
      >
        <img
          className={styles.earthIcon}
          src="/images/earth.svg"
          alt="Earth image"
        />
        <div className={classNames(styles2.link, styles2.link_mod)}>
          {settingsStore.language}
        </div>
      </button>
    );
  }
);

export default LanguageSwitcher;
