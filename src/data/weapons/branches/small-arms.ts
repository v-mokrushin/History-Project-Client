import { Developers } from "../departments/developers";
import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { Nations } from "../../../constants/nations";
import { ChiefDesigners } from "../departments/chief-designers";
import { ISmallArm } from "../interfaces/small-arms-interfaces";
import { platform } from "process";
import { Platforms } from "../departments/platforms";

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
    adoptedIntoServiceDate: 1891,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Mosin,
        platform: Platforms.smallArms.Mosin,
        numberOfIssued: 20_000_000, // ?
      },
    },
  },
  {
    name: "Снайперская винтовка обр. 1891/30 г.",
    shortName: "Снайп. винт. обр. 1891/30 г.",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1930,
    specifications: {
      common: {
        platform: Platforms.smallArms.Mosin,
        numberOfIssued: 108_835,
      },
    },
  },
  {
    name: "Карабин Мосина",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1907,
    specifications: {
      common: {
        platform: Platforms.smallArms.Mosin,
        numberOfIssued: 8_000_000, // ??? придумал
      },
    },
  },
  {
    name: "СВТ-40",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Tokarev,
        platform: Platforms.smallArms.SVT,
        numberOfIssued: 1_550_000,
      },
    },
  },
  {
    name: "СВТ-40 (снайперский)",
    shortName: "СВТ-40 (снайп.)",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Tokarev,
        platform: Platforms.smallArms.SVT,
        numberOfIssued: 48_992,
      },
    },
  },
  {
    name: "АВТ-40",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Tokarev,
        platform: Platforms.smallArms.SVT,
        // numberOfIssued: 1_550_000,
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
        numberOfIssued: 500_000,
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
        numberOfIssued: 6_000_000,
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
        numberOfIssued: 90_000,
      },
    },
  },
  {
    name: "Пулемет Максима обр. 1910/1930 г.",
    type: WEAPONS_CLASSIFICATION.smallArms.heavyMachinegun,
    adoptedIntoServiceDate: 1930,
    specifications: {
      common: {},
    },
  },
  {
    name: "ПТРД",
    type: WEAPONS_CLASSIFICATION.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Degtyarev,
        numberOfIssued: 293_153,
      },
    },
  },
  {
    name: "ДП-27",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1927,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Degtyarev,
        numberOfIssued: 795_000,
      },
    },
  },
];

const germany: ISmallArm[] = [
  {
    name: "Mauser Gewehr 98",
    shortName: "Mauser 98",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1898,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Mauser,
        platform: Platforms.smallArms.Mauser,
        numberOfIssued: 13_000_000, // ???
      },
    },
  },
  {
    name: "Karabiner 98k",
    shortName: "Mauser 98k",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1935,
    specifications: {
      common: {
        // chiefDesigner: ChiefDesigners.smallArms.Mauser,
        platform: Platforms.smallArms.Mauser,
        numberOfIssued: 15_000_000, // ???
      },
    },
  },
  {
    name: "Sturmgewehr 44",
    shortName: "StG 44",
    type: WEAPONS_CLASSIFICATION.smallArms.assaultRifle,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.HugoSchmeisser,
        numberOfIssued: 446_000,
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
        numberOfIssued: 500_000,
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
        numberOfIssued: 423_000,
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
        numberOfIssued: 1_000_000, // ???
      },
    },
  },
];

const usa: ISmallArm[] = [
  {
    name: "Springfield M1903",
    shortName: "M1903",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1903,
    specifications: {
      common: { numberOfIssued: 1_300_000 },
    },
  },
  {
    name: "M3 Grease gun",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: { numberOfIssued: 700_000 },
    },
  },
  {
    name: "M1A1 Thompson",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Thompson, // ???
        platform: Platforms.smallArms.Thompson,
        numberOfIssued: 539_143,
      },
    },
  },
  {
    name: "M1 Thompson",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Thompson, // ???
        platform: Platforms.smallArms.Thompson,
        numberOfIssued: 285_480,
      },
    },
  },
  {
    name: "M1928A1 Thompson",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1940, // ???
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Thompson, // ???
        platform: Platforms.smallArms.Thompson,
        numberOfIssued: 562_511,
      },
    },
  },
  {
    name: "M1928 Thompson",
    type: WEAPONS_CLASSIFICATION.smallArms.submachineGun,
    adoptedIntoServiceDate: 1928,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Thompson, // ???
        platform: Platforms.smallArms.Thompson,
      },
    },
  },
  {
    name: "M1 Garand",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingRifle,
    adoptedIntoServiceDate: 1936,
    specifications: {
      common: {
        numberOfIssued: 5_400_000,
      },
    },
  },
  {
    name: "М1А1 Carbine",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingCarbine,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        numberOfIssued: 150_000,
      },
    },
  },
  {
    name: "М3 Carbine",
    type: WEAPONS_CLASSIFICATION.smallArms.selfLoadingCarbine,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        numberOfIssued: 3_000,
      },
    },
  },
  {
    name: "Browning M1918",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1917,
    specifications: {
      common: { chiefDesigner: ChiefDesigners.smallArms.Browning },
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

const britain: ISmallArm[] = [
  {
    name: "Short Magazine Lee-Enfield",
    shortName: "SMLE",
    type: WEAPONS_CLASSIFICATION.smallArms.rifle,
    adoptedIntoServiceDate: 1904,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Paris,
        numberOfIssued: 17_000_000, // ???
      },
    },
  },
  {
    name: "Boys",
    type: WEAPONS_CLASSIFICATION.smallArms.antiTankGun,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Boys,
        productionPeriod: "1937 - 1942",
        numberOfIssued: 60_000,
        // developer: Developers.smallArms.Walther,
      },
    },
  },
];
const belgium: ISmallArm[] = [
  {
    name: "Lewis",
    type: WEAPONS_CLASSIFICATION.smallArms.machinegun,
    adoptedIntoServiceDate: 1914,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.smallArms.Lewis,
        numberOfIssued: 202_050,
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
        numberOfIssued: 80_000,
      },
    },
  },
];

const japan: ISmallArm[] = [];

appendNation(ussr, Nations.USSR);
appendNation(germany, Nations.Germany);
appendNation(usa, Nations.USA);
appendNation(britain, Nations.GreatBritain);
appendNation(belgium, Nations.Belgium);
appendNation(finland, Nations.Finland);
appendNation(japan, Nations.Japan);

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
