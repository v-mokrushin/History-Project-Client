import { IChiefDesigner } from "./departments/chief-designers";
import { IDeveloper } from "./departments/developers";
import { shuffleArray } from "utils/common";
import {
  createGallery,
  createModels,
  defineIdProperty,
  sortByTitle,
} from "utils/weapons";
import { INation, NATIONS } from "../../constants/nations";
import { ARMORED_VEHICLES } from "./branches/armored-vehicles";
import { ARTILLERY_DATA } from "./branches/artillery";
import { AVIATION_DATA } from "./branches/aviation";
import { GRENADE_LAUNCHERS_DATA } from "./branches/grenade-launchers";
import { SMALL_ARMS_DATA } from "./branches/small-arms";
import { TFilters } from "stores/mobx/filtersStore";
import { TWeapon } from "./interfaces/common-weapon-interfaces";
import { ISelectionVariantWithFlag } from "components/Controls/Filter/Filter";
import { IProducer } from "./departments/producers";

const weapons_data = ([] as TWeapon[]).concat(
  ARMORED_VEHICLES,
  AVIATION_DATA,
  ARTILLERY_DATA,
  SMALL_ARMS_DATA,
  GRENADE_LAUNCHERS_DATA
);

weapons_data.forEach((weapon) => {
  defineIdProperty(weapon);
  createGallery(weapon);
  createModels(weapon);
});

// --------------------------------------------------------------------------------

