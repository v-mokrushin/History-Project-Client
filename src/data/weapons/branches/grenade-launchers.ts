import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import { TWeapon } from "../interfaces/common-weapon-interfaces";
import { ChiefDesigners } from "../departments/chief-designers";
import { Developers } from "../departments/developers";

const ussr: TWeapon[] = [];

const germany: TWeapon[] = [
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
    specifications: { common: {} },
  },
  {
    name: "8,8 cm Raketenwerfer 43 «Puppchen»",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.heavy,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "Panzerschreck",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "Faustpatrone",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.grenadeLaunchers.Langweiler,
        developer: Developers.grenadeLaunchers.HugoSchneiderAG,
      },
    },
  },
  {
    name: "Sturmpistole",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "Schiessbecher",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.muzzle,
    adoptedIntoServiceDate: 1940,
    specifications: { common: {} },
  },
];

const usa: TWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.grenadeLaunchers.Uhl,
      },
    },
  },
];

const japan: TWeapon[] = [
  {
    name: "Type 4",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    specifications: { common: {} },
  },
  {
    name: "Type 10",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.hybrid,
    adoptedIntoServiceDate: 1921,
    specifications: { common: {} },
  },
];

const britain: TWeapon[] = [
  {
    name: "PIAT",
    type: WEAPONS_CLASSIFICATION.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.grenadeLaunchers.Jefferis,
        developer: Developers.grenadeLaunchers.ImperialChemicalIndustries,
      },
    },
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.Germany);
appendNation(usa, NATIONS.USA);
appendNation(japan, NATIONS.Japan);
appendNation(britain, NATIONS.GreatBritain);

export const GRENADE_LAUNCHERS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...britain,
];
appendWeaponBranch(
  GRENADE_LAUNCHERS_DATA,
  WEAPONS_CLASSIFICATION.grenadeLaunchers
);
