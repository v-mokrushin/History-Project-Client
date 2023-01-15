import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import Input from "components/Input/Input";
import Filter from "components/Filter/Filter";
import filtersStore from "stores/mobx/filtersStore";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import { WEAPONS } from "data/weapons/weapons";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

interface IFiltersProps {
  selectedWeapons: TWeapon[];
  className?: string;
}

const Filters = ({ className, selectedWeapons }: IFiltersProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Input callback={filtersStore.setNameFilter.bind(filtersStore)} />
      <Filter
        title="Нация"
        selectionVariants={WEAPONS.getNations(selectedWeapons)}
        setterCallback={filtersStore.setNation.bind(filtersStore)}
        getter={filtersStore.nation}
      />
      <Filter
        title="Тип"
        selectionVariants={WEAPONS_TYPE_METHODS.getTypesArrayWithAll(
          selectedWeapons[0].branch!
        )}
        setterCallback={filtersStore.setType.bind(filtersStore)}
        getter={filtersStore.typeName}
      />
      <Filter
        title="Разработчик"
        selectionVariants={WEAPONS.getDevelopers(selectedWeapons)}
        setterCallback={filtersStore.setDeveloper.bind(filtersStore)}
        getter={filtersStore.developerName}
      />
      <Filter
        title="Глав. конструктор"
        selectionVariants={WEAPONS.getChiefDesigners(selectedWeapons)}
        setterCallback={filtersStore.setChiefDesigner.bind(filtersStore)}
        getter={filtersStore.chiefDesigner}
      />
      <Filter
        title="База"
        selectionVariants={WEAPONS.getPlatforms(selectedWeapons)}
        setterCallback={filtersStore.setPlatform.bind(filtersStore)}
        getter={filtersStore.platform}
      />
    </div>
  );
};

export default Filters;
