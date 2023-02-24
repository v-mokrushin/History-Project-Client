import React from "react";
import styles from "./FilterButton.module.scss";
import classNames from "classnames";
import Text from "components/Texts/Text/Text";

interface IFilterButtonProps {
  text: string;
  callback: Function;
  className?: string;
}

const FilterButton = ({ text, callback, className }: IFilterButtonProps) => {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={() => callback()}
    >
      <Text className={styles.text}>{text}</Text>
    </button>
  );
};

export default FilterButton;
