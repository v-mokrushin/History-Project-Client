import { NATIONS_METHODS } from "./nations";

export interface IPageData {
  path: string;
  introImage: string;
  name: {
    russian: string;
    russianАccusative: string;
    english: string;
  };
  flagImage?: string;
}

const wrongObject: IPageData = {
  path: "WRONG",
  introImage: "WRONG",
  name: {
    russian: "WRONG",
    english: "WRONG",
    russianАccusative: "",
  },
};

const data: IPageData[] = [
  {
    path: "",
    introImage: "",
    name: {
      russian: "главная",
      english: "main",
      russianАccusative: "",
    },
  },
  {
    path: "articles",
    introImage: "/images/backgrounds/articles.jpg",
    name: {
      russian: "статьи",
      english: "articles",
      russianАccusative: "",
    },
  },
  {
    path: "weapons",
    introImage: "/images/backgrounds/weapons.jpg",
    name: {
      russian: "вооружения",
      english: "weapons",
      russianАccusative: "",
    },
  },
  {
    path: "aviation",
    introImage: "/images/backgrounds/weapons/aviation.jpg",
    name: {
      russian: "Авиация",
      english: "aviation",
      russianАccusative: "",
    },
  },
  {
    path: "armored-vehicles",
    introImage: "/images/backgrounds/weapons/armored.jpg",
    name: {
      russian: "Бронетехника",
      english: "aviation",
      russianАccusative: "",
    },
  },
  {
    path: "small-arms",
    introImage: "/images/backgrounds/weapons/gun.jpg",
    name: {
      russian: "Стрелковое оружие",
      english: "small arms",
      russianАccusative: "",
    },
  },
  {
    path: "artillery",
    introImage: "/images/backgrounds/weapons/artillery.jpg",
    name: {
      russian: "Артиллерия",
      english: "artillery",
      russianАccusative: "",
    },
  },
  {
    path: "grenade-launchers",
    introImage: "/images/backgrounds/weapons/grenade-launchers.jpg",
    name: {
      russian: "Гранатометы",
      english: "Grenade Launchers",
      russianАccusative: "",
    },
  },
  ...NATIONS_METHODS.getNationsAsArray(),
];

// ------------------------------------------------------------------------------

export const PAGES_DATA = {
  getByPath,
  getRussianNameByPath,
  getPathLength,
  getPathnamesArray,
  getLabelsArray,
};

function getRussianNameByPath(path: string): string | undefined {
  return data.find((item) => item.path === path)?.name.russian;
}

function getPathLength(path: string): number {
  return path.split("/").length;
}

function getByPath(path: string): IPageData {
  const lastPathElement = path.split("/").at(-1);
  const item = data.find((item) => item.path === lastPathElement);
  if (item) return item;
  else return wrongObject;
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
