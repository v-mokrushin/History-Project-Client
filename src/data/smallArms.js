import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";

let ussr = [
  {
    name: "Револьвер системы Нагана",
    type: WEAPONS_TYPE.smallArms.revolver,
    adoptedIntoServiceDate: 1895,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "ПТРД",
    type: WEAPONS_TYPE.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1941,
    weapon: {},
    icon: "icon.jpg",
  },
];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany = [
  {
    name: "Mauser 98k",
    type: WEAPONS_TYPE.smallArms.rifle,
    adoptedIntoServiceDate: 1935,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "Sturmgewehr 44",
    type: WEAPONS_TYPE.smallArms.assaultRifle,
    adoptedIntoServiceDate: 1944,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "Gewehr 43",
    type: WEAPONS_TYPE.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    icon: "icon.jpg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa = [
  {
    name: "M2-Browning",
    type: WEAPONS_TYPE.smallArms.machineGun,
    adoptedIntoServiceDate: 1933,
    weapon: {},
    icon: "icon.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let japan = [];
japan.forEach((item) => (item.nation = NATIONS.japan));

export const SMALL_ARMS_DATA = [...ussr, ...germany, ...usa, ...japan];

SMALL_ARMS_DATA.forEach((item) => {
  let name = item.name;
  if (name.at(-1) === ".") name = name.slice(0, -1);

  Object.defineProperty(item, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-");
    },
  });

  item.gallery = {
    icon:
      `/images/weapons/small-arms/` +
      item.nation.path +
      "/" +
      name
        .replaceAll(" ", "-")
        .replaceAll("«", "")
        .replaceAll("»", "")
        .replaceAll("(", "")
        .replaceAll(")", "") +
      "/" +
      item.icon,
  };
  delete item.icon;
});
