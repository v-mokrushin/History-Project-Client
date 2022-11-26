import { INTRO_IMAGE_TYPE } from "../components/IntroImage/constants";

const data = [
  {
    path: "/",
    title: "главная",
    engTitle: "",
  },
  {
    path: "/articles",
    title: "статьи",
    engTitle: "articles",
    introImage: INTRO_IMAGE_TYPE.pages.articles,
  },
  {
    path: "/weapons",
    title: "вооружения",
    engTitle: "weapons",
    introImage: INTRO_IMAGE_TYPE.pages.weapons,
  },
  {
    path: "/weapons/aviation",
    title: "Авиация",
    engTitle: "aviation",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.aviation,
  },
  {
    path: "/weapons/armored-vehicles",
    title: "Бронетехника",
    engTitle: "armored-vehicles",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.armored,
  },
  {
    path: "/weapons/small-arms",
    title: "Стрелковое оружие",
    engTitle: "small-arms",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.smallArms,
  },
  {
    path: "/weapons/artillery",
    title: "Артиллерия",
    engTitle: "artillery",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.artillery,
  },
];

function getByPath(path) {
  return data.find((item) => item.path === path);
}

function getByEngTitle(engTitle) {
  return data.find((item) => item.engTitle === engTitle);
}

function getTitleByEngTitle(engTitle) {
  return data.find((item) => item.engTitle === engTitle)?.title;
}

function getPathByTitle(title) {
  return data.find((item) => item.title === title)?.path;
}

function getPathLength(path) {
  return path.split("/").length;
}

export const PAGES_DATA = {
  getByPath,
  getByEngTitle,
  getTitleByEngTitle,
  getPathByTitle,
  getPathLength,
};
