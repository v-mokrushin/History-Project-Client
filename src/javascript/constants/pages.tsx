import { INTRO_IMAGE_TYPE } from "../../jsx/components/IntroImage/constants";
import { NATIONS_METHODS } from "./nations";

const data = [
  {
    path: "",
    name: {
      russian: "главная",
      english: "main",
    },
  },
  {
    path: "articles",
    introImage: "/images/backgrounds/articles-section.jpg",
    name: {
      russian: "статьи",
      english: "articles",
    },
  },
  {
    path: "weapons",
    introImage: "/images/backgrounds/weapons/background.png",
    name: {
      russian: "вооружения",
      english: "weapons",
    },
  },
  {
    path: "aviation",
    introImage: "/images/backgrounds/weapons/aviation_2.jpg",
    name: {
      russian: "Авиация",
      english: "aviation",
    },
  },
  {
    path: "armored-vehicles",
    introImage: "/images/backgrounds/weapons/armored.jpg",
    name: {
      russian: "Бронетехника",
      english: "aviation",
    },
  },
  {
    path: "small-arms",
    introImage: "/images/backgrounds/weapons/gun.jpg",
    name: {
      russian: "Стрелковое оружие",
      english: "small arms",
    },
  },
  {
    path: "artillery",
    introImage: "/images/backgrounds/weapons/artillery.jpg",
    name: {
      russian: "Артиллерия",
      english: "artillery",
    },
  },
  ...NATIONS_METHODS.getNationsAsArray(),
];

function getRussianNameByPath(path: string): string | undefined {
  return data.find((item) => item.path === path)?.name.russian;
}

function getPathLength(path: string): number {
  return path.split("/").length;
}

function getByPath(path: string): object | undefined {
  const lastPathElement = path.split("/").at(-1);
  return data.find((item) => item.path === lastPathElement);
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
  let curentPosition: number = -1;

  while (locationPathname.indexOf("/", curentPosition + 1) != -1) {
    previousPosition = curentPosition + 1;
    curentPosition = locationPathname.indexOf("/", curentPosition + 1);
    pathNamesArray.push(locationPathname.slice(0, curentPosition));
  }

  pathNamesArray.push(locationPathname.slice(0));
  pathNamesArray[0] = "/";

  return pathNamesArray;
}

export const PAGES_DATA = {
  getByPath,
  getRussianNameByPath,
  getPathLength,
  getPathnamesArray,
  getLabelsArray,
};