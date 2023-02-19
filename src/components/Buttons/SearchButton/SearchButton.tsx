import React from "react";
import styles from "./SearchButton.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";

interface ISearchButtonProps {
  burgerType?: boolean;
  className?: string;
}

const SearchButton = observer(
  ({ burgerType, className }: ISearchButtonProps) => {
    return (
      <button
        onClick={() => commonApplicationStore.showSearchDialog()}
        className={styles.root}
      ></button>
    );
  }
);

export default SearchButton;
