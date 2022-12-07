import { INTRO_IMAGE_TYPE } from "../components/IntroImage/constants";
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

function getRussianNameByPath(path) {
  return data.find((item) => item.path === path)?.name.russian;
}

function getPathLength(path) {
  return path.split("/").length;
}

function getByPath(path) {
  const lastPathElement = path.split("/").at(-1);
  return data.find((item) => item.path === lastPathElement);
}

export const PAGES_DATA = {
  getByPath,
  getRussianName: getRussianNameByPath,
  getPathLength,
};
