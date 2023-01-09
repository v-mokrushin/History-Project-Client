import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";

const ussr: IWeapon[] = [
  {
    name: "203-мм гаубица Б-4",
    type: WEAPONS_TYPE.artillery.specialPower,
    adoptedIntoServiceDate: 1931,
  },
  {
    name: "152-мм гаубица МЛ-20",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1937,
  },
  {
    name: "152-мм гаубица Д-1",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "122-мм гаубица M-30",
    type: WEAPONS_TYPE.artillery.division,
    adoptedIntoServiceDate: 1938,
    icon: "icon.jpeg",
  },
  {
    name: "76-мм пушка ЗИС-3",
    type: WEAPONS_TYPE.artillery.division,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "57-мм пушка ЗИС-2",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "45-мм пушка M-42",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "45-мм пушка 53-К",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1937,
  },
  {
    name: "120-мм миномёт ПМ-38",
    type: WEAPONS_TYPE.artillery.regimental,
    adoptedIntoServiceDate: 1938,
  },
  {
    name: "50-мм миномёт РМ-41",
    type: WEAPONS_TYPE.artillery.company,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "82-мм миномёт БМ-37",
    type: WEAPONS_TYPE.artillery.battalion,
    adoptedIntoServiceDate: 1937,
  },
  {
    name: "37-мм пушка 61-К",
    type: WEAPONS_TYPE.artillery.antiaircraft,
    adoptedIntoServiceDate: 1939,
  },
  {
    name: "БМ-13 (ЗИС-6)",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "БМ-13 (СТЗ-5)",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "БМ-13Н",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "БМ-31-12",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1944,
  },
];

const germany: IWeapon[] = [
  {
    name: "7,5 cm Pak. 40",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "15cm Panzerwerfer 42 Auf.Sf",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Vergeltungswaffe-2",
    type: WEAPONS_TYPE.artillery.ballisticMissile,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Vergeltungswaffe Eins",
    type: WEAPONS_TYPE.artillery.cruiseMissile,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpeg",
  },
];

const britain: IWeapon[] = [
  {
    name: "QF 17 pounder",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1943,
  },
];

const sweden: IWeapon[] = [
  {
    name: "Bofors L/60",
    type: WEAPONS_TYPE.artillery.antiaircraft,
    adoptedIntoServiceDate: 1932,
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(britain, NATIONS.greatBritain);
appendNation(sweden, NATIONS.sweden);

export const ARTILLERY_DATA = [...ussr, ...germany, ...britain, ...sweden];
appendWeaponBranch(ARTILLERY_DATA, WEAPONS_TYPE.artillery);
