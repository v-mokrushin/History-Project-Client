import { Developers } from "../departments/developers";
import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import { ChiefDesigners } from "../departments/chief-designers";
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
    name: "Винтовка Мосина",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1892,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Mosin,
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
    name: "Mauser Gewehr 98",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1898,
    specifications: {
      common: { chiefDesigner: ChiefDesigners.smallArms.Mauser },
    },
  },
  {
    name: "Karabiner 98k",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1935,
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
    name: "MP-40",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Nagan,
        numberOfIssued: 1_200_000,
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
    name: "M1 Garand",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1936,
    specifications: {
      common: {},
    },
  },
  {
    name: "Browning M2",
    type: WEAPONS_CLASSIFICATION.smallArms.heavyMachinegun,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: { chiefDesigner: ChiefDesigners.smallArms.Browning },
    },
  },
];

const britain: ISmallArm[] = [];

const belgium: ISmallArm[] = [
  {
    name: "Lewis",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1914,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Lewis,
      },
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
appendNation(germany, NATIONS.Germany);
appendNation(usa, NATIONS.USA);
appendNation(britain, NATIONS.GreatBritain);
appendNation(belgium, NATIONS.Belgium);
appendNation(finland, NATIONS.Finland);
appendNation(japan, NATIONS.Japan);

export const SMALL_ARMS_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...japan,
  ...britain,
  ...belgium,
  ...finland,
];
appendWeaponBranch(SMALL_ARMS_DATA, WEAPONS_CLASSIFICATION.smallArms);
