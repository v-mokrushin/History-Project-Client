import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import filtersStore from "../../../javascript/store/mobx/filters";
import { observer } from "mobx-react";

interface IFilterProps {
  className?: string;
  weaponBranch: object;
}

const Filter = observer(({ className, weaponBranch }: IFilterProps) => {
  const [open, setOpen] = React.useState(false);
  const weaponTypes = React.useMemo(
    () => WEAPONS_TYPE.getTypesArrayWithAll(weaponBranch),
    [weaponBranch]
  );

  document.onclick = React.useCallback((event: any) => {
    if (!event.target.closest("#filter")) {
      setOpen(false);
    }
  }, []);

  function getTitle() {
    return filtersStore.getFilters().type?.name.russian;
  }

  return (
    <div className={classNames(styles.root, className)} id="filter">
      <div
        className={classNames(styles.item)}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Text className={styles.item_text}>Тип</Text>
        <Text className={styles.item_selectedText}>{getTitle()}</Text>
        <button
          className={classNames(styles.arrow, open && styles.arrow_open)}
        ></button>
        <div className={classNames(styles.vars, open && styles.vars_open)}>
          {weaponTypes.map((type, index) => (
            <div
              className={styles.vars__item}
              key={type.name.russian + index}
              onClick={() => {
                filtersStore.setFilter(
                  !WEAPONS_TYPE.isAllType(type) ? { type } : {}
                );
              }}
            >
              <Text className={styles.vars__item__text}>
                {type.name.russian}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Filter;
