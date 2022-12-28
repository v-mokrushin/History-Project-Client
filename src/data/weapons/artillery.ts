import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../../constants/weapons";
import { NATIONS } from "../../constants/nations";

let USSR: IWeapon[] = [
  {
    name: "203-мм гаубица Б-4",
    type: WEAPONS_TYPE.artillery.specialPower,
    adoptedIntoServiceDate: 1931,
    icon: "icon.jpg",
  },
  {
    name: "152-мм гаубица МЛ-20",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
  {
    name: "152-мм гаубица Д-1",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
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
    icon: "icon.jpg",
  },
  {
    name: "57-мм пушка ЗИС-2",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "45-мм пушка M-42",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "45-мм пушка 53-К",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
  {
    name: "120-мм миномёт ПМ-38",
    type: WEAPONS_TYPE.artillery.regimental,
    adoptedIntoServiceDate: 1938,
    icon: "icon.jpg",
  },
  {
    name: "50-мм миномёт РМ-41",
    type: WEAPONS_TYPE.artillery.company,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "82-мм миномёт БМ-37",
    type: WEAPONS_TYPE.artillery.battalion,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
  {
    name: "37-мм пушка 61-К",
    type: WEAPONS_TYPE.artillery.antiaircraft,
    adoptedIntoServiceDate: 1939,
    icon: "icon.jpg",
  },
  {
    name: "БМ-13 (ЗИС-6)",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "БМ-13 (СТЗ-5)",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "БМ-13Н",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "БМ-31-12",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
];
USSR.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  {
    name: "7,5 cm Pak. 40",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "15cm Panzerwerfer 42 Auf.Sf",
    type: WEAPONS_TYPE.artillery.reactive,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Vergeltungswaffe-2",
    type: WEAPONS_TYPE.artillery.ballisticMissile,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Vergeltungswaffe Eins",
    type: WEAPONS_TYPE.artillery.cruiseMissile,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpeg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let britain: IWeapon[] = [
  {
    name: "QF 17 pounder",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
];
britain.forEach((item) => (item.nation = NATIONS.greatBritain));

let sweden: IWeapon[] = [
  {
    name: "Bofors L/60",
    type: WEAPONS_TYPE.artillery.antiaircraft,
    adoptedIntoServiceDate: 1932,
    icon: "icon.jpg",
  },
];
sweden.forEach((item) => (item.nation = NATIONS.sweden));

export const ARTILLERY_DATA = [...USSR, ...germany, ...britain, ...sweden];
