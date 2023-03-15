import { appendNation, appendWeaponBranch } from "utils/weapons";
import { WeaponClassification } from "../../../constants/weapon-types";
import { Nations } from "../../../constants/nations";
import Yak_3 from "../../../fragments/weapons/Yak-3";
import { Developers } from "../departments/developers";
import { ChiefDesigners } from "../departments/chief-designers";
import { Platforms } from "../departments/platforms";
import { AVIATION_ENGINES } from "../parts/engines/aviation-engines";
import { IAircraft } from "../../../interfaces/weapons/aviation-interfaces";
import { Producers } from "../departments/producers";

const ussr: IAircraft[] = [
  {
    name: "Ла-5ФН",
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    galleryInfo: {
      photoCollectionSize: 5,
      postwarPhotoCollectionSize: 7,
      schemesCollectionSize: 3,
      artsCollectionSize: 9,
    },
    article: <Yak_3 />,
    sections: [
      "Введение",
      "Фотографии",
      "Характеристики",
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.training,
    adoptedIntoServiceDate: 1936,
    specifications: {
      common: {
        developer: Developers.aviation.Yak,
        chiefDesigner: ChiefDesigners.aviation.Yakovlev,
        numberOfIssued: 7243,
      },
    },
  },
  {
    name: "Ил-10",
    type: WeaponClassification.aviation.attackАircraft,
    adoptedIntoServiceDate: 1945,
    galleryInfo: {
      artsCollectionSize: 5,
    },
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
    type: WeaponClassification.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.TU,
      },
    },
  },
  {
    name: "Ил-4",
    type: WeaponClassification.aviation.strategicBomber,
    adoptedIntoServiceDate: 1940,
    galleryInfo: {
      artsCollectionSize: 14,
    },
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
        numberOfIssued: 5359,
      },
    },
  },
];

const germany: IAircraft[] = [
  {
    name: "Heinkel He 162 Volksjäger",
    shortName: "He 162",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.aviation.Heinkel,
        numberOfIssued: 320,
      },
    },
  },
  {
    name: "Messerschmitt Me.262 «Schwalbe»",
    shortName: "Me.262",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    galleryInfo: {
      artsCollectionSize: 21,
      postwarPhotoCollectionSize: 8,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Messerschmitt,
        producer: [Producers.aviation.Messerschmitt],
        numberOfIssued: 1433,
      },
    },
  },
  {
    name: "Heinkel He 111",
    type: WeaponClassification.aviation.frontlineBomber,
    adoptedIntoServiceDate: 1935,
    galleryInfo: {
      artsCollectionSize: 18,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Heinkel,
      },
    },
  },
  {
    name: "Focke-Wulf Ta 152",
    shortName: "Ta 152",
    type: WeaponClassification.aviation.interceptor,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.FockeWulf,
        numberOfIssued: 43,
      },
    },
  },
  {
    name: "Junkers Ju 87 G-1 Stuka",
    type: WeaponClassification.aviation.attackАircraft,
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
    type: WeaponClassification.aviation.attackАircraft,
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
    shortName: "Ju 290",
    type: WeaponClassification.aviation.scout,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Junkers,
        numberOfIssued: 52,
      },
    },
  },
  {
    name: "Messerschmitt Me.323 Gigant",
    shortName: "Me.323",
    type: WeaponClassification.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.aviation.Messerschmitt,
        numberOfIssued: 198,
      },
    },
  },
  {
    name: "Focke-Wulf Fw 200 Condor",
    shortName: "Fw 200",
    type: WeaponClassification.aviation.multipurpose,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.aviation.FockeWulf,
        numberOfIssued: 262,
      },
    },
  },
];

