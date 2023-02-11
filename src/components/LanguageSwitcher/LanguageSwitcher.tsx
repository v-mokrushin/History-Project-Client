import React from "react";
import styles from "./LanguageSwitcher.module.scss";
import styles2 from "../Navigation/Navigation.module.scss";
import classNames from "classnames";
import settingsStore from "stores/mobx/settingsStore";
import i18n from "i18next";
import { observer } from "mobx-react";

interface ILanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = observer(({ className }: ILanguageSwitcherProps) => {
  return (
    <button
      className={classNames(styles.wrapper)}
      onClick={() =>
        setTimeout(() => {
          i18n.changeLanguage(settingsStore.toggleLanguage());
        }, 500)
      }
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
});

export default LanguageSwitcher;
