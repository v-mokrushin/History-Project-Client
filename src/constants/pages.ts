import { NationsMethods } from "./nations";

export interface IPage {
  readonly path: string;
  readonly introImage: string;
  readonly name: {
    // readonly russian: string;
    // readonly russianАccusative: string;
    // readonly english: string;
    [key: string]: string;
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
    "Статьи",
    "статей",
    "Articles"
  ),
  articlesCreator: Page(
    "article-creator",
    "/images/backgrounds/article-creator.jpg",
    "Cоздание статьи",
    "создание статей",
    "Article Creator"
  ),
  weapons: Page(
    "weapons",
    "/images/backgrounds/weapons.jpg",
    "Вооружения",
    "вооружений",
    "Weapons"
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
    "Aviation"
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
    "Small arms"
  ),
  artillery: Page(
    "artillery",
    "/images/backgrounds/weapons/artillery.jpg",
    "Артиллерия",
    "артиллерии",
    "Artillery"
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
  ...NationsMethods.getNationsAsArray(),
];

// ------------------------------------------------------------------------------

export const Pages = {
  ...pages,
  getByPath,
  getNameByPath,
  getPathLength,
  getPathnamesArray,
  getLabelsArray,
};

function getNameByPath(path: string, language: string): string | undefined {
  return summaryArray.find((item) => item.path === path)?.name[language];
}

function getPathLength(path: string): number {
  return path.split("/").length;
}

function getByPath(path: string): IPage | undefined {
  const lastPathElement = path.split("/").at(-1);
  const item = summaryArray.find((item) => item.path === lastPathElement);
  return item;
}

function getLabelsArray(locationPathname: string, language: string): string[] {
  return locationPathname === "/"
    ? ["главная"]
    : locationPathname
        .split("/")
        .map(
          (path) => getNameByPath(path, language) || decodeURIComponent(path)
        );
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
