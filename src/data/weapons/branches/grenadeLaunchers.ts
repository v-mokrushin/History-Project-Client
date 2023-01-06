import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";

let ussr: IWeapon[] = [];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  // {
  //   name: "Panzerfaust 100",
  //   type: WEAPONS_TYPE.grenadeLaunchers.manual,
  //   adoptedIntoServiceDate: 1944,
  //
  // },
  {
    name: "Panzerfaust 60",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "8,8 cm Raketenwerfer 43 «Puppchen»",
    type: WEAPONS_TYPE.grenadeLaunchers.heavy,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Panzerschreck",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Faustpatrone",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Sturmpistole",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Schiessbecher",
    type: WEAPONS_TYPE.grenadeLaunchers.muzzle,
    adoptedIntoServiceDate: 1940,
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa: IWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let japan: IWeapon[] = [
  {
    name: "Type 4",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Type 10",
    type: WEAPONS_TYPE.grenadeLaunchers.hybrid,
    adoptedIntoServiceDate: 1921,
  },
];
japan.forEach((item) => (item.nation = NATIONS.japan));

let britain: IWeapon[] = [
  {
    name: "PIAT",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
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
