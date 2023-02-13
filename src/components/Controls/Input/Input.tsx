import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import filtersStore from "stores/mobx/filtersStore";
import { observer } from "mobx-react";

interface IInputProps {
  setter?: (text: string) => void;
  initialValue?: string;
  placeholder?: string;
  className?: string;
}

const Input = observer(
  ({ setter, initialValue = "", placeholder, className }: IInputProps) => {
    const input = React.useRef<HTMLInputElement>(null);
    const [numberOfUse, setNumberOfUse] = React.useState<number>(0);
    console.log(input.current?.value);

    return (
      <div className={classNames(styles.root, className)}>
        <input
          ref={input}
          type="text"
          className={styles.input}
          placeholder={placeholder ? placeholder + "..." : ""}
          value={numberOfUse === 0 ? initialValue : input.current?.value}
          onInput={() => {
            setNumberOfUse((val) => val + 1);
            setter && setter(input.current!.value);
          }}
        ></input>
        <div className={styles.icon}></div>
      </div>
    );
  }
);

export default Input;