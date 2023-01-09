import classNames from "classnames";
import { observer } from "mobx-react";
import React from "react";
import burgerStore from "../../stores/mobx/burgerStore";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Burger.module.sass";

const Burger = observer(() => {
  return (
    <div
      className={classNames(styles.root, burgerStore.open && styles.root_open)}
    >
      <div className={styles.header}>
        <Logo onClick={burgerStore.toggleOpen} />
        <div
          className={styles.closeIcon}
          onClick={burgerStore.setClose.bind(burgerStore)}
        ></div>
      </div>
      <Navigation isTypeBurger={true} />
    </div>
  );
});

export default Burger;
