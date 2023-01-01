import { IWeapon } from "./weapons";
import { WEAPONS_TYPE } from "../../constants/weapons";
import { NATIONS } from "../../constants/nations";
import Yak_3 from "../../fragments/weapons/Yak-3";

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
  {
    name: "УТ-2",
    type: WEAPONS_TYPE.aviation.training,
    adoptedIntoServiceDate: 1936,
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
    name: "Focke-Wulf Ta 152",
    type: WEAPONS_TYPE.aviation.interceptor,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
  {
    name: "Ju-87 G-1",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "Junkers Ju 290",
    type: WEAPONS_TYPE.aviation.scout,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "Messerschmitt Me.323 Gigant",
    type: WEAPONS_TYPE.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "Focke-Wulf Fw 200 Condor",
    type: WEAPONS_TYPE.aviation.multipurpose,
    adoptedIntoServiceDate: 1937,
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

let britain: IWeapon[] = [
  {
    name: "Gloster Meteor F.Mk.4",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    icon: "icon.jpg",
  },
];
britain.forEach((item) => (item.nation = NATIONS.greatBritain));

let france: IWeapon[] = [
  {
    name: "Morane-Saulnier MS.406",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1939,
    icon: "icon.jpg",
  },
];
france.forEach((item) => (item.nation = NATIONS.france));

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

let italy: IWeapon[] = [
  {
    name: "Macchi C.205 Veltro",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
];
italy.forEach((item) => (item.nation = NATIONS.italy));

let poland: IWeapon[] = [
  {
    name: "PZL.37-Łoś",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1938,
    icon: "icon.jpg",
  },
];
poland.forEach((item) => (item.nation = NATIONS.poland));

let sweden: IWeapon[] = [
  {
    name: "Saab 17",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
];
sweden.forEach((item) => (item.nation = NATIONS.sweden));

let finland: IWeapon[] = [
  {
    name: "VL Myrsky II",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
];
finland.forEach((item) => (item.nation = NATIONS.finland));

let romania: IWeapon[] = [
  {
    name: "IAR 80",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
];
romania.forEach((item) => (item.nation = NATIONS.romania));

let lithuania: IWeapon[] = [
  {
    name: "ANBO-41",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
];
lithuania.forEach((item) => (item.nation = NATIONS.lithuania));

let netherlands: IWeapon[] = [
  {
    name: "Fokker G.1",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
];
netherlands.forEach((item) => (item.nation = NATIONS.netherlands));

let yugoslavia: IWeapon[] = [
  {
    name: "Ikarus IK-2",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1939,
    icon: "icon.jpg",
  },
];
yugoslavia.forEach((item) => (item.nation = NATIONS.yugoslavia));

let hungary: IWeapon[] = [
  {
    name: "Weiss WM 21 Sólyom",
    type: WEAPONS_TYPE.aviation.scout,
    adoptedIntoServiceDate: 1939,
    icon: "icon.jpg",
  },
];
hungary.forEach((item) => (item.nation = NATIONS.hungary));

export const AVIATION_DATA = [
  ...ussr,
  ...germany,
  ...usa,
  ...britain,
  ...france,
  ...japan,
  ...poland,
  ...sweden,
  ...finland,
  ...romania,
  ...lithuania,
  ...netherlands,
  ...yugoslavia,
  ...hungary,
  ...italy,
];
