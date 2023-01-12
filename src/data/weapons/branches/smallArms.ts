import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";

const ussr: IWeapon[] = [
  {
    name: "Револьвер системы Нагана",
    type: WEAPONS_CLASSIFICATION.smallArms.revolver,
    adoptedIntoServiceDate: 1895,
    specifications: {},
  },
  {
    name: "ППС-43",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "ППШ-41",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    specifications: {},
  },
  {
    name: "ППД-40",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    specifications: {},
  },
  {
    name: "ПТРД",
    type: WEAPONS_CLASSIFICATION.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1941,
    specifications: {},
  },
  {
    name: "ДП",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1927,
    specifications: {},
  },
];

const germany: IWeapon[] = [
  {
    name: "Mauser 98k",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1935,
    specifications: {},
  },
  {
    name: "Sturmgewehr 44",
    type: WEAPONS_CLASSIFICATION.smallArms.assaultRifle,
    adoptedIntoServiceDate: 1944,
    specifications: {},
  },
  {
    name: "Gewehr 43",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1943,
    specifications: {},
  },
  {
    name: "MG-42",
    type: WEAPONS_CLASSIFICATION.smallArms.generalPurposeMachinegun,
    adoptedIntoServiceDate: 1942,
    specifications: {},
  },
  {
    name: "MG-34",
    type: WEAPONS_CLASSIFICATION.smallArms.generalPurposeMachinegun,
    adoptedIntoServiceDate: 1938,
    specifications: {},
  },
];

const usa: IWeapon[] = [
  {
    name: "Browning M2",
    type: WEAPONS_CLASSIFICATION.smallArms.heavyMachinegun,
    adoptedIntoServiceDate: 1933,
    specifications: {},
  },
];

const finland: IWeapon[] = [
  {
    name: "Suomi KP-31",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1931,
    specifications: {},
  },
];

const japan: IWeapon[] = [];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(usa, NATIONS.USA);
appendNation(finland, NATIONS.finland);
appendNation(japan, NATIONS.japan);

export const SMALL_ARMS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...finland,
];
appendWeaponBranch(SMALL_ARMS_DATA, WEAPONS_CLASSIFICATION.smallArms);
