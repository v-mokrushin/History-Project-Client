import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import filtersStore from "stores/mobx/filtersStore";
import { observer } from "mobx-react";

interface IInputProps {
  callback: (text: string) => void;
  className?: string;
}

const Input = observer(({ callback, className }: IInputProps) => {
  const input = React.useRef<HTMLInputElement>(null);

  return (
    <div className={styles.root}>
      <input
        ref={input}
        type="text"
        className={styles.input}
        placeholder="Название..."
        value={filtersStore.filters.name}
        onInput={() => callback(input.current!.value)}
      ></input>
      <div className={styles.icon}></div>
    </div>
  );
});

export default Input;
