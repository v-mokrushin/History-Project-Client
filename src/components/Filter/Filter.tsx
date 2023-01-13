import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { observer } from "mobx-react";

interface IFilterProps {
  title: string;
  selectionVariants: string[];
  setterCallback: (parameter: string) => void;
  getter: string | undefined;
  className?: string;
}

const Filter = observer(
  ({
    title,
    selectionVariants,
    setterCallback,
    getter,
    className,
  }: IFilterProps) => {
    const [open, setOpen] = React.useState(false);

    if (selectionVariants.length <= 2) return <></>;

    document.onclick = React.useCallback((event: any) => {
      if (
        !event.target.closest(
          `#filter-${title.replace(" ", "").replace(".", "")}`
        )
      ) {
        setOpen(false);
      }
    }, []);

    return (
      <div
        className={classNames(styles.wrapper, className)}
        id={`filter-${title.replace(" ", "").replace(".", "")}`}
        onClick={() => {
          setOpen((val) => !val);
        }}
      >
        <Text>{title}</Text>
        <Text className={styles.wrapper_selected}>{getter}</Text>
        <button
          className={classNames(styles.arrow, open && styles.arrow_open)}
        ></button>
        <div
          className={classNames(
            styles.variantsBox,
            open && styles.variantsBox_open
          )}
        >
          {selectionVariants.map((variant, index) => (
            <div
              className={styles.variant}
              key={variant + index}
              onClick={() => setterCallback(variant)}
            >
              <Text
                className={classNames(
                  styles.variant__text,
                  getter === variant && styles.variant_selected,
                  (variant === "Все" || variant === "Весь мир") &&
                    !getter &&
                    styles.variant_selected
                )}
              >
                {variant}
              </Text>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Filter;
