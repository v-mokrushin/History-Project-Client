import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { WEAPONS_TYPE_METHODS } from "../../constants/weapons";
import filtersStore from "../../stores/mobx/filters";
import { observer } from "mobx-react";
import settingsStore from "stores/mobx/settings";
import Input from "components/Input/Input";

interface IFilterProps {
  className?: string;
  weaponBranch: object;
}

const Filter = observer(({ className, weaponBranch }: IFilterProps) => {
  const [open, setOpen] = React.useState(false);
  const weaponTypes = React.useMemo(
    () => WEAPONS_TYPE_METHODS.getTypesArrayWithAll(weaponBranch),
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
                filtersStore.setTypeFilter(type);
              }}
            >
              <Text className={styles.vars__item__text}>
                {type.name.russian}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
});

export default Filter;
