import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import Text from "components/Texts/Text/Text";

interface IButtonProps {
  text: string;
  callback: Function;
  className?: string;
}

const Button = ({ text, callback, className }: IButtonProps) => {
  return (
    <button
      className={classNames(styles.root, className)}
      onClick={() => callback()}
    >
      <Text className={styles.text}>{text}</Text>
    </button>
  );
};

export default Button;
