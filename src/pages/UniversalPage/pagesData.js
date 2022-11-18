import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";

const data = [
  {
    path: "/weapons/aviation",
    title: "Авиация",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.aviation,
  },
  {
    path: "/weapons/armored",
    title: "Бронетехника",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.armored,
  },
  {
    path: "/weapons/small-arms",
    title: "Стрелковое оружие",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.smallArms,
  },
  {
    path: "/weapons/artillery",
    title: "Артиллерия",
    introImage: INTRO_IMAGE_TYPE.pages.weapons.artillery,
  },
];

export const PAGES_DATA = {
  getByPath(path) {
    return data.find((item) => item.path === path);
  },
};
