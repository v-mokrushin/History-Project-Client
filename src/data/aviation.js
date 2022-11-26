import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";

let USSR = [
  {
    name: "Ла-5ФН",
    id: "hgea2g20-3689-42e9-a226-57143986597b",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    gallery: {
      icon: "/images/weapons/aviation/USSR/Ла-5ФН/1.jpg",
      photo: [],
    },
  },
];
USSR = USSR.map((item) => ({
  ...item,
  nation: NATIONS.USSR,
}));

let germany = [
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    id: "2cc51dcf-a8b8-451e-8202-7f1468e89597",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    weapon: {},
    gallery: {
      icon: "/images/weapons/aviation/germany/Me.262/1.jpg",
      photo: [],
    },
  },
];
germany = germany.map((item) => ({
  ...item,
  nation: NATIONS.germany,
}));

export const AVIATION_DATA = [...USSR, ...germany];
