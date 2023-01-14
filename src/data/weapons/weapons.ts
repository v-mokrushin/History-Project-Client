import { ChiefDesigners } from "./chief-designers";
import { WEAPONS_CLASSIFICATION } from "./../../constants/weapon-types";
import { type } from "os";
import { Developers, IDeveloper } from "./developers";
import { ICrew } from "./crews";
import { IPage } from "constants/pages";
import { shuffleArray } from "utils/common";
import {
  createGallery,
  createModels,
  defineIdProperty,
  getGallery,
} from "utils/weapons";
import { INation, NATIONS } from "../../constants/nations";
import { ARMORED_VEHICLES } from "./branches/armored-vehicles";
import { ARTILLERY_DATA } from "./branches/artillery";
import { AVIATION_DATA } from "./branches/aviation";
import { GRENADE_LAUNCHERS_DATA } from "./branches/grenade-launchers";
import { SMALL_ARMS_DATA } from "./branches/small-arms";
import { IWaponBranch, IWeaponType } from "constants/weapon-types";
import { IBodyArmoring } from "./parts/bodies";
import { ITowerArmoring } from "./parts/towers";
import { TFilters } from "stores/mobx/filtersStore";

export interface IWeapon {
  name: string;
  type: IWeaponType;
  adoptedIntoServiceDate: number;
  branch?: IWaponBranch;
  id?: string;
  isReady?: boolean;
  nation?: INation;
  gallery?: IWeaponGallery;
  JSXComponent?: JSX.Element;
  intro?: string[];
  videomaterials?: string[];
  sections?: string[];
  models?: IModel[];
  specifications: ISpecifications;
}

class Weapon implements IWeapon {
  public name: string;
  public type: IWeaponType;
  public adoptedIntoServiceDate: number;
  public specifications: ISpecifications;

  constructor(name: string, type: IWeaponType, adoptedIntoServiceDate: number) {
    this.name = name;
    this.type = type;
    this.adoptedIntoServiceDate = adoptedIntoServiceDate;
    this.specifications = {};
  }

  get id() {
    return this.name.replaceAll(" ", "-").replaceAll("/", "-");
  }
}

export interface ISpecifications {
  common?: any;
  // common: {
  //   developer: IDeveloper;
  //   developmentYear?: number;
  //   manufacturer?: string;
  //   chiefDesigner?: string;
  //   productionPeriod?: string;
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
    tower?: ITowerArmoring;
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

export const WEAPONS = {
  getUniqueDates(collection: IWeapon[]): number[] {
    let dates = collection.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    return dates;
  },

  selectWeapons(
    weaponBranchPath: string | undefined,
    nationPath: string | undefined
  ): IWeapon[] {
    return weapons_data
      .filter((item) => item.branch?.path === weaponBranchPath)
      .filter(
        (item) =>
          nationPath === NATIONS.world.path || item.nation!.path === nationPath
      );
  },

  filterWeapons(selectedWeapons: IWeapon[], filters: TFilters) {
    if (Object.keys(filters).length === 0) {
      return selectedWeapons;
    } else {
      let weapons = selectedWeapons;

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

      return weapons;
    }
  },

  selectNation(weaponsBranchPath: string | undefined) {
    return [
      NATIONS.world,
      ...Array.from(
        new Set(
          weapons_data
            .filter((item) => item.branch?.path === weaponsBranchPath)
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
    weaponBranchPath: string | undefined,
    weaponId: string | undefined
  ): IWeapon[] {
    let weapons = weapons_data.filter(
      (weapon) =>
        weapon.branch?.path === weaponBranchPath && weapon.id !== weaponId
    );
    weapons = shuffleArray(weapons);
    weapons = weapons.slice(0, 8);

    return weapons;
  },

  getDevelopers(selectedWeapons: IWeapon[]): string[] {
    let developers: string[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.developer != Developers.undefined;
      })
      .map((weapon) => weapon.specifications.common.developer?.name.original);

    developers = Array.from(new Set(developers));
    developers.sort().unshift("Все");
    return developers;
  },

  getNations(selectedWeapons: IWeapon[]): string[] {
    let nations: string[] = selectedWeapons.map(
      (weapon) => weapon.nation?.name.russian!
    );

    nations = Array.from(new Set(nations));
    nations.sort().unshift("Весь мир");
    return nations;
  },

  getChiefDesigners(selectedWeapons: IWeapon[]): string[] {
    let designers: string[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.chiefDesigner;
      })
      .map(
        (weapon) => weapon.specifications.common.chiefDesigner?.name.russian
      );

    designers = Array.from(new Set(designers));
    designers.sort().unshift("Все");
    return designers;
  },

  getPlatforms(selectedWeapons: IWeapon[]): string[] {
    let platforms: string[] = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.platform;
      })
      .map((weapon) => weapon.specifications.common.platform?.name.original);

    platforms = Array.from(new Set(platforms));
    platforms.sort().unshift("Все");
    return platforms;
  },
};

console.log(weapons_data);
