import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { observer } from "mobx-react";

interface IFilterProps {
  title: string;
  selectionVariants: any[];
  callback: any;
  getter: string;
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
        className={classNames(styles.wrapper, className)}
        id={`filter-${title}`}
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
              key={variant.name.russian + index}
              onClick={() => callback(variant)}
            >
              <Text
                className={classNames(
                  styles.variant__text,
                  getter === variant.name.russian && styles.variant_selected,
                  variant.name.russian === "Все" &&
                    !getter &&
                    styles.variant_selected
                )}
              >
                {variant.name.russian}
              </Text>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Filter;
