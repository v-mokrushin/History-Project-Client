import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import Input from "components/Input/Input";
import Filter from "components/Filter/Filter";
import filtersStore from "stores/mobx/filtersStore";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import { WEAPONS } from "data/weapons/weapons";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import Button from "components/Button/Button";

interface IFiltersProps {
  weapons: TWeapon[];
  className?: string;
}

const Filters = ({ className, weapons }: IFiltersProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Input callback={filtersStore.setNameFilter.bind(filtersStore)} />
      <Filter
        title="Нация"
        selectionVariantsWithFlags={WEAPONS.getNationsWithFlags(weapons)}
        setterCallback={filtersStore.setNation.bind(filtersStore)}
        getter={filtersStore.filters.nation}
      />
      <Filter
        title="Тип"
        selectionVariants={WEAPONS_TYPE_METHODS.getTypesArrayWithAll(
          weapons[0].branch!
        )}
        setterCallback={filtersStore.setType.bind(filtersStore)}
        getter={filtersStore.filters.type}
      />
      <Filter
        title="Разработчик"
        selectionVariantsWithFlags={WEAPONS.getDevelopersWithFlags(weapons)}
        setterCallback={filtersStore.setDeveloper.bind(filtersStore)}
        getter={filtersStore.filters.developer}
      />
      <Filter
        title="Производитель"
        selectionVariantsWithFlags={WEAPONS.getProducersWithFlags(weapons)}
        setterCallback={filtersStore.setProducer.bind(filtersStore)}
        getter={filtersStore.filters.producer}
      />
      {/* <Filter
        title="Производитель"
        selectionVariantsWithFlags={WEAPONS.getProducersWithFlags(weapons)}
        setterCallback={filtersStore.setProducer.bind(filtersStore)}
        getter={filtersStore.producer}
      /> */}
      <Filter
        title="Глав. конструктор"
        selectionVariantsWithFlags={WEAPONS.getChiefDesignersWithFlags(weapons)}
        setterCallback={filtersStore.setChiefDesigner.bind(filtersStore)}
        getter={filtersStore.filters.chiefDesigner}
      />
      <Filter
        title="База"
        selectionVariants={WEAPONS.getPlatforms(weapons)}
        setterCallback={filtersStore.setPlatform.bind(filtersStore)}
        getter={filtersStore.filters.platform}
      />
      <Button callback={filtersStore.cancelFilters.bind(filtersStore)} />
    </div>
  );
};

export default Filters;
