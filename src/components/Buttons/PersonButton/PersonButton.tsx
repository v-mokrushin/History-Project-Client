import React from "react";
import styles from "./PersonButton.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { NavLink } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";
import actualSectionStore from "stores/mobx/actualSectionStore";

interface IPersonButtonProps {
  burgerType?: boolean;
  className?: string;
}

const PersonButton = observer(
  ({ burgerType, className }: IPersonButtonProps) => {
    return (
      <NavLink to={"/account"}>
        <button
          onClick={() => {
            burgerStore.setClose();
            actualSectionStore.throw();
          }}
          className={styles.root}
        ></button>
      </NavLink>
    );
  }
);

export default PersonButton;
