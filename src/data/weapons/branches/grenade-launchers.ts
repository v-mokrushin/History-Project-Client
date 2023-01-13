import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
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
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    specifications: {},
  },
  {
    name: "8,8 cm Raketenwerfer 43 «Puppchen»",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.heavy,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "Panzerschreck",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "Faustpatrone",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "Sturmpistole",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "Schiessbecher",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.muzzle,
    adoptedIntoServiceDate: 1940,
    specifications: {},
  },
];

const usa: IWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {},
  },
];

const japan: IWeapon[] = [
  {
    name: "Type 4",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    specifications: {},
  },
  {
    name: "Type 10",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.hybrid,
    adoptedIntoServiceDate: 1921,
    specifications: {},
  },
];

const britain: IWeapon[] = [
  {
    name: "PIAT",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {},
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
appendWeaponBranch(GRENADE_LAUNCHERS_DATA, WEAPONS_CLASSIFICATION.grenadeLaunchers);