export const WEAPONS = {
  get() {
    return weapons_data;
  },

  getUniqueDates(collection: TWeapon[]): number[] {
    let dates = collection.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    return dates;
  },

  selectWeapons(
    weaponBranchPath: string | undefined,
    nationPath: string | undefined
  ): TWeapon[] {
    return weapons_data
      .filter((item) => item.branch?.path === weaponBranchPath)
      .filter(
        (item) =>
          nationPath === NATIONS.World.path || item.nation!.path === nationPath
      );
  },

  filterByName(name: string) {
    return weapons_data.filter((item) =>
      item.name.toLowerCase().includes(String(name).toLowerCase())
    );
  },

  filterWeapons(selectedWeapons: TWeapon[], filters: TFilters): TWeapon[] {
    if (Object.keys(filters).length === 0) {
      return selectedWeapons;
    } else {
      let weapons = [...selectedWeapons];

      if (filters.name)
        weapons = weapons.filter((item) =>
          item.name.toLowerCase().includes(String(filters.name).toLowerCase())
        );

      if (filters.nation)
        weapons = weapons.filter(
          (item) => item.nation?.name.russian === filters.nation
        );

      if (filters.type)
        weapons = weapons.filter(
          (item) => item.type.name.russian === filters.type
        );

      if (filters.developer)
        weapons = weapons.filter(
          (weapon) =>
            weapon.specifications?.common?.developer?.name.original ==
            filters.developer
        );

      if (filters.chiefDesigner)
        weapons = weapons.filter(
          (weapon) =>
            weapon.specifications?.common?.chiefDesigner?.name.russian ==
            filters.chiefDesigner
        );

      if (filters.platform)
        weapons = weapons.filter(
          (weapon) =>
            weapon.specifications?.common?.platform?.name.original ==
            filters.platform
        );

      if (filters.producer)
        weapons = weapons.filter((weapon) =>
          weapon.specifications?.common?.producer?.find(
            (item) => item.name.original === filters.producer
          )
        );

      return weapons;
    }
  },

  selectNation(weaponsBranchPath: string | undefined) {
    return [
      NATIONS.World,
      ...Array.from(
        new Set(
          weapons_data
            .filter((item) => item.branch?.path === weaponsBranchPath)
            .map((item) => item.nation)
        )
      ),
    ];
  },

  getById(weaponId: string | undefined): TWeapon | undefined {
    return weapons_data.find((item) => item.id === weaponId);
  },

  changeColorized(): void {
    weapons_data.forEach((weapon) => {
      if (weapon.gallery) {
        weapon.gallery.isColorizedIcon = !weapon.gallery.isColorizedIcon;
      }
    });
  },

  getRecommendation(
    weaponBranchPath: string | undefined,
    weaponId: string | undefined
  ): TWeapon[] {
    let weapons = weapons_data.filter(
      (weapon) =>
        weapon.branch?.path === weaponBranchPath && weapon.id !== weaponId
    );
    weapons = shuffleArray(weapons);
    weapons = weapons.slice(0, 8);

    return weapons;
  },

  // getTypes(selectedWeapons: TWeapon[]) {
  //   return Object.values(weaponBranch)
  //   .map((item) => item.name?.russian)
  //   .filter((item) => item != undefined);
  // },

  getDevelopers(selectedWeapons: TWeapon[]): string[] {
    let developers: string[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications.common.developer) return false;
        return weapon.specifications.common.developer;
      })
      .map((weapon) => weapon.specifications.common.developer!.name.original);

    developers = Array.from(new Set(developers));
    developers.sort().unshift("Все");
    return developers;
  },

  getDevelopersWithFlags(
    selectedWeapons: TWeapon[]
  ): ISelectionVariantWithFlag[] {
    let developers: IDeveloper[] = selectedWeapons
      .filter((weapon) => {
        return weapon.specifications.common.developer;
      })
      .map((item) => item.specifications.common.developer!);
    developers = Array.from(new Set(developers));

    let variants: ISelectionVariantWithFlag[] = developers.map((item) => ({
      title: item.name.original,
      nation: item.nation,
    }));

    sortByTitle(variants);
    variants.unshift({ title: "Все", nation: NATIONS.World });

    return variants;
  },

  getNations(selectedWeapons: TWeapon[]): string[] {
    let nations: string[] = selectedWeapons.map(
      (weapon) => weapon.nation?.name.russian!
    );

    nations = Array.from(new Set(nations));
    nations.sort().unshift("Весь мир");
    return nations;
  },

  getNationsWithFlags(selectedWeapons: TWeapon[]): ISelectionVariantWithFlag[] {
    let nations: INation[] = selectedWeapons
      .filter((weapon) => {
        return weapon.nation;
      })
      .map((item) => item.nation!);
    nations = Array.from(new Set(nations));

    let variants: ISelectionVariantWithFlag[] = nations.map((item) => ({
      title: item.name.russian,
      nation: item,
    }));

    sortByTitle(variants);
    variants.unshift({ title: "Весь мир", nation: NATIONS.World });

    return variants;
  },

  getChiefDesigners(selectedWeapons: TWeapon[]): string[] {
    let designers: string[] = selectedWeapons
      .filter((weapon) => {
        return weapon.specifications.common.chiefDesigner;
      })
      .map(
        (weapon) => weapon.specifications.common.chiefDesigner!.name.russian
      );

    designers = Array.from(new Set(designers));
    designers.sort().unshift("Все");
    return designers;
  },

  getChiefDesignersWithFlags(
    selectedWeapons: TWeapon[]
  ): ISelectionVariantWithFlag[] {
    let designers: IChiefDesigner[] = selectedWeapons
      .filter((weapon) => {
        return weapon.specifications.common.chiefDesigner;
      })
      .map((item) => item.specifications.common.chiefDesigner!);
    designers = Array.from(new Set(designers));

    let variants: ISelectionVariantWithFlag[] = designers.map((item) => ({
      title: item.name.russian,
      nation: item.nation,
    }));

    sortByTitle(variants);
    variants.unshift({ title: "Все", nation: NATIONS.World });

    return variants;
  },

  getPlatforms(selectedWeapons: TWeapon[]): string[] {
    let platforms: string[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.platform;
      })
      .map((weapon) => weapon.specifications.common.platform!.name.original);

    platforms = Array.from(new Set(platforms));
    platforms.sort().unshift("Все");
    return platforms;
  },

  getProducersWithFlags(
    selectedWeapons: TWeapon[]
  ): ISelectionVariantWithFlag[] {
    let producers: IProducer[] = selectedWeapons
      .filter((weapon) => {
        return weapon.specifications.common.producer;
      })
      .map((item) => item.specifications.common.producer!)
      .flat();

    producers = Array.from(new Set(producers));

    let variants: ISelectionVariantWithFlag[] = producers.map((item) => ({
      title: item.name.original,
      nation: item.nation,
    }));

    sortByTitle(variants);
    variants.unshift({ title: "Все", nation: NATIONS.World });

    return variants;
  },
};

console.log(weapons_data);
