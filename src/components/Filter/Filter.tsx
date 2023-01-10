import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { observer } from "mobx-react";

interface IFilterProps {
  title: string;
  selectionVariants: any[];
  callback: any;
  getter: any;
  className?: string;
}

const Filter = observer(
  ({ title, selectionVariants, callback, getter, className }: IFilterProps) => {
    const [open, setOpen] = React.useState(false);

    if (selectionVariants.length === 1) return <></>;

    document.onclick = React.useCallback((event: any) => {
      if (!event.target.closest(`#filter-${title}`)) {
        setOpen(false);
      }
    }, []);

    return (
      <div
        className={classNames(styles.root, className)}
        id={`filter-${title}`}
      >
        <div
          className={classNames(styles.item)}
          onClick={() => {
            setOpen((val) => !val);
          }}
        >
          <Text className={styles.item_text}>{title}</Text>
          <Text className={styles.item_selectedText}>{getter}</Text>
          <button
            className={classNames(styles.arrow, open && styles.arrow_open)}
          ></button>
          <div className={classNames(styles.vars, open && styles.vars_open)}>
            {selectionVariants.map((variant, index) => (
              <div
                className={styles.vars__item}
                key={variant.name.russian + index}
                onClick={() => callback(variant)}
              >
                <Text className={styles.vars__item__text}>
                  {variant.name.russian}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default Filter;
