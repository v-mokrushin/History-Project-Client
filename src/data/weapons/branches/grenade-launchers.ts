import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WeaponClassification } from "../../../constants/weapon-types";
import { Nations } from "../../../constants/nations";
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
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    specifications: { common: {} },
  },
  {
    name: "8,8 cm Raketenwerfer 43 «Puppchen»",
    shortName: "«Puppchen»",
    type: WeaponClassification.grenadeLaunchers.heavy,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 3_150,
      },
    },
  },
  {
    name: "Panzerschreck",
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 289_151,
      },
    },
  },
  {
    name: "Faustpatrone",
    type: WeaponClassification.grenadeLaunchers.manual,
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
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 1_540_114,
      },
    },
  },
  {
    name: "Schiessbecher",
    type: WeaponClassification.grenadeLaunchers.muzzle,
    adoptedIntoServiceDate: 1940,
    specifications: { common: {} },
  },
];

const usa: TWeapon[] = [
  {
    name: "M1 «Bazooka»",
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.grenadeLaunchers.Uhl,
        numberOfIssued: 112_290,
      },
    },
  },
];

const japan: TWeapon[] = [
  {
    name: "Type 4",
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        numberOfIssued: 3_500,
      },
    },
  },
  {
    name: "Type 10",
    type: WeaponClassification.grenadeLaunchers.hybrid,
    adoptedIntoServiceDate: 1921,
    specifications: { common: {} },
  },
];

const britain: TWeapon[] = [
  {
    name: "PIAT",
    type: WeaponClassification.grenadeLaunchers.manual,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.grenadeLaunchers.Jefferis,
        developer: Developers.grenadeLaunchers.ImperialChemicalIndustries,
        numberOfIssued: 115_000,
      },
    },
  },
];

appendNation(ussr, Nations.USSR);
appendNation(germany, Nations.Germany);
appendNation(usa, Nations.USA);
appendNation(japan, Nations.Japan);
appendNation(britain, Nations.GreatBritain);

export const GRENADE_LAUNCHERS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...britain,
];
appendWeaponBranch(
  GRENADE_LAUNCHERS_DATA,
  WeaponClassification.grenadeLaunchers
);
