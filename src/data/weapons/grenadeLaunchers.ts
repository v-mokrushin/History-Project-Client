import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../../constants/weapons";
import { NATIONS } from "../../constants/nations";

let ussr: IWeapon[] = [];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  // {
  //   name: "Panzerfaust 100",
  //   type: WEAPONS_TYPE.grenadeLaunchers.manual,
  //   adoptedIntoServiceDate: 1944,
  //   icon: "icon.jpg",
  // },
  {
    name: "Panzerfaust 60",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "8,8 cm Raketenwerfer 43 «Puppchen»",
    type: WEAPONS_TYPE.grenadeLaunchers.heavy,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Panzerschreck",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Faustpatrone",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Sturmpistole",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Schiessbecher",
    type: WEAPONS_TYPE.grenadeLaunchers.muzzle,
    adoptedIntoServiceDate: 1940,
    icon: "icon.jpg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa: IWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let japan: IWeapon[] = [
  {
    name: "Type 4",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Type 10",
    type: WEAPONS_TYPE.grenadeLaunchers.hybrid,
    adoptedIntoServiceDate: 1921,
    icon: "icon.jpg",
  },
];
japan.forEach((item) => (item.nation = NATIONS.japan));

let britain: IWeapon[] = [
  {
    name: "PIAT",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
];
britain.forEach((item) => (item.nation = NATIONS.greatBritain));

export const GRENADE_LAUNCHERS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...britain,
];
