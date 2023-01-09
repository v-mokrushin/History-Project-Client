import { IPageData } from "constants/pages";
import { type } from "os";
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
    weaponsBranchPath: string | undefined,
    nationPath: string | undefined
  ): any[] {
    return weaponsData
      .filter((item) => item.branch.path === weaponsBranchPath)
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
};

console.log(weaponsData);
