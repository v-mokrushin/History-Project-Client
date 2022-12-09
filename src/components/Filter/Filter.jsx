import React from "react";
import styles from "./Filter.module.scss";
import classNames from "classnames";
import Text from "../Text/Text";
import { WEAPONS_TYPE } from "../../constants/weapons";

const arr = ["Тип"];

export default function Filter({ className, weaponBranch, setFilters }) {
  const [open, setOpen] = React.useState(false);
  const [selectedWeaponType, setSelectedType] = React.useState(
    WEAPONS_TYPE.getAllType()
  );
  const types = React.useMemo(
    () => WEAPONS_TYPE.getTypesArrayWithAll(weaponBranch),
    []
  );

  document.onclick = React.useCallback((event) => {
    if (!event.target.closest("#filter")) {
      setOpen(false);
    }
  }, []);

  function getTitle() {
    if (selectedWeaponType) {
      if (!WEAPONS_TYPE.isAllType(selectedWeaponType)) {
        return selectedWeaponType.name.russian;
      } else {
        return "";
      }
    } else {
      return "";
    }
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
        <div
          className={classNames(
            styles.vars,
            open && styles.vars_open,
            "filter"
          )}
        >
          {types.map((type, index) => (
            <div
              className={styles.vars__item}
              key={type.name.russian + index}
              onClick={() => {
                setSelectedType(type);
                setFilters(!WEAPONS_TYPE.isAllType(type) ? { type } : {});
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
}
