import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WEAPONS_CLASSIFICATION } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import Yak_3 from "../../../fragments/weapons/Yak-3";
import { Developers } from "../departments/developers";
import { ChiefDesigners } from "../departments/chief-designers";
import { Platforms } from "../departments/platforms";
import { AVIATION_ENGINES } from "../parts/engines/aviation-engines";
import { IAircraft } from "../interfaces/aviation-interfaces";
import { Producers } from "../departments/producers";

const ussr: IAircraft[] = [
  {
    name: "Ла-5ФН",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.LA,
        chiefDesigner: ChiefDesigners.aviation.Lavochkin,
        platform: Platforms.aviation.La5,
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
        chiefDesigner: ChiefDesigners.aviation.Lavochkin,
        platform: Platforms.aviation.La5,
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
        chiefDesigner: ChiefDesigners.aviation.Lavochkin,
        platform: Platforms.aviation.La5,
        producer: [
          Producers.aviation.Gorkiy21,
          Producers.aviation.Tbilisi31,
          Producers.aviation.UlanUde99,
          Producers.aviation.Moskva381,
        ], // ???
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
        chiefDesigner: ChiefDesigners.aviation.Yakovlev,
        producer: [
          Producers.aviation.Novosibirsk153,
          Producers.aviation.Omsk166,
          Producers.aviation.Moskva82,
        ], // ???
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
      "Популярность Як-3 оказалась столь велика, что в начале 90-х годов КБ Яковлева выпустило партию реплик знаменитого истребителя. Реплика, получившая обозначение Як-3М, имеет полностью металлическую конструкцию и силовой агрегат Allison 2L. Машины предназначались для коллекционеров.",
    ],
    videomaterials: [
      "https://www.youtube.com/embed/SQOWKR4m8RE",
      "https://www.youtube.com/embed/njTtuh6fYng",
    ],
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
        chiefDesigner: ChiefDesigners.aviation.Yakovlev,
        producer: [Producers.aviation.Tbilisi31, Producers.aviation.Saratov292],
      },
      sizes: {
        emptyWeight: 2105,
        curbWeight: 2650,
        length: 8.49,
        height: 2.38,
        wingSpan: 9.2,
        wingArea: 14.83,
      },
      crew: {
        size: 1,
        structure: "пилот",
      },
      flightCharacteristics: {
        technicalRange: 885,
        practicalRange: 648,
        maximumSpeed: 645,
        climbRate: 18.5,
      },
      powerUnits: {
        enginesNumber: 1,
        engine: AVIATION_ENGINES["ВК-105ПФ2"],
      },
      weapons: {
        weaponsSet: "1 × 20-мм пушка ШВАК, 2 × 12,7-мм пулемёта УБС",
        ammunition: "20-мм - 120 выстрелов, 12,7-мм - 300 выстрелов",
        secondSalvoWeight: 2.81,
        bombWeapons: "отсутсвует",
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
        chiefDesigner: ChiefDesigners.aviation.Yakovlev,
        producer: [Producers.aviation.Saratov292, Producers.aviation.Khimki301],
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
        chiefDesigner: ChiefDesigners.aviation.Yakovlev,
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
        chiefDesigner: ChiefDesigners.aviation.Ilyushin,
        producer: [
          Producers.aviation.Kuibyshev1,
          Producers.aviation.Kuibyshev18,
          Producers.aviation.Voronezh64,
        ],
        numberOfIssued: 4390,
      },
    },
  },
  {
    name: "Ту-2С",
    type: WEAPONS_CLASSIFICATION.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.TU,
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
        chiefDesigner: ChiefDesigners.aviation.Ilyushin,
        producer: [
          Producers.aviation.Voronezh18,
          Producers.aviation.Komsomolsk126,
          Producers.aviation.Moskva23,
          Producers.aviation.Moskva39,
          Producers.aviation.Irkutsk39,
        ],
      },
    },
  },
];

const germany: IAircraft[] = [
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
        producer: [Producers.aviation.Messerschmitt],
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
        platform: Platforms.aviation.Ju87,
      },
    },
  },
  {
    name: "Junkers Ju-87 D-3 Stuka",
    type: WEAPONS_CLASSIFICATION.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Junkers,
        platform: Platforms.aviation.Ju87,
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

const usa: IAircraft[] = [
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
        producer: [
          Producers.aviation.BoeingSeattle,
          Producers.aviation.BoeingWichita,
          Producers.aviation.BellAtlanta,
          Producers.aviation.MartinOmaha,
        ],
      },
    },
  },
  {
    name: "Douglas C-47 Skytrain",
    type: WEAPONS_CLASSIFICATION.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Douglas,
      },
    },
  },
];

const britain: IAircraft[] = [
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

const france: IAircraft[] = [
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

const japan: IAircraft[] = [
  {
    name: "Mitsubishi A6M5 Raisen",
    type: WEAPONS_CLASSIFICATION.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Mitsubishi,
        chiefDesigner: ChiefDesigners.aviation.Horikoshi,
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

const italy: IAircraft[] = [
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

const poland: IAircraft[] = [
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

const sweden: IAircraft[] = [
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

const finland: IAircraft[] = [
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

const romania: IAircraft[] = [
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

const lithuania: IAircraft[] = [
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

const netherlands: IAircraft[] = [
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

const yugoslavia: IAircraft[] = [
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

const hungary: IAircraft[] = [
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
appendNation(germany, NATIONS.Germany);
appendNation(usa, NATIONS.USA);
appendNation(britain, NATIONS.GreatBritain);
appendNation(france, NATIONS.France);
appendNation(finland, NATIONS.Finland);
appendNation(poland, NATIONS.Poland);
appendNation(sweden, NATIONS.Sweden);
appendNation(romania, NATIONS.Romania);
appendNation(japan, NATIONS.Japan);
appendNation(lithuania, NATIONS.lithuania);
appendNation(netherlands, NATIONS.Netherlands);
appendNation(yugoslavia, NATIONS.Yugoslavia);
appendNation(hungary, NATIONS.Hungary);
appendNation(italy, NATIONS.Italy);

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
