import { INation, NationsMethods } from "./../constants/nations";
import { IWaponBranch } from "constants/weapon-types";
import {
  TWeapon,
  IWeaponGallery,
} from "data/weapons/interfaces/common-weapon-interfaces";
import { translateStringToBool } from "./common";
import { IProducer } from "data/weapons/departments/producers";
import { ISelectionVariantWithFlag } from "components/Controls/Filter/Filter";

export function appendNation(weapons: TWeapon[], nation: INation): void {
  weapons.forEach((weapon) => (weapon.nation = nation));
}

export function appendWeaponBranch(
  weapons: TWeapon[],
  branch: IWaponBranch
): void {
  weapons.forEach((weapon) => (weapon.branch = branch));
}

export function readWeaponsFromLocalStorage(weapons: TWeapon[]): void {
  const createdWeapons = localStorage.getItem("created-weapons");
  if (createdWeapons) {
    const parsedCreatedWeapons: TWeapon[] = JSON.parse(
      localStorage.getItem("created-weapons") || ""
    );
    parsedCreatedWeapons.forEach((weapon) => {
      weapon.nation = NationsMethods.getByPath(weapon.nation?.path);
      // defineIdProperty(weapon);
      // definePathProperty(weapon);
    });
    weapons.unshift(...parsedCreatedWeapons);
  }
}

export function writeNewWeaponToLocalStorage(weapon: TWeapon): void {
  if (localStorage.getItem("created-weapons")) {
    const savedCreatedWeapons: TWeapon[] = JSON.parse(
      localStorage.getItem("created-weapons") || ""
    );
    savedCreatedWeapons.push(weapon);
    localStorage.setItem(
      "created-weapons",
      JSON.stringify(savedCreatedWeapons)
    );
  } else {
    localStorage.setItem("created-weapons", JSON.stringify([weapon]));
  }
}

export function prepareWeapons(weapons: TWeapon[]): void {
  weapons.forEach((weapon) => {
    prepareWeapon(weapon);
  });
}

export function prepareWeapon(weapon: TWeapon): void {
  defineIdProperty(weapon);
  definePathProperty(weapon);
  defineGallery(weapon);
  defineModels(weapon);
}

export function defineIdProperty(weapon: TWeapon): void {
  Object.defineProperty(weapon, "id", {
    value: weapon.name.replaceAll(" ", "-").replaceAll("/", "-"),
  });
}

export function definePathProperty(weapon: TWeapon): void {
  Object.defineProperty(weapon, "path", {
    value: `/weapons/${weapon.branch?.path}/world/${weapon.id}`,
  });
}

export function getGalleryPath(weaponName: string, weapon: TWeapon): string {
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
      .replaceAll("ó", "o")
      .replaceAll("ö", "o") +
    "/"
  );
}

export function defineGallery(weapon: TWeapon): void {
  if (weapon.gallery) {
    weapon.gallery.isColorizedIcon = translateStringToBool(
      localStorage.getItem("colorized")
    );

    Object.defineProperty(weapon.gallery, "icon", {
      get: function () {
        if (this.isIconsRemote) {
          return !this.isColorizedIcon
            ? this.remoteOriginalIcon
            : this.remoteColorizedIcon;
        }
        if (!this.isColorizedIcon) {
          return this.path + "icon.jpg";
        } else {
          return this.path + "icon-color.jpg";
        }
      },
    });

    return;
  }

  let weaponName: string = weapon.name;
  if (weaponName.at(-1) === ".") weaponName = weaponName.slice(0, -1);

  weapon.gallery = {
    path: getGalleryPath(weaponName, weapon),
    isIconsRemote: weapon.galleryInfo?.isIconsRemote,
    remoteOriginalIcon: weapon.galleryInfo?.remoteOriginalIcon || "none",
    remoteColorizedIcon: weapon.galleryInfo?.remoteColorizedIcon || "none",
    isColorizedIcon: translateStringToBool(localStorage.getItem("colorized")),

    get icon() {
      if (this.isIconsRemote) {
        return !this.isColorizedIcon
          ? this.remoteOriginalIcon
          : this.remoteColorizedIcon;
      }

      if (!this.isColorizedIcon) {
        return this.path + "icon.jpg";
      } else {
        return this.path + "icon-color.jpg";
      }
    },

    get intro() {
      if (!this.isColorizedIcon) {
        return this.path + "intro.mp4";
      } else {
        return this.path + "intro-color.mp4";
      }
    },
  };

  if (weapon.galleryInfo) {
    if (weapon.galleryInfo.photoCollectionSize) {
      if (!weapon.gallery) return;
      weapon.gallery.photos = new Array<string>(
        weapon.galleryInfo.photoCollectionSize
      ).fill("");
      for (let i = 0; i < weapon.gallery.photos.length; i++)
        weapon.gallery.photos[i] =
          weapon.gallery.path + "photos/" + String(i + 1) + ".jpg";
    }

    if (weapon.galleryInfo.schemesCollectionSize) {
      if (!weapon.gallery) return;
      weapon.gallery.schemes = new Array<string>(
        weapon.galleryInfo.schemesCollectionSize
      ).fill("");
      for (let i = 0; i < weapon.gallery.schemes.length; i++)
        weapon.gallery.schemes[i] =
          weapon.gallery.path + "schemes/" + String(i + 1) + ".jpg";
    }
  }

  delete weapon.galleryInfo;
}

export function defineModels(weapon: TWeapon): void {
  if (weapon.models) {
    weapon.models.forEach(
      (model) => (model.photo = weapon.gallery?.path + "/models/" + model.photo)
    );
  }
}

export function getProducersText(
  producer: IProducer[] | undefined
): string | undefined {
  return producer?.map((item) => item.name.original).join(", ");
}

export function sortByTitle(variants: ISelectionVariantWithFlag[]): void {
  variants.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
}
