import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";

let ussr: IWeapon[] = [
  {
    name: "Револьвер системы Нагана",
    type: WEAPONS_TYPE.smallArms.revolver,
    adoptedIntoServiceDate: 1895,
    icon: "icon.jpg",
  },
  {
    name: "ППС-43",
    type: WEAPONS_TYPE.smallArms.submachineGun,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "ППШ-41",
    type: WEAPONS_TYPE.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    icon: "icon.jpg",
  },
  {
    name: "ППД-40",
    type: WEAPONS_TYPE.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    icon: "icon.jpg",
  },
  {
    name: "ПТРД",
    type: WEAPONS_TYPE.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  {
    name: "Mauser 98k",
    type: WEAPONS_TYPE.smallArms.rifle,
    adoptedIntoServiceDate: 1935,
    icon: "icon.jpg",
  },
  {
    name: "Sturmgewehr 44",
    type: WEAPONS_TYPE.smallArms.assaultRifle,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Gewehr 43",
    type: WEAPONS_TYPE.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "MG-42",
    type: WEAPONS_TYPE.smallArms.machineGun,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "MG-34",
    type: WEAPONS_TYPE.smallArms.machineGun,
    adoptedIntoServiceDate: 1938,
    icon: "icon.webp",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa: IWeapon[] = [
  {
    name: "M2-Browning",
    type: WEAPONS_TYPE.smallArms.machineGun,
    adoptedIntoServiceDate: 1933,
    icon: "icon.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let finland: IWeapon[] = [
  {
    name: "Suomi KP-31",
    type: WEAPONS_TYPE.smallArms.submachineGun,
    adoptedIntoServiceDate: 1931,
    icon: "icon.jpg",
  },
];
finland.forEach((item) => (item.nation = NATIONS.finland));

let japan: IWeapon[] = [];
japan.forEach((item) => (item.nation = NATIONS.japan));

export const SMALL_ARMS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...finland,
];
