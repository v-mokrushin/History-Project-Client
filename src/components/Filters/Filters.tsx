import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import Input from "components/Input/Input";
import Filter from "components/Filter/Filter";
import filtersStore from "stores/mobx/filtersStore";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import { WEAPONS_DATA } from "data/weapons/weapons";

interface IFiltersProps {
  className?: string;
  weaponBranch: object;
}

const Filters = ({ className, weaponBranch }: IFiltersProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Filter
        title="Тип"
        selectionVariants={WEAPONS_TYPE_METHODS.getTypesArrayWithAll(
          weaponBranch
        )}
        callback={filtersStore.setType.bind(filtersStore)}
        getter={filtersStore.typeName}
      />
      <Filter
        title="Разработчик"
        selectionVariants={WEAPONS_DATA.getDevelopersWithAll(weaponBranch)}
        callback={filtersStore.setDeveloper.bind(filtersStore)}
        getter={filtersStore.developerName}
      />
      <Input />
    </div>
  );
};

export default Filters;
