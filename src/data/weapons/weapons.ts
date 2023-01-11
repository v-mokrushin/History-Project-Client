import { Developers, IDeveloper } from "./developers";
import { ICrew } from "./crews";
import { IPageData } from "constants/pages";
import { shuffleArray } from "utils/common";
import { createGallery, createModels, defineIdProperty } from "utils/weapons";
import { NATIONS } from "../../constants/nations";
import { ARMORED_VEHICLES } from "./branches/armored";
import { ARTILLERY_DATA } from "./branches/artillery";
import { AVIATION_DATA } from "./branches/aviation";
import { GRENADE_LAUNCHERS_DATA } from "./branches/grenadeLaunchers";
import { SMALL_ARMS_DATA } from "./branches/smallArms";
import { IWeaponType } from "constants/weapon-types";
import { IBodyArmoring } from "./parts/bodies";
import { ITowerArmoring } from "./parts/towers";

export interface IWeapon {
  name: string;
  type: IWeaponType;
  adoptedIntoServiceDate: number;
  branch?: any;
  id?: string;
  isReady?: boolean;
  nation?: IPageData;
  gallery?: IWeaponGallery;
  JSXComponent?: JSX.Element;
  intro?: string[];
  videomaterials?: string[];
  sections?: string[];
  models?: IModel[];
  specifications: ISpecifications;
}

export interface ISpecifications {
  common?: any;
  // common: {
  //   developer?: IDeveloper;
  //   manufacturer?: string;
  //   chiefDesigner?: string;
  //   productionYears?: string;
  //   exploitationYears?: string;
  //   numberOfIssued?: number;
  // };
  crew?: ICrew;
  sizes?: {
    weight: number;
    length: number;
    width: number;
    height: number;
    clearance: number;
  };
  armoring?: {
    type: string;
    body: IBodyArmoring;
    tower: ITowerArmoring;
  };
  weapon?: any;
  mobility?: any;
}

export interface IWeaponGallery {
  path: string;
  isColorizedIcon: boolean;
  get icon(): string;
}

export interface IModel {
  title: string;
  photo: string;
  link: string;
}

const weapons_data = ([] as IWeapon[]).concat(
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

export const WEAPONS_DATA = {
  getUniqueDates(collection: any[]): number[] {
    let dates = collection.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    return dates;
  },
  selectWeapons(
    weaponBranchPath: string | undefined,
    nationPath: string | undefined
  ): IWeapon[] {
    return weapons_data
      .filter((item) => item.branch.path === weaponBranchPath)
      .filter(
        (item) =>
          nationPath === NATIONS.world.path || item.nation!.path === nationPath
      );
  },
  filterWeapons(selectedWeapons: IWeapon[], filters: any) {
    if (Object.keys(filters).length === 0) {
      return selectedWeapons;
    } else {
      let weapons = selectedWeapons;

      if (filters.name)
        weapons = weapons.filter((item) =>
          item.name.toLowerCase().includes(filters.name.toLowerCase())
        );

      if (filters.type)
        weapons = weapons.filter(
          (item) => item.type.name.russian === filters.type.name.russian
        );

      if (filters.developer)
        weapons = weapons.filter(
          (weapon) =>
            weapon.specifications?.common?.developer?.name.russian ==
            filters.developer.name.russian
        );

      return weapons;
    }
  },
  selectNation(weaponsBranchPath: string | undefined) {
    return [
      NATIONS.world,
      ...Array.from(
        new Set(
          weapons_data
            .filter((item) => item.branch.path === weaponsBranchPath)
            .map((item) => item.nation)
        )
      ),
    ];
  },
  getById(weaponId: string | undefined) {
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
    weaponBranchPath: string,
    weaponId: string | undefined
  ): IWeapon[] {
    let weapons = weapons_data.filter(
      (weapon) =>
        weapon.branch.path === weaponBranchPath && weapon.id !== weaponId
    );
    weapons = shuffleArray(weapons);
    weapons = weapons.slice(0, 8);

    return weapons;
  },
  getDevelopersWithAll(selectedWeapons: IWeapon[]): IDeveloper[] {
    let developers: IDeveloper[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.developer != Developers.undefined;
      })
      .map((weapon) => weapon.specifications?.common.developer);

    developers = Array.from(new Set(developers));
    developers.sort((prev, next) => {
      if (prev.name.russian < next.name.russian) return -1;
      if (prev.name.russian >= next.name.russian) return 1;
      return 0;
    });
    developers.unshift(Developers.all);
    return developers;
  },
};

console.log(weapons_data);
