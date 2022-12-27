import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";

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
];
USSR.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  {
    name: "7,5 cm Pak. 40",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
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

export const ARTILLERY_DATA = [...USSR, ...germany, ...britain];
