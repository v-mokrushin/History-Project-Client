import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";

interface IButtonProps {
  callback: Function;
  className?: string;
}

const Button = ({ callback, className }: IButtonProps) => {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={() => callback()}
    >
      <Text className={styles.text}>Сбросить</Text>
    </button>
  );
};

export default Button;
