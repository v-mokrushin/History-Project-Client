import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import Input from "components/Controls/Input/Input";
import Filter from "components/Controls/Filter/Filter";
import filtersStore from "stores/mobx/filtersStore";
import { WeaponClassificationMethods } from "constants/weapon-types";
import { Weapons } from "data/weapons/weapons";
import { TWeapon } from "interfaces/weapons/common-weapon-interfaces";
import Button from "components/Buttons/FilterButton/FilterButton";
import { useTranslation } from "react-i18next";

interface IFiltersProps {
  weapons: TWeapon[];
  className?: string;
}

const Filters: React.FC<IFiltersProps> = ({ className, weapons }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.root, className)}>
      <Input
        type="text"
        setter={filtersStore.setNameFilter.bind(filtersStore)}
        placeholder={t("filters.input")!}
        initialValue={filtersStore.filters.name}
      />
      <Filter
        title={t("filters.country")!}
        selectionVariantsWithFlags={Weapons.getNationsWithFlags(weapons)}
        setterCallback={filtersStore.setNation.bind(filtersStore)}
        getter={filtersStore.filters.nation}
      />
      <Filter
        title="Тип"
        selectionVariants={WeaponClassificationMethods.getTypesArrayWithAll(
          weapons[0].branch!
        )}
        setterCallback={filtersStore.setType.bind(filtersStore)}
        getter={filtersStore.filters.type}
      />
      <Filter
        title={t("filters.developer")!}
        selectionVariantsWithFlags={Weapons.getDevelopersWithFlags(weapons)}
        setterCallback={filtersStore.setDeveloper.bind(filtersStore)}
        getter={filtersStore.filters.developer}
      />
      <Filter
        title={t("filters.producer")!}
        selectionVariantsWithFlags={Weapons.getProducersWithFlags(weapons)}
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
        title={t("filters.chief_designer")!}
        selectionVariantsWithFlags={Weapons.getChiefDesignersWithFlags(weapons)}
        setterCallback={filtersStore.setChiefDesigner.bind(filtersStore)}
        getter={filtersStore.filters.chiefDesigner}
      />
      <Filter
        title={t("filters.platform")!}
        selectionVariants={Weapons.getPlatforms(weapons)}
        setterCallback={filtersStore.setPlatform.bind(filtersStore)}
        getter={filtersStore.filters.platform}
      />
      <Button
        text={t("filters.cencel")!}
        callback={filtersStore.cancelFilters.bind(filtersStore)}
      />
    </div>
  );
};

export default Filters;
