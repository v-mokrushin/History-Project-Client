import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";

let ussr = [
  {
    name: "Ла-5ФН",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    icon: "icon.jpg",
  },
];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany = [
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "Heinkel He 111",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1935,
    weapon: {},
    icon: "icon.jpg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa = [
  {
    name: "P-51-D5 Mustang",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "Douglas A-20G Havoc",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    icon: "icon.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let japan = [
  {
    name: "A6M5 Raisen",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    icon: "icon.jpg",
  },
  {
    name: "G4M",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1941,
    weapon: {},
    icon: "icon.jpg",
  },
];
japan.forEach((item) => (item.nation = NATIONS.japan));

export const AVIATION_DATA = [...ussr, ...germany, ...usa, ...japan];
