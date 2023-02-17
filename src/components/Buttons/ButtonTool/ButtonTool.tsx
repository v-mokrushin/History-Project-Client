import React from "react";
import styles from "./ButtonTool.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { NavLink } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";

interface IButtonToolProps {
  burgerType?: boolean;
  className?: string;
}

const ButtonTool = observer(({ burgerType, className }: IButtonToolProps) => {
  return (
    <NavLink to={"article-creator"}>
      <button
        onClick={() => burgerStore.setClose()}
        className={styles.root}
      ></button>
    </NavLink>
  );
});

export default ButtonTool;
