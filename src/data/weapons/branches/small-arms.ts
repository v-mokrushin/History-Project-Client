import { Developers } from "../developers";
import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import { ChiefDesigners } from "../chief-designers";
import { ISmallArm } from "../interfaces/small-arms-interfaces";

const ussr: ISmallArm[] = [
  {
    name: "Револьвер системы Нагана",
    type: WEAPONS_CLASSIFICATION.smallArms.revolver,
    adoptedIntoServiceDate: 1895,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Nagan,
      },
    },
  },
  {
    name: "ППС-43",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Sudaev,
      },
    },
  },
  {
    name: "ППШ-41",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Shpagin,
      },
    },
  },
  {
    name: "ППД-40",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Degtyarev,
      },
    },
  },
  {
    name: "ПТРД",
    type: WEAPONS_CLASSIFICATION.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Degtyarev,
      },
    },
  },
  {
    name: "ДП",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1927,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Degtyarev,
      },
    },
  },
];

const germany: ISmallArm[] = [
  {
    name: "Mauser 98",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1898,
    specifications: {
      common: { chiefDesigner: ChiefDesigners.smallArms.Mauser },
    },
  },
  {
    name: "Sturmgewehr 44",
    type: WEAPONS_CLASSIFICATION.smallArms.assaultRifle,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.HugoSchmeisser,
      },
    },
  },
  {
    name: "Gewehr 43",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.smallArms.Walther,
      },
    },
  },
  {
    name: "MG 42",
    type: WEAPONS_CLASSIFICATION.smallArms.generalPurposeMachinegun,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.WernerGruner,
      },
    },
  },
  {
    name: "MG 34",
    type: WEAPONS_CLASSIFICATION.smallArms.generalPurposeMachinegun,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        developer: Developers.RheinmetallBorsig,
        chiefDesigner: ChiefDesigners.smallArms.LouisStange,
      },
    },
  },
];

const usa: ISmallArm[] = [
  {
    name: "Browning M2",
    type: WEAPONS_CLASSIFICATION.smallArms.heavyMachinegun,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: { chiefDesigner: ChiefDesigners.smallArms.Browning },
    },
  },
];

const finland: ISmallArm[] = [
  {
    name: "Suomi KP/-31",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1931,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.AimoLahti,
      },
    },
  },
];

const japan: ISmallArm[] = [];

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
