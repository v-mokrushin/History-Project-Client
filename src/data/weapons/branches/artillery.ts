import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WeaponClassification } from "../../../constants/weapon-types";
import { Nations } from "../../../constants/nations";
import { Developers } from "../departments/developers";
import { TWeapon } from "../interfaces/common-weapon-interfaces";
import { ChiefDesigners } from "../departments/chief-designers";

const ussr: TWeapon[] = [
  {
    name: "203-мм гаубица Б-4",
    shortName: "Б-4",
    type: WeaponClassification.artillery.specialPower,
    adoptedIntoServiceDate: 1931,
    specifications: {
      common: {
        developer: Developers.atillery.ArtilleryDesignBureau, /// TODO (2 developers)
        numberOfIssued: 1011,
      },
    },
  },
  {
    name: "152-мм гаубица МЛ-20",
    shortName: "МЛ-20",
    type: WeaponClassification.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.atillery.Plant172,
        numberOfIssued: 6884,
      },
    },
  },
  {
    name: "152-мм гаубица Д-1",
    shortName: "Д-1",
    type: WeaponClassification.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 2827,
      },
    },
  },
  {
    name: "122-мм гаубица M-30",
    shortName: "М-30",
    type: WeaponClassification.artillery.division,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        numberOfIssued: 19531,
      },
    },
  },
  {
    name: "76-мм пушка ЗИС-3",
    shortName: "ЗИС-3",
    type: WeaponClassification.artillery.division,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.atillery.Plant92,
        chiefDesigner: ChiefDesigners.artillery.Grabin,
        numberOfIssued: 48100,
      },
    },
  },
  {
    name: "57-мм пушка ЗИС-2",
    shortName: "ЗИС-2",
    type: WeaponClassification.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.atillery.Plant92,
        chiefDesigner: ChiefDesigners.artillery.Grabin,
        numberOfIssued: 13510,
      },
    },
  },
  {
    name: "45-мм пушка M-42",
    shortName: "М-42",
    type: WeaponClassification.artillery.antitank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        numberOfIssued: 11156,
      },
    },
  },
  {
    name: "45-мм пушка 53-К",
    shortName: "53-К",
    type: WeaponClassification.artillery.antitank,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        numberOfIssued: 46100,
      },
    },
  },
  {
    name: "120-мм миномёт ПМ-38",
    type: WeaponClassification.artillery.regimental,
    adoptedIntoServiceDate: 1938,
    specifications: { common: {} },
  },
  {
    name: "50-мм миномёт РМ-41",
    type: WeaponClassification.artillery.company,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "82-мм миномёт БМ-37",
    type: WeaponClassification.artillery.battalion,
    adoptedIntoServiceDate: 1937,
    specifications: { common: {} },
  },
  {
    name: "37-мм пушка 61-К",
    type: WeaponClassification.artillery.antiaircraft,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        numberOfIssued: 19689,
      },
    },
  },
  {
    name: "БМ-13 (ЗИС-6)",
    type: WeaponClassification.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "БМ-13 (СТЗ-5)",
    type: WeaponClassification.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "БМ-13Н",
    type: WeaponClassification.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 1845,
      },
    },
  },
  {
    name: "БМ-31-12",
    type: WeaponClassification.artillery.reactive,
    adoptedIntoServiceDate: 1944,
    specifications: { common: {} },
  },
];

const germany: TWeapon[] = [
  {
    name: "7,5 cm Pak. 40",
    shortName: "Pak 40",
    type: WeaponClassification.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.RheinmetallBorsig,
        numberOfIssued: 20217,
      },
    },
  },
  {
    name: "15cm Panzerwerfer 42 Auf.Sf",
    shortName: "Sd.Kfz.4/1",
    type: WeaponClassification.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.atillery.Opel,
        numberOfIssued: 600,
      },
    },
  },
  {
    name: "Vergeltungswaffe-2",
    shortName: "V-2",
    type: WeaponClassification.artillery.ballisticMissile,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.atillery.Peenemunde,
        chiefDesigner: ChiefDesigners.artillery.Braun,
        numberOfIssued: 3170,
      },
    },
  },
  {
    name: "Vergeltungswaffe-1",
    shortName: "V-1",
    type: WeaponClassification.artillery.cruiseMissile,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.atillery.Fieseler,
        chiefDesigner: ChiefDesigners.artillery.Lusser,
        numberOfIssued: 25000,
      },
    },
  },
];

const britain: TWeapon[] = [
  {
    name: "QF 17 pounder",
    type: WeaponClassification.artillery.antitank,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
];

const sweden: TWeapon[] = [
  {
    name: "Bofors L/60",
    type: WeaponClassification.artillery.antiaircraft,
    adoptedIntoServiceDate: 1932,
    specifications: { common: {} },
  },
];

appendNation(ussr, Nations.USSR);
appendNation(germany, Nations.Germany);
appendNation(britain, Nations.GreatBritain);
appendNation(sweden, Nations.Sweden);

export const ARTILLERY_DATA = [...ussr, ...germany, ...britain, ...sweden];
appendWeaponBranch(ARTILLERY_DATA, WeaponClassification.artillery);
