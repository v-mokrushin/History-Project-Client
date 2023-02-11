import React from "react";
import styles from "./ButtonSearch.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";

interface IButtonSearchProps {
  burgerType?: boolean;
  className?: string;
}

const ButtonSearch = observer(
  ({ burgerType, className }: IButtonSearchProps) => {
    return (
      <button
        onClick={() => commonApplicationStore.showSearchDialog()}
        className={styles.root}
      ></button>
    );
  }
);

export default ButtonSearch;
