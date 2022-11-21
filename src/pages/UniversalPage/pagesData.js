import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";

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
  },
  {
    path: "/weapons",
    title: "вооружения",
    engTitle: "weapons",
  },
  {
    path: "/weapons/aviation",
    title: "авиация",
    engTitle: "aviation",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.aviation,
  },
  {
    path: "/weapons/armored",
    title: "Бронетехника",
    engTitle: "armored",
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

export const PAGES_DATA = {
  getByPath(path) {
    return data.find((item) => item.path === path);
  },
  getByEngTitle(engTitle) {
    return data.find((item) => item.engTitle === engTitle);
  },
  getTitleByEngTitle(engTitle) {
    return data.find((item) => item.engTitle === engTitle)?.title;
  },
};
