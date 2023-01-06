import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import filtersStore from "stores/mobx/filters";

interface IInputProps {
  className?: string;
}

const Input = ({ className }: IInputProps) => {
  const input = React.useRef<HTMLInputElement>(null);

  return (
    <div className={styles.root}>
      <input
        ref={input}
        type="text"
        className={styles.input}
        placeholder="Название..."
        onInput={() => filtersStore.setNameFilter(input.current!.value)}
      ></input>
      <div className={styles.icon}></div>
    </div>
  );
};

export default Input;
