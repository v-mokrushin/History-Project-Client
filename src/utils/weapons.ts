import { IPageData } from "./../constants/pages";
import { IWeapon } from "data/weapons/weapons";

export function appendNation(weapons: IWeapon[], nation: IPageData): void {
  weapons.forEach((weapon) => (weapon.nation = nation));
}

export function appendWeaponBranch(weapons: IWeapon[], branch: any): void {
  weapons.forEach((weapon) => (weapon.branch = branch));
}

export function defineIdProperty(object: any): void {
  Object.defineProperty(object, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-").replaceAll("/", "-");
    },
  });
}

export function getGalleryPath(weaponName: string, weapon: IWeapon) {
  return (
    `/images/weapons/${weapon.branch.path}/` +
    weapon.nation!.path +
    "/" +
    weaponName
      .replaceAll(" ", "-")
      .replaceAll("/", "-")
      .replaceAll("«", "")
      .replaceAll("»", "")
      .replaceAll("(", "")
      .replaceAll(")", "") +
    "/"
  );
}

export function createGallery(weapon: IWeapon) {
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
  delete weapon.icon;
}

export function createModels(weapon: IWeapon) {
  if (weapon.models) {
    weapon.models.forEach(
      (model) => (model.photo = weapon.gallery?.path + "/models/" + model.photo)
    );
  }
}
