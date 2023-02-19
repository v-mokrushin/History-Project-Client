import React from "react";
import styles from "./ToolButton.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { NavLink } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";
import actualSectionStore from "stores/mobx/actualSectionStore";

interface IToolButtonProps {
  burgerType?: boolean;
  className?: string;
}

const ToolButton = observer(({ burgerType, className }: IToolButtonProps) => {
  return (
    <NavLink to={"article-creator"}>
      <button
        onClick={() => {
          burgerStore.setClose();
          actualSectionStore.throw();
        }}
        className={styles.root}
      ></button>
    </NavLink>
  );
});

export default ToolButton;
