import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import { Developers } from "../developers";
import { TWeapon } from "../interfaces/common-weapon-interfaces";

const ussr: TWeapon[] = [
  {
    name: "203-мм гаубица Б-4",
    type: WEAPONS_CLASSIFICATION.artillery.specialPower,
    adoptedIntoServiceDate: 1931,
    specifications: {
      common: {
        developer: Developers.atillery.ArtilleryDesignBureau, /// TODO (2 developers)
      },
    },
  },
  {
    name: "152-мм гаубица МЛ-20",
    type: WEAPONS_CLASSIFICATION.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.atillery.Plant172,
      },
    },
  },
  {
    name: "152-мм гаубица Д-1",
    type: WEAPONS_CLASSIFICATION.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "122-мм гаубица M-30",
    type: WEAPONS_CLASSIFICATION.artillery.division,
    adoptedIntoServiceDate: 1938,
    specifications: { common: {} },
  },
  {
    name: "76-мм пушка ЗИС-3",
    type: WEAPONS_CLASSIFICATION.artillery.division,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.atillery.Plant92,
      },
    },
  },
  {
    name: "57-мм пушка ЗИС-2",
    type: WEAPONS_CLASSIFICATION.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.atillery.Plant92,
      },
    },
  },
  {
    name: "45-мм пушка M-42",
    type: WEAPONS_CLASSIFICATION.artillery.antitank,
    adoptedIntoServiceDate: 1942,
    specifications: { common: {} },
  },
  {
    name: "45-мм пушка 53-К",
    type: WEAPONS_CLASSIFICATION.artillery.antitank,
    adoptedIntoServiceDate: 1937,
    specifications: { common: {} },
  },
  {
    name: "120-мм миномёт ПМ-38",
    type: WEAPONS_CLASSIFICATION.artillery.regimental,
    adoptedIntoServiceDate: 1938,
    specifications: { common: {} },
  },
  {
    name: "50-мм миномёт РМ-41",
    type: WEAPONS_CLASSIFICATION.artillery.company,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "82-мм миномёт БМ-37",
    type: WEAPONS_CLASSIFICATION.artillery.battalion,
    adoptedIntoServiceDate: 1937,
    specifications: { common: {} },
  },
  {
    name: "37-мм пушка 61-К",
    type: WEAPONS_CLASSIFICATION.artillery.antiaircraft,
    adoptedIntoServiceDate: 1939,
    specifications: { common: {} },
  },
  {
    name: "БМ-13 (ЗИС-6)",
    type: WEAPONS_CLASSIFICATION.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "БМ-13 (СТЗ-5)",
    type: WEAPONS_CLASSIFICATION.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
  {
    name: "БМ-13Н",
    type: WEAPONS_CLASSIFICATION.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "БМ-31-12",
    type: WEAPONS_CLASSIFICATION.artillery.reactive,
    adoptedIntoServiceDate: 1944,
    specifications: { common: {} },
  },
];

const germany: TWeapon[] = [
  {
    name: "7,5 cm Pak. 40",
    type: WEAPONS_CLASSIFICATION.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.RheinmetallBorsig,
      },
    },
  },
  {
    name: "15cm Panzerwerfer 42 Auf.Sf",
    type: WEAPONS_CLASSIFICATION.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.atillery.Opel,
      },
    },
  },
  {
    name: "Vergeltungswaffe-2",
    type: WEAPONS_CLASSIFICATION.artillery.ballisticMissile,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.atillery.Peenemunde,
      },
    },
  },
  {
    name: "Vergeltungswaffe-1",
    type: WEAPONS_CLASSIFICATION.artillery.cruiseMissile,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.atillery.Fieseler,
      },
    },
  },
];

const britain: TWeapon[] = [
  {
    name: "QF 17 pounder",
    type: WEAPONS_CLASSIFICATION.artillery.antitank,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
];

const sweden: TWeapon[] = [
  {
    name: "Bofors L/60",
    type: WEAPONS_CLASSIFICATION.artillery.antiaircraft,
    adoptedIntoServiceDate: 1932,
    specifications: { common: {} },
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(britain, NATIONS.greatBritain);
appendNation(sweden, NATIONS.sweden);

export const ARTILLERY_DATA = [...ussr, ...germany, ...britain, ...sweden];
appendWeaponBranch(ARTILLERY_DATA, WEAPONS_CLASSIFICATION.artillery);
