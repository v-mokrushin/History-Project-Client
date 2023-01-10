import { NATIONS_METHODS } from "./../../constants/nations";
import { IPageData } from "constants/pages";
import { type } from "os";
import { randomInteger, shuffleArray } from "utils/common";
import { createGallery, createModels, defineIdProperty } from "utils/weapons";
import { NATIONS } from "../../constants/nations";
import { ARMORED_VEHICLES } from "./branches/armored";
import { ARTILLERY_DATA } from "./branches/artillery";
import { AVIATION_DATA } from "./branches/aviation";
import { GRENADE_LAUNCHERS_DATA } from "./branches/grenadeLaunchers";
import { SMALL_ARMS_DATA } from "./branches/smallArms";

export interface IWeapon {
  name: string;
  isReady?: boolean;
  branch?: any;
  type: any;
  adoptedIntoServiceDate: number;
  icon?: string;
  nation?: IPageData;
  gallery?: IWeaponGallery;
  id?: string;
  JSXComponent?: JSX.Element;
  intro?: string[];
  videomaterials?: string[];
  specifications?: any;
  sections?: string[];
  models?: IModel[];
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

const weaponsData = ([] as IWeapon[]).concat(
  ARMORED_VEHICLES,
  AVIATION_DATA,
  ARTILLERY_DATA,
  SMALL_ARMS_DATA,
  GRENADE_LAUNCHERS_DATA
);

weaponsData.forEach((weapon) => {
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
  ): any[] {
    return weaponsData
      .filter((item) => item.branch.path === weaponBranchPath)
      .filter(
        (item) =>
          nationPath === NATIONS.world.path || item.nation!.path === nationPath
      );
  },
  filterWeapons(selectedWeapons: any[], filters: any) {
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
          weaponsData
            .filter((item) => item.branch.path === weaponsBranchPath)
            .map((item) => item.nation)
        )
      ),
    ];
  },
  getById(weaponId: string | undefined) {
    return weaponsData.find((item) => item.id === weaponId);
  },
  changeColorized() {
    weaponsData.forEach((weapon) => {
      if (weapon.gallery) {
        weapon.gallery.isColorizedIcon = !weapon.gallery.isColorizedIcon;
      }
    });
  },
  getRecommendation(
    weaponBranchPath: string,
    weaponId: string | undefined
  ): IWeapon[] {
    let weapons = weaponsData.filter(
      (weapon) =>
        weapon.branch.path === weaponBranchPath && weapon.id !== weaponId
    );
    weapons = shuffleArray(weapons);
    weapons = weapons.slice(0, 8);

    return weapons;
  },
  getDevelopersWithAll(weaponBranch: any) {
    const weapons = weaponsData.filter(
      (weapon) => weapon.branch == weaponBranch
    );
    let developers = weapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return weapon.specifications.common.developer;
      })
      .map((weapon) => weapon.specifications.common.developer);

    developers = Array.from(new Set(developers));
    developers.sort((prev, next) => {
      if (prev.name.russian < next.name.russian) return -1;
      if (prev.name.russian >= next.name.russian) return 1;
      return 0;
    });
    developers.unshift({ name: { russian: "Все" } });
    return developers;
  },
};

console.log(weaponsData);