const usa: IAircraft[] = [
  {
    name: "Grumman F8F Bearcat",
    shortName: "F8F",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1945,
    galleryInfo: {
      postwarPhotoCollectionSize: 6,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Grumman,
        numberOfIssued: 1014,
      },
    },
  },
  {
    name: "North American P-51-D Mustang",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    galleryInfo: {
      artsCollectionSize: 11,
      postwarPhotoCollectionSize: 6,
    },
    specifications: {
      common: {
        developer: Developers.aviation.NorthAmerican,
      },
    },
  },
  {
    name: "Douglas A-20G Boston",
    shortName: "A-20G Boston",
    type: WeaponClassification.aviation.attackАircraft,
    adoptedIntoServiceDate: 1943,
    galleryInfo: {
      postwarPhotoCollectionSize: 4,
      artsCollectionSize: 10,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Douglas,
        numberOfIssued: 2850,
      },
    },
  },
  {
    name: "Boeing B-29 Superfortress",
    shortName: "B-29",
    type: WeaponClassification.aviation.strategicBomber,
    adoptedIntoServiceDate: 1944,
    galleryInfo: {
      artsCollectionSize: 14,
      postwarPhotoCollectionSize: 6,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Boeing,
        producer: [
          Producers.aviation.BoeingSeattle,
          Producers.aviation.BoeingWichita,
          Producers.aviation.BellAtlanta,
          Producers.aviation.MartinOmaha,
        ],
        numberOfIssued: 3970,
      },
    },
  },
  {
    name: "Douglas C-47 Skytrain",
    shortName: "C-47",
    type: WeaponClassification.aviation.militaryTransport,
    adoptedIntoServiceDate: 1942,
    galleryInfo: {
      artsCollectionSize: 8,
      postwarPhotoCollectionSize: 14,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Douglas,
        numberOfIssued: 10174,
      },
    },
  },
];

const britain: IAircraft[] = [
  {
    name: "Gloster Meteor F.Mk.4",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.aviation.Gloster,
      },
    },
  },
  {
    name: "Avro 683 Lancaster",
    shortName: "Lancaster",
    type: WeaponClassification.aviation.strategicBomber,
    adoptedIntoServiceDate: 1942,
    galleryInfo: {
      postwarPhotoCollectionSize: 15,
    },
    specifications: {
      common: {
        developer: Developers.aviation.Avro,
        numberOfIssued: 7377,
      },
    },
  },
];

const france: IAircraft[] = [
  {
    name: "Morane-Saulnier MS.406",
    shortName: "MS.406",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.aviation.MoraneSaulnier,
        numberOfIssued: 1074,
      },
    },
  },
];

const japan: IAircraft[] = [
  {
    name: "Mitsubishi A6M5 Raisen",
    type: WeaponClassification.aviation.fighter,
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
    shortName: "G4M",
    type: WeaponClassification.aviation.torpedoBomber,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.aviation.Mitsubishi,
        numberOfIssued: 2435,
      },
    },
  },
];

const italy: IAircraft[] = [
  {
    name: "Macchi C.205 Veltro",
    shortName: "C.205",
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.aviation.Macchi,
        numberOfIssued: 302,
      },
    },
  },
];

const poland: IAircraft[] = [
  {
    name: "PZL.37-Łoś",
    shortName: "PZL.37",
    type: WeaponClassification.aviation.bomber,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        developer: Developers.aviation.PZL,
        numberOfIssued: 120,
      },
    },
  },
];

const sweden: IAircraft[] = [
  {
    name: "Saab 17",
    type: WeaponClassification.aviation.lightBomber,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.fighter,
    adoptedIntoServiceDate: 1937,
    specifications: {
      common: {
        developer: Developers.aviation.Fokker,
        numberOfIssued: 63,
      },
    },
  },
];

const yugoslavia: IAircraft[] = [
  {
    name: "Ikarus IK-2",
    type: WeaponClassification.aviation.fighter,
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
    type: WeaponClassification.aviation.scout,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.aviation.Weiss,
      },
    },
  },
];

appendNation(ussr, Nations.USSR);
appendNation(germany, Nations.Germany);
appendNation(usa, Nations.USA);
appendNation(britain, Nations.GreatBritain);
appendNation(france, Nations.France);
appendNation(finland, Nations.Finland);
appendNation(poland, Nations.Poland);
appendNation(sweden, Nations.Sweden);
appendNation(romania, Nations.Romania);
appendNation(japan, Nations.Japan);
appendNation(lithuania, Nations.lithuania);
appendNation(netherlands, Nations.Netherlands);
appendNation(yugoslavia, Nations.Yugoslavia);
appendNation(hungary, Nations.Hungary);
appendNation(italy, Nations.Italy);

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
appendWeaponBranch(AVIATION_DATA, WeaponClassification.aviation);
