import { ICrew } from "./crews";
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
import { IWeaponType } from "constants/weapon-types";

export interface IWeapon {
  name: string;
  type: IWeaponType;
  branch?: any;
  id?: string;
  isReady?: boolean;
  adoptedIntoServiceDate: number;
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
  crew?: ICrew;
  sizes?: any;
  armoring?: any;
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
  ): IWeapon[] {
    return weaponsData
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
  changeColorized(): void {
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
  getDevelopersWithAll(selectedWeapons: IWeapon[]) {
    let developers = selectedWeapons
      .filter((weapon) => {
        if (!weapon.specifications) return false;
        if (!weapon.specifications.common) return false;
        return (
          weapon.specifications.common.developer.name.russian != "???? ????????????????????"
        );
      })
      .map((weapon) => weapon.specifications?.common.developer);

    developers = Array.from(new Set(developers));
    developers.sort((prev, next) => {
      if (prev.name.russian < next.name.russian) return -1;
      if (prev.name.russian >= next.name.russian) return 1;
      return 0;
    });
    developers.unshift({ name: { russian: "??????" } });
    return developers;
  },
};

console.log(weaponsData);
