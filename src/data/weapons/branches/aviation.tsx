import { appendNation, appendWeaponBranch } from "utils/weapons";
import { IWeapon } from "../weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import Yak_3 from "../../../fragments/weapons/Yak-3";
import { Developers } from "../developers";

const ussr: IWeapon[] = [
  {
    name: "Ла-5ФН",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.LA,
      },
    },
  },
  {
    name: "Ла-5Ф",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.LA,
      },
    },
  },
  {
    name: "Ла-5",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.LA,
      },
    },
  },
  {
    name: "Як-9",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
      },
    },
  },
  {
    name: "Як-3",
    isReady: true,
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    JSXComponent: <Yak_3 />,
    sections: [
      "Введение",
      "Разработка",
      "Боевое применение",
      "Видеоматериалы",
      "Читайте также",
    ],
    intro: [
      "Истребитель Як-3 вошел в историю советской авиации как самый скоростной серийный поршневой самолет. Созданная в авральных условиях машина оказалась не только пригодной к серийному производству, но и получила всеобщее признание как один из лучших истребителей Великой Отечественной войны.",
      "Популярность Як-3 оказалась столь огромной, что в начале 90-х годов КБ Яковлева выпустило партию реплик знаменитого истребителя. Реплика, получившая обозначение Як-3М, имеет полностью металлическую конструкцию и силовой агрегат Allison 2L. Машины предназначались для коллекционеров.",
    ],
    videomaterials: [
      "https://www.youtube.com/embed/SQOWKR4m8RE",
      "https://www.youtube.com/embed/njTtuh6fYng",
    ],
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
      },
    },
  },
  {
    name: "Як-1",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
      },
    },
  },
  {
    name: "УТ-2",
    type: WEAPONS_CLASSIFICATION.aviation.training,
    adoptedIntoServiceDate: 1936,
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
      },
    },
  },
  {
    name: "Ил-10",
    type: WEAPONS_CLASSIFICATION.aviation.attackАircraft,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.aviation.IL,
      },
    },
  },
  {
    name: "Ту-2С",
    type: WEAPONS_CLASSIFICATION.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Tupolev,
      },
    },
  },
  {
    name: "Ил-4",
    type: WEAPONS_CLASSIFICATION.aviation.strategicBomber,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        developer: Developers.aviation.IL,
      },
    },
  },
];

const germany: IWeapon[] = [
  {
    name: "Heinkel He 162 Volksjäger",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.aviation.Heinkel,
      },
    },
  },
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.Messerschmitt,
      },
    },
  },
  {
    name: "Heinkel He 111",
    type: WEAPONS_CLASSIFICATION.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1935,
    specifications: {
      common: {
        developer: Developers.aviation.Heinkel,
      },
    },
  },
  {
    name: "Focke-Wulf Ta 152",
    type: WEAPONS_CLASSIFICATION.aviation.interceptor,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.FockeWulf,
      },
    },
  },
  {
    name: "Junkers Ju 87 G-1 Stuka",
    type: WEAPONS_CLASSIFICATION.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Junkers,
      },
    },
  },
  {
    name: "Junkers Ju 290",
    type: WEAPONS_CLASSIFICATION.aviation.scout,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Junkers,
      },
    },
  },
  {
    name: "Messerschmitt Me.323 Gigant",
    type: WEAPONS_CLASSIFICATION.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Messerschmitt,
      },
    },
  },
  {
    name: "Focke-Wulf Fw 200 Condor",
    type: WEAPONS_CLASSIFICATION.aviation.multipurpose,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.aviation.FockeWulf,
      },
    },
  },
];

const usa: IWeapon[] = [
  {
    name: "Grumman F8F Bearcat",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.aviation.Grumman,
      },
    },
  },
  {
    name: "North American P-51-D Mustang",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.NorthAmerican,
      },
    },
  },
  {
    name: "Douglas A-20G Havoc",
    type: WEAPONS_CLASSIFICATION.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Douglas,
      },
    },
  },
  {
    name: "Boeing B-29 Superfortress",
    type: WEAPONS_CLASSIFICATION.aviation.strategicBomber,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.Boeing,
      },
    },
  },
];

const britain: IWeapon[] = [
  {
    name: "Gloster Meteor F.Mk.4",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.Gloster,
      },
    },
  },
  {
    name: "Avro 683 Lancaster",
    type: WEAPONS_CLASSIFICATION.aviation.strategicBomber,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Avro,
      },
    },
  },
];

const france: IWeapon[] = [
  {
    name: "Morane-Saulnier MS.406",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.aviation.MoraneSaulnier,
      },
    },
  },
];

const japan: IWeapon[] = [
  {
    name: "Mitsubishi A6M5 Raisen",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Mitsubishi,
      },
    },
  },
  {
    name: "Mitsubishi G4M",
    type: WEAPONS_CLASSIFICATION.aviation.torpedoBomber,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.aviation.Mitsubishi,
      },
    },
  },
];

const italy: IWeapon[] = [
  {
    name: "Macchi C.205 Veltro",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Macchi,
      },
    },
  },
];

const poland: IWeapon[] = [
  {
    name: "PZL.37-Łoś",
    type: WEAPONS_CLASSIFICATION.aviation.bomber,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        developer: Developers.aviation.PZL,
      },
    },
  },
];

const sweden: IWeapon[] = [
  {
    name: "Saab 17",
    type: WEAPONS_CLASSIFICATION.aviation.lightBomber,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Saab,
      },
    },
  },
];

const finland: IWeapon[] = [
  {
    name: "VL Myrsky II",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.VL,
      },
    },
  },
];

const romania: IWeapon[] = [
  {
    name: "IAR 80",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.aviation.IAR,
      },
    },
  },
];

const lithuania: IWeapon[] = [
  {
    name: "ANBO-41",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.aviation.ANBO,
      },
    },
  },
];

const netherlands: IWeapon[] = [
  {
    name: "Fokker G.1",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.aviation.Fokker,
      },
    },
  },
];

const yugoslavia: IWeapon[] = [
  {
    name: "Ikarus IK-2",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.aviation.Ikarus,
      },
    },
  },
];

const hungary: IWeapon[] = [
  {
    name: "Weiss WM 21 Sólyom",
    type: WEAPONS_CLASSIFICATION.aviation.scout,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.aviation.Weiss,
      },
    },
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
appendWeaponBranch(AVIATION_DATA, WEAPONS_CLASSIFICATION.aviation);
