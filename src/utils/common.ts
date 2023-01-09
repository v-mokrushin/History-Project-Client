import { IPageData } from "./../constants/pages";
import { IWeapon } from "data/weapons/weapons";
function getURLForBackroundImage(url: string): string {
  return `url(${url})`;
}

export function getBackgroundImageStyleObject(url: string | undefined): object {
  if (url) return { backgroundImage: getURLForBackroundImage(url) };
  else return {};
}

export function createParagraphs(text: string): string[] {
  let prevPos = -1;
  let pos = -1;
  const p = [];

  while (text.indexOf("\n", pos + 1) != -1) {
    prevPos = pos + 1;
    pos = text.indexOf("\n", pos + 1);
    p.push(text.slice(prevPos, pos).trim());
  }

  return p;
}

export function shuffleTracks(array: string[]): string[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
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

export function appendNation(weapons: IWeapon[], nation: IPageData): void {
  weapons.forEach((weapon) => (weapon.nation = nation));
}

export function appendWeaponBranch(weapons: IWeapon[], branch: any): void {
  weapons.forEach((weapon) => (weapon.branch = branch));
}
