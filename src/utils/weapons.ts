import { INation } from "./../constants/nations";
import { IWaponBranch } from "constants/weapon-types";
import { IPage } from "../constants/pages";
import { IWeapon, IWeaponGallery } from "data/weapons/interfaces/common-weapon-interfaces";

export function appendNation(weapons: IWeapon[], nation: INation): void {
  weapons.forEach((weapon) => (weapon.nation = nation));
}

export function appendWeaponBranch(
  weapons: IWeapon[],
  branch: IWaponBranch
): void {
  weapons.forEach((weapon) => (weapon.branch = branch));
}

export function defineIdProperty(weapon: IWeapon): void {
  Object.defineProperty(weapon, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-").replaceAll("/", "-");
    },
  });
}

export function getGalleryPath(weaponName: string, weapon: IWeapon): string {
  return (
    `/images/weapons/${weapon.branch?.path}/` +
    weapon.nation!.path +
    "/" +
    weaponName
      .replaceAll(" ", "-")
      .replaceAll("/", "-")
      .replaceAll("«", "")
      .replaceAll("»", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("ä", "a")
      .replaceAll("Ł", "L")
      .replaceAll("ś", "s")
      .replaceAll("ä", "a")
      .replaceAll("ó", "o") +
    "/"
  );
}

export function getGallery(weapon: IWeapon): IWeaponGallery {
  let weaponName: string = weapon.name;
  if (weaponName.at(-1) === ".") weaponName = weaponName.slice(0, -1);

  const gallery: IWeaponGallery = {
    path: getGalleryPath(weaponName, weapon),
    isColorizedIcon: false,
    get icon() {
      if (!this.isColorizedIcon) {
        return this.path + "icon.jpg";
      } else {
        return this.path + "icon-color.jpg";
      }
    },
  };

  return gallery;
}

export function createGallery(weapon: IWeapon): void {
  let weaponName: string = weapon.name;
  if (weaponName.at(-1) === ".") weaponName = weaponName.slice(0, -1);

  weapon.gallery = {
    path: getGalleryPath(weaponName, weapon),
    isColorizedIcon: false,
    get icon() {
      if (!this.isColorizedIcon) {
        return this.path + "icon.jpg";
      } else {
        return this.path + "icon-color.jpg";
      }
    },
  };
}

export function createModels(weapon: IWeapon): void {
  if (weapon.models) {
    weapon.models.forEach(
      (model) => (model.photo = weapon.gallery?.path + "/models/" + model.photo)
    );
  }
}
