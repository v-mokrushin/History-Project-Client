import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { burgerStore } from "../../../javascript/store/mobx/index";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Burger.module.scss";

const Burger = observer(() => (
  <div className={classNames(styles.root, burgerStore.open && styles.root_open)}>
    <div className={styles.header}>
      <Logo onClick={burgerStore.toggleOpen} />
      <div
        className={styles.closeIcon}
        onClick={burgerStore.setClose.bind(burgerStore)}
      ></div>
    </div>
    <Navigation isTypeBurger={true} />
  </div>
));

export default Burger;
