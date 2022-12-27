import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";
import Yak_3 from "../../../jsx/fragments/weapons/Yak-3";

let ussr: IWeapon[] = [
  {
    name: "Ла-5ФН",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Ла-5Ф",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "Ла-5",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "Як-9",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    icon: "icon-2.jpg",
  },
  {
    name: "Як-3",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
    JSXComponent: Yak_3(),
    intro: [
      "Истребитель Як-3 вошел в историю советской авиации как самый скоростной серийный поршневой самолет. Созданная в авральных условиях машина оказалась не только пригодной к серийному производству, но и получила всеобщее признание как один из лучших истребителей Великой Отечественной войны.",
      "Популярность Як-3 оказалась столь огромной, что в начале 90-х годов КБ Яковлева выпустило партию реплик знаменитого истребителя. Реплика, получившая обозначение Як-3М, имеет полностью металлическую конструкцию и силовой агрегат Allison 2L. Машины предназначались для коллекционеров.",
    ],
    videomaterials: [
      "https://www.youtube.com/embed/SQOWKR4m8RE",
      "https://www.youtube.com/embed/njTtuh6fYng",
    ],
    specifications: {},
  },
  {
    name: "Як-1",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1940,
    icon: "icon.jpg",
  },
];
ussr.forEach((item) => (item.nation = NATIONS.USSR));

let germany: IWeapon[] = [
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Heinkel He 111",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1935,
    icon: "icon.jpg",
  },
  {
    name: "Ju-87 G-1",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa: IWeapon[] = [
  {
    name: "P-51-D5 Mustang",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Douglas A-20G Havoc",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let japan: IWeapon[] = [
  {
    name: "A6M5 Raisen",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "G4M",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
];
japan.forEach((item) => (item.nation = NATIONS.japan));

export const AVIATION_DATA = [...ussr, ...germany, ...usa, ...japan];
