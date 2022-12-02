import { INTRO_IMAGE_TYPE } from "../components/IntroImage/constants";
import { NATIONS, NATIONS_METHODS } from "./nations";

const data = [
  {
    path: "/",
    name: {
      russian: "главная",
      english: "main",
    },
  },
  {
    path: "articles",
    introImage: INTRO_IMAGE_TYPE.pages.articles,
    name: {
      russian: "статьи",
      english: "articles",
    },
  },
  {
    path: "weapons",
    introImage: INTRO_IMAGE_TYPE.pages.weapons,
    name: {
      russian: "вооружения",
      english: "weapons",
    },
  },
  {
    path: "aviation",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.aviation,
    name: {
      russian: "Авиация",
      english: "aviation",
    },
  },
  {
    path: "armored-vehicles",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.armored,
    name: {
      russian: "Бронетехника",
      english: "aviation",
    },
  },
  {
    path: "small-arms",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.smallArms,
    name: {
      russian: "Стрелковое оружие",
      english: "small arms",
    },
  },
  {
    path: "artillery",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.artillery,
    name: {
      russian: "Артиллерия",
      english: "artillery",
    },
  },
  ...NATIONS_METHODS.getNationsAsArray(),
];

function getRussianNameByPath(path) {
  return data.find((item) => item.path === path)?.name.russian;
}

function getPathLength(path) {
  return path.split("/").length;
}

function getByPath(path) {
  const lastPathElement = path.split("/").at(-1);
  console.log(data.find((item) => item.path === lastPathElement));
  return data.find((item) => item.path === lastPathElement);
}

export const PAGES_DATA = {
  getByPath,
  getRussianName: getRussianNameByPath,
  getPathLength,
};
