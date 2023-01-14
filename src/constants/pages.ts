import { NATIONS_METHODS } from "./nations";

export interface IPage {
  readonly path: string;
  readonly introImage: string;
  readonly name: {
    readonly russian: string;
    readonly russianАccusative: string;
    readonly english: string;
  };
}

function Page(
  path: string,
  introImage: string,
  russianName: string,
  russianАccusativeName: string,
  englishName: string
): IPage {
  return {
    path: path,
    introImage: introImage,
    name: {
      russian: russianName,
      russianАccusative: russianАccusativeName,
      english: englishName,
    },
  } as IPage;
}

const pages = {
  main: Page("", "", "главная", "главной", "main"),
  articles: Page(
    "articles",
    "/images/backgrounds/articles.jpg",
    "статьи",
    "статей",
    "articles"
  ),
  weapons: Page(
    "weapons",
    "/images/backgrounds/weapons.jpg",
    "вооружения",
    "вооружений",
    "weapons"
  ),
  battles: Page(
    "battles",
    "/images/backgrounds/battles.jpg",
    "Сражения",
    "Сражений",
    "Battles"
  ),
  aviation: Page(
    "aviation",
    "/images/backgrounds/weapons/aviation.jpg",
    "Авиация",
    "авиации",
    "aviation"
  ),
  armoredVehicles: Page(
    "armored-vehicles",
    "/images/backgrounds/weapons/armored.jpg",
    "Бронетехника",
    "Бронетехники",
    "Armored vehicles"
  ),
  smallArms: Page(
    "small-arms",
    "/images/backgrounds/weapons/gun.jpg",
    "Стрелковое оружие",
    "стрелкового оружия",
    "small arms"
  ),
  artillery: Page(
    "artillery",
    "/images/backgrounds/weapons/artillery.jpg",
    "Артиллерия",
    "артиллерии",
    "artillery"
  ),
  grenadeLaunchers: Page(
    "grenade-launchers",
    "/images/backgrounds/weapons/grenade-launchers.jpg",
    "Гранатометы",
    "гранатометов",
    "Grenade Launchers"
  ),
};

const summaryArray = [
  ...Object.values(pages),
  ...NATIONS_METHODS.getNationsAsArray(),
];

// ------------------------------------------------------------------------------

export const PAGES = {
  ...pages,
  getByPath,
  getRussianNameByPath,
  getPathLength,
  getPathnamesArray,
  getLabelsArray,
};

function getRussianNameByPath(path: string): string | undefined {
  return summaryArray.find((item) => item.path === path)?.name.russian;
}

function getPathLength(path: string): number {
  return path.split("/").length;
}

function getByPath(path: string): IPage | undefined {
  const lastPathElement = path.split("/").at(-1);
  const item = summaryArray.find((item) => item.path === lastPathElement);
  return item;
}

function getLabelsArray(locationPathname: string): string[] {
  return locationPathname === "/"
    ? ["главная"]
    : locationPathname
        .split("/")
        .map((item) => getRussianNameByPath(item) || item);
}

function getPathnamesArray(locationPathname: string): string[] {
  const pathNamesArray = [];
  let previousPosition: number = -1;
  let currentPosition: number = -1;

  while (locationPathname.indexOf("/", currentPosition + 1) != -1) {
    previousPosition = currentPosition + 1;
    currentPosition = locationPathname.indexOf("/", currentPosition + 1);
    pathNamesArray.push(locationPathname.slice(0, currentPosition));
  }

  pathNamesArray.push(locationPathname.slice(0));
  pathNamesArray[0] = "/";

  return pathNamesArray;
}
