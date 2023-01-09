import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";
import Yak_3 from "../../../fragments/weapons/Yak-3";

const ussr: IWeapon[] = [
  {
    name: "Ил-4",
    type: WEAPONS_TYPE.aviation.strategicBomber,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "Ла-5ФН",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Ла-5Ф",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Ла-5",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1942,
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
  },
  {
    name: "УТ-2",
    type: WEAPONS_TYPE.aviation.training,
    adoptedIntoServiceDate: 1936,
  },
];

const germany: IWeapon[] = [
  {
    name: "Heinkel He 162 Volksjäger",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1945,
  },
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Heinkel He 111",
    type: WEAPONS_TYPE.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1935,
  },
  {
    name: "Focke-Wulf Ta 152",
    type: WEAPONS_TYPE.aviation.interceptor,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Junkers Ju 87 G-1 Stuka",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Junkers Ju 290",
    type: WEAPONS_TYPE.aviation.scout,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Messerschmitt Me.323 Gigant",
    type: WEAPONS_TYPE.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Focke-Wulf Fw 200 Condor",
    type: WEAPONS_TYPE.aviation.multipurpose,
    adoptedIntoServiceDate: 1937,
  },
];

const usa: IWeapon[] = [
  {
    name: "Grumman F8F Bearcat",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1945,
  },
  {
    name: "North American P-51-D Mustang",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Douglas A-20G Havoc",
    type: WEAPONS_TYPE.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Boeing B-29 Superfortress",
    type: WEAPONS_TYPE.aviation.strategicBomber,
    adoptedIntoServiceDate: 1944,
  },
];

const britain: IWeapon[] = [
  {
    name: "Gloster Meteor F.Mk.4",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Avro 683 Lancaster",
    type: WEAPONS_TYPE.aviation.strategicBomber,
    adoptedIntoServiceDate: 1942,
  },
];

const france: IWeapon[] = [
  {
    name: "Morane-Saulnier MS.406",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1939,
  },
];

const japan: IWeapon[] = [
  {
    name: "Mitsubishi A6M5 Raisen",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Mitsubishi G4M",
    type: WEAPONS_TYPE.aviation.torpedoBomber,
    adoptedIntoServiceDate: 1941,
  },
];

const italy: IWeapon[] = [
  {
    name: "Macchi C.205 Veltro",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
  },
];

const poland: IWeapon[] = [
  {
    name: "PZL.37-Łoś",
    type: WEAPONS_TYPE.aviation.bomber,
    adoptedIntoServiceDate: 1938,
  },
];

const sweden: IWeapon[] = [
  {
    name: "Saab 17",
    type: WEAPONS_TYPE.aviation.lightBomber,
    adoptedIntoServiceDate: 1942,
  },
];

const finland: IWeapon[] = [
  {
    name: "VL Myrsky II",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1943,
  },
];

const romania: IWeapon[] = [
  {
    name: "IAR 80",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1941,
  },
];

const lithuania: IWeapon[] = [
  {
    name: "ANBO-41",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1937,
  },
];

const netherlands: IWeapon[] = [
  {
    name: "Fokker G.1",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1937,
  },
];

const yugoslavia: IWeapon[] = [
  {
    name: "Ikarus IK-2",
    type: WEAPONS_TYPE.aviation.fighter,
    adoptedIntoServiceDate: 1939,
  },
];

const hungary: IWeapon[] = [
  {
    name: "Weiss WM 21 Sólyom",
    type: WEAPONS_TYPE.aviation.scout,
    adoptedIntoServiceDate: 1939,
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(usa, NATIONS.USA);
appendNation(britain, NATIONS.greatBritain);
appendNation(france, NATIONS.france);
appendNation(finland, NATIONS.finland);
appendNation(poland, NATIONS.poland);
appendNation(sweden, NATIONS.sweden);
appendNation(romania, NATIONS.romania);
appendNation(japan, NATIONS.japan);
appendNation(lithuania, NATIONS.lithuania);
appendNation(netherlands, NATIONS.netherlands);
appendNation(yugoslavia, NATIONS.yugoslavia);
appendNation(hungary, NATIONS.hungary);
appendNation(italy, NATIONS.italy);

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
appendWeaponBranch(AVIATION_DATA, WEAPONS_TYPE.aviation);
