import React, { MouseEvent } from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { observer } from "mobx-react";
import { INation, NATIONS } from "constants/nations";
import Flag from "components/Flag/Flag";

interface IFilterProps {
  title: string;
  selectionVariants?: string[];
  selectionVariantsWithFlags?: ISelectionVariantWithFlag[];
  setterCallback: (parameter: string) => void;
  getter: string | undefined;
  className?: string;
}

export interface ISelectionVariantWithFlag {
  title: string;
  nation: INation;
}

const Filter: React.FC<IFilterProps> = observer(
  ({
    title,
    selectionVariants,
    selectionVariantsWithFlags,
    setterCallback,
    getter,
    className,
  }) => {
    const [open, setOpen] = React.useState(false);

    if (!selectionVariants && !selectionVariantsWithFlags) return <></>;
    if (selectionVariants) if (selectionVariants.length <= 2) return <></>;
    if (selectionVariantsWithFlags)
      if (selectionVariantsWithFlags.length <= 2) return <></>;

    function onClick(event: any) {
      if (
        !event.target.closest(
          `#filter-${title.replace(" ", "").replace(".", "")}`
        )
      ) {
        setOpen(false);
      }
    }

    React.useEffect(() => {
      document.addEventListener("click", onClick);

      return () => {
        document.removeEventListener("click", onClick);
      };
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
          {selectionVariants &&
            selectionVariants.map((variant, index) => (
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
          {selectionVariantsWithFlags &&
            selectionVariantsWithFlags.map((variant, index) => (
              <div
                className={styles.variant}
                key={variant.title + index}
                onClick={() => setterCallback(variant.title)}
              >
                <Flag nation={variant.nation} isNavLink={false} forFilter />
                <Text
                  className={classNames(
                    styles.variant__text,
                    getter === variant.title && styles.variant_selected,
                    (variant.title === "Все" || variant.title === "Весь мир") &&
                      !getter &&
                      styles.variant_selected
                  )}
                >
                  {variant.title}
                </Text>
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default Filter;
