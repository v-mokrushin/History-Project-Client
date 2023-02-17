import classNames from "classnames";
import IconsBox from "components/Buttons/IconsBox/IconsBox";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import { observer } from "mobx-react";
import React from "react";
import burgerStore from "../../../stores/mobx/burgerStore";
import Logo from "../../Graphics/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Burger.module.scss";

const Burger = observer(() => {
  return (
    <aside
      className={classNames(styles.root, burgerStore.open && styles.root_open)}
    >
      <div className={styles.header}>
        <Logo onClick={burgerStore.toggleOpen} />
        <button
          className={styles.closeButton}
          onClick={burgerStore.setClose.bind(burgerStore)}
        ></button>
        <IconsBox burgerType />
      </div>
      <Navigation isTypeBurger />
    </aside>
  );
});

export default Burger;
