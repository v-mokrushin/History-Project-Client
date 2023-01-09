import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";

const ussr: IWeapon[] = [];

const germany: IWeapon[] = [
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

const usa: IWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
  },
];

const japan: IWeapon[] = [
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

const britain: IWeapon[] = [
  {
    name: "PIAT",
    type: WEAPONS_TYPE.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(usa, NATIONS.USA);
appendNation(japan, NATIONS.japan);
appendNation(britain, NATIONS.greatBritain);

export const GRENADE_LAUNCHERS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...britain,
];
appendWeaponBranch(GRENADE_LAUNCHERS_DATA, WEAPONS_TYPE.grenadeLaunchers);
