import { CREWS } from "../departments/crews";
import { BODIES } from "../parts/bodies";
import { WeaponClassification } from "../../../constants/weapon-types";
import { Nations } from "../../../constants/nations";
import IS_2 from "../../../fragments/weapons/IS-2";
import { ARMORED_ENGINES } from "../parts/engines/armored-engines";
import { CANNONS } from "../parts/cannons";
import { appendNation, appendWeaponBranch } from "utils/weapons";
import { TOWERS } from "../parts/towers";
import { Developers } from "../departments/developers";
import { ChiefDesigners } from "../departments/chief-designers";
import { Platforms } from "../departments/platforms";
import {
  IArmoredVehicle,
  IArmoredVehiclesSpecifications,
} from "../../../interfaces/weapons/armored-interfaces";
import { Producers } from "../departments/producers";

const ussr: IArmoredVehicle[] = [
  {
    name: "ИС-3",
    isReady: false,
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    intro: [
      "ИС-3 — последний советский тяжёлый танк, принятый на вооружение и запущенный в серийное производство во время Второй Мировой войны. Его проектирование началось весной 1944 года как глубокая модернизация ИС-2, который не устраивал военных по бронезащите. В результате ИС-3 получил новый сварной корпус с характерным «щучим носом» (такое название он получил из-за формы верхней лобовой части корпуса) и бортовыми бронелистами под наклоном. На крыше башни новой конструкции были сделаны новые люки, намного более удобные для экипажа, а механик-водитель получил новый треугольный люк для лучшей обзорности вне боевой обстановки. Помимо этого, топливные баки были убраны из боевого отделения, а вместо командирской башенки установили удачные перископические приборы наблюдения.",
    ],
    galleryInfo: {
      artsCollectionSize: 5,
      postwarPhotoCollectionSize: 4,
    },
    specifications: {
      common: {
        developer: Developers.armoredVehicles.ChelyabinskExp100,
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev,
        producer: [Producers.armoredVehicles.Chelyabinsk100],
        numberOfIssued: 25,
      },
    },
  },
  {
    name: "ИС-2",
    isReady: true,
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    article: <IS_2 />,
    galleryInfo: {
      photoCollectionSize: 17,
      postwarPhotoCollectionSize: 10,
      schemesCollectionSize: 3,
      artsCollectionSize: 15,
    },
    isVideoIntro: true,
    sections: [
      "Введение",
      "Фотографии",
      "Схемы",
      "Характеристики",
      "История создания",
      "Конструкция",
      "Вооружение",
      "Применение в бою",
      "Видеоматериалы",
      "Модели",
      "Читайте также",
    ],
    intro: [
      "ИС-2 (Объект 240) — советский основной и тяжёлый танк периода Великой Отечественной войны, являлся самым мощным и наиболее тяжелобронированным из советских и союзных серийных танков периода войны, и одним из сильнейших основных танков на то время в мире. В годы Великой Отечественной войны вместе с обозначением ИС-2 на равных использовалось название ИС-122, в этом случае число 122 означает калибр пушки — основного вооружения боевой машины. Танки этого типа сыграли большую роль в боях 1944—1945 годов, особенно отличившись при штурме городов. После завершения войны ИС-2 были модернизированы и находились на вооружении Советской Армии ВС Союза ССР и впоследствии ВС России до 1993 года. Также танки ИС-2 поставлялись в ряд государств и участвовали в некоторых вооружённых конфликтах после 1945 года.",
    ],
    videomaterials: [
      "https://www.youtube.com/embed/_nypiSnpvow",
      "https://www.youtube.com/embed/_ZFXUBEb24g",
      "https://www.youtube.com/embed/Yfr26UvEtzc",
      "https://www.youtube.com/embed/sodVseKNDNI",
      "https://www.youtube.com/embed/5Zqu4XgXjac",
    ],
    models: [
      {
        title: "Сборная модель ZVEZDA ИС-2 масштаб 1:35",
        photo: "звезда-35.jpg",
        link: "https://www.ozon.ru/product/sbornaya-model-sovetskiy-tyazhelyy-tank-is-2-1148620/?asb=zTwUPzXxm7z8vG0eeAQ0h8GnbQPb%252BXy61d2hm7NiuHE%253D&asb2=lsvjT5U7Z5Sl3D5itlcgNKqT6dn_LwT4tWXdtYlCxSYh0xQQ3wEVeWXclzBcm9yy&avtc=1&avte=2&avts=1673354498&keywords=%D1%81%D0%B1%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C+%D1%82%D0%B0%D0%BD%D0%BA%D0%B0+%D0%B8%D1%81+2&sh=mpUjjT65NQ",
      },
      {
        title: "Сборная модель ZVEZDA ИС-2 масштаб 1:72",
        photo: "звезда-72.jpg",
        link: "https://www.ozon.ru/product/sbornaya-model-tanka-model-dlya-sborki-bez-kleya-zvezda-zvezda-sovetskiy-tyazhelyy-tank-is-2-332383229/?asb=zSWLFhAlT4Nxk%252BPQCfuSb4xdQu37usTrQr%252BbDmNCaks%253D&asb2=BoW1W8gWJuqDqsUdFT7KHYna_s9S9vyiZCRpuOyqsHsW35o-6U22CttXsVWkTfRR&avtc=1&avte=2&avts=1673165629&keywords=сборная+модель+ис-2&sh=x0yThzqpWA",
      },
      {
        title: "Сборная модель ZVEZDA ИС-2 масштаб 1:100",
        photo: "звезда-100.webp",
        link: "https://www.ozon.ru/product/model-tanka-zvezda-sovetskiy-tyazhelyy-tank-is-2-6201-150320570/?asb=ut4OKH%252BHG0hdFZWkMEH7vGfWCaU1x%252BpL066QTBpP%252FjY%253D&asb2=48PwcmxIrY1unURAsTH_qQWO2ZgCKfim56pASKUTD8CZ0voqbnHEVRA-f90GqAR_&avtc=1&avte=2&avts=1673165581&keywords=сборная+модель+ис-2&sh=x0yTh43SOg",
      },
    ],
    specifications: {
      common: {
        developer: Developers.armoredVehicles.ChelyabinskExp100,
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev,
        platform: Platforms.armoredVehicles.IS,
        producer: [Producers.armoredVehicles.Chelyabinsk100],
        productionPeriod: "1943 - 1945",
        exploitationPeriod: "1943 - 1945",
        numberOfIssued: 3483,
      },
      crew: CREWS.size.four.perfect,
      sizes: {
        weight: 46,
        length: 6.77,
        width: 3.07,
        height: 2.63,
        clearance: 0.42,
      },
      armoring: {
        type: "катаная высокой твёрдости, литая средней твёрдости",
        body: BODIES["ИС"],
        tower: TOWERS["ИС"],
      },
      weapon: {
        cannon: CANNONS["Д-25T"],
        ammunition: {
          cannon: 28,
          machinegun: `ДТ - 2520, ДШК - 250`,
        },
        verticalGA: "−3…+20°",
        horizontalGA: "360°",
        machinegun: `3 × 7,62-мм ДТ 
        1 × 12,7-мм ДШК`,
      },
      mobility: {
        engine: ARMORED_ENGINES["В-2ИС"],
        speed: {
          road: 37,
          roughTerrain: 15,
        },
        powerReserve: {
          road: "240",
          roughTerrain: "160",
        },
        specificPower: 11.3,
        suspensionType: "торсионная, индивидуальная",
        specificPressure: 0.8,
        surmount: {
          ascent: 36,
          wall: 1,
          moat: 2.5,
          ford: 1.3,
        },
      },
    },
  },
  {
    name: "ИС-1",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1943,
    galleryInfo: {
      artsCollectionSize: 2,
    },
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev, // ???
        platform: Platforms.armoredVehicles.IS,
        numberOfIssued: 107,
      },
    },
  },
  {
    name: "КВ-1 (ЗиС-5)",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        platform: Platforms.armoredVehicles.KV1,
        producer: [
          Producers.armoredVehicles.Leningrad185,
          Producers.armoredVehicles.Chelyabinsk100,
        ],
        numberOfIssued: 2229,
      },
    },
  },
  {
    name: "КВ-1Э",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        platform: Platforms.armoredVehicles.KV1,
      },
    },
  },
  {
    name: "КВ-1 (Ф-32)",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        developer: Developers.armoredVehicles.Leningrad185,
        platform: Platforms.armoredVehicles.KV1,
        numberOfIssued: 792,
      },
    },
  },
  {
    name: "КВ-1 (Л-11)",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        developer: Developers.armoredVehicles.Leningrad185,
        platform: Platforms.armoredVehicles.KV1,
        producer: [
          Producers.armoredVehicles.Leningrad185,
          Producers.armoredVehicles.Chelyabinsk100,
        ],
        numberOfIssued: 283,
      },
    },
  },
  {
    name: "КВ-2",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Leningrad185,
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        producer: [Producers.armoredVehicles.Leningrad185],
        numberOfIssued: 204,
      },
    },
  },

  {
    name: "КВ-1с",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Dikhow,
        developer: Developers.armoredVehicles.Chelyabinsk100,
        platform: Platforms.armoredVehicles.KV1S,
        numberOfIssued: 1086,
      },
    },
  },
  {
    name: "Т-35",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Barykov,
        numberOfIssued: 59,
        // developer: Developers.armoredVehicles.Leningrad185,
      },
    },
  },
  {
    name: "Т-28",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.KB3,
        producer: [Producers.armoredVehicles.Leningrad185],
        numberOfIssued: 503,
      },
    },
  },
  {
    name: "Т-34 обр. 1940 г.",
    shortName: "Т-34 (1940)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1940,
    galleryInfo: { photoCollectionSize: 2, postwarPhotoCollectionSize: 1 },
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Koshkin,
        developer: Developers.armoredVehicles.Kharkov183,
        platform: Platforms.armoredVehicles.T34,
        producer: [Producers.armoredVehicles.Kharkov183],
        numberOfIssued: 117,
      },
    },
  },
  {
    name: "Т-34-57",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Tagil183, // ???
        platform: Platforms.armoredVehicles.T34,
        producer: [Producers.armoredVehicles.Kharkov183], // ???
        numberOfIssued: 14,
      },
    },
  },
  {
    name: "Т-34 обр. 1941 г.",
    shortName: "Т-34 (1941)",
    isReady: true,
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    galleryInfo: { photoCollectionSize: 6, postwarPhotoCollectionSize: 3 },
    intro: [
      "Танк Т-34 является самым известным советским танком и одним из самых узнаваемых символов Второй мировой войны. Из-за постоянных перебоев с поставками пушек Л-11 было решено поставить на танк Т-34 более мощное орудие Ф-34. Новые Т-34 начали производиться с февраля 1941-го года. К осени 1941-го года крупным производителем этого танка остался только один завод - СТЗ. В связи с этим в городе Сталинград была развёрнута цепочка заводов, которые снабжали комплектующими сборочные цеха. Всего было выпущено 3014 экземпляров Т-34 образца 1941-го года.",
    ],
    sections: ["Введение"],
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Tagil183,
        platform: Platforms.armoredVehicles.T34,
        producer: [
          Producers.armoredVehicles.Kharkov183,
          Producers.armoredVehicles.Tagil183,
          Producers.armoredVehicles.Stalingrad,
          Producers.armoredVehicles.KrasnoyeSormovo112,
        ],
        numberOfIssued: 3_016,
      },
      crew: CREWS.size.four.weak,
      weapon: {
        cannon: CANNONS["Ф-34"],
      },
      mobility: {
        engine: ARMORED_ENGINES["В-2-34"],
      },
      armoring: {
        type: "стальная катаная гомогенная высокой твёрдости",
        body: BODIES["Т-34"],
        tower: TOWERS["Т-34 обр. 40/41 г."],
      },
    },
  },
  {
    name: "Т-34Э (СТЗ)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Stalingrad,
        producer: [Producers.armoredVehicles.Stalingrad],
        platform: Platforms.armoredVehicles.T34,
        numberOfIssued: 120,
      },
    },
  },
  {
    name: "Т-34Э (завод №112)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.KrasnoyeSormovo112,
        platform: Platforms.armoredVehicles.T34,
        numberOfIssued: 80,
      },
    },
  },
  {
    name: "Т-34 обр. 1942 г.",
    shortName: "Т-34 (1942)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Tagil183,
        platform: Platforms.armoredVehicles.T34,
        producer: [
          Producers.armoredVehicles.Tagil183,
          Producers.armoredVehicles.Stalingrad,
          Producers.armoredVehicles.KrasnoyeSormovo112,
          Producers.armoredVehicles.Chelyabinsk100,
          Producers.armoredVehicles.Omsk174,
          Producers.armoredVehicles.UZTM,
        ],
        numberOfIssued: 12_535,
      },
    },
  },
  {
    name: "Т-34 обр. 1943 г.",
    shortName: "Т-34 (1943)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Tagil183,
        platform: Platforms.armoredVehicles.T34,
        producer: [
          Producers.armoredVehicles.Tagil183,
          Producers.armoredVehicles.KrasnoyeSormovo112,
          Producers.armoredVehicles.Chelyabinsk100,
          Producers.armoredVehicles.Omsk174,
          Producers.armoredVehicles.UZTM,
        ],
        numberOfIssued: 19_782,
      },
    },
  },
  {
    name: "Т-34-85",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    isReady: true,
    intro: [
      "Т-34-85 — войсковое обозначение последней массовой модификации советского среднего танка Т-34 с орудием калибра 85-мм. Принят на вооружение РККА Постановлением ГКО № 5021 от 23 января 1944 года.",
      "Спроектирован на базе серийного танка Т-34 образца 1942 года. Установка 85-мм пушки и конструктивные доработки значительно повысили боевую эффективность танка Т-34-85 по сравнению с Т-34-76. Новая башня увеличенного объёма с усиленной броневой защитой конструктивно аналогична башне опытного танка Т-43. Повышена общая защищённость экипажа (5 человек), улучшены условия функционального взаимодействия членов экипажа. Показатели подвижности (быстроходность, манёвренность и проходимость) танка Т-34-85 вследствие увеличения его боевой массы снизились незначительно.",
    ],
    sections: [
      "Введение",
      "Фотографии",
      "Схемы",
      "Характеристики",
      "Читайте также",
    ],
    galleryInfo: {
      photoCollectionSize: 17,
      postwarPhotoCollectionSize: 7,
      schemesCollectionSize: 3,
      artsCollectionSize: 8,
    },
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Tagil183,
        producer: [
          Producers.armoredVehicles.Tagil183,
          Producers.armoredVehicles.Omsk174,
          Producers.armoredVehicles.KrasnoyeSormovo112,
        ],
        platform: Platforms.armoredVehicles.T34,
        numberOfIssued: 12_551,
      },
      crew: CREWS.size.five.perfect,
    },
  },
  {
    name: "Т-34-85 (Д5-Т)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T34,
        producer: [Producers.armoredVehicles.KrasnoyeSormovo112],
        numberOfIssued: 278,
      },
      crew: CREWS.size.four.weak,
    },
  },
  {
    name: "БТ-7",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1935,
    isVideoIntro: true,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Kharkov183,
        producer: [Producers.armoredVehicles.Kharkov183],
        numberOfIssued: 4800,
        platform: Platforms.armoredVehicles.BT,
      },
    },
  },
  {
    name: "БТ-5",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Kharkov183,
        producer: [Producers.armoredVehicles.Kharkov183],
        numberOfIssued: 1884,
        platform: Platforms.armoredVehicles.BT,
      },
    },
  },
  {
    name: "БТ-2",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1932,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Kharkov183,
        producer: [Producers.armoredVehicles.Kharkov183],
        numberOfIssued: 620,
        platform: Platforms.armoredVehicles.BT,
      },
    },
  },
  {
    name: "Т-70",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        numberOfIssued: 8231,
      },
    },
  },
  {
    name: "Т-26 обр. 1939 г.",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T26,
        producer: [Producers.armoredVehicles.Leningrad174], // ???
      },
    },
  },
  {
    name: "Т-26 обр. 1933 г.",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1933,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T26,
        producer: [
          Producers.armoredVehicles.Stalingrad,
          Producers.armoredVehicles.Leningrad174,
        ],
      },
    },
  },
  {
    name: "Т-26 обр. 1931 г.",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1931,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T26,
        producer: [
          Producers.armoredVehicles.Bolshevik,
          Producers.armoredVehicles.Leningrad174,
        ],
      },
    },
  },
  {
    name: "Т-38",
    type: WeaponClassification.armoredVehicle.smallTank,
    adoptedIntoServiceDate: 1936,
    specifications: {
      common: {
        numberOfIssued: 1420,
      },
    },
  },
  {
    name: "ИСУ-152",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.ChelyabinskExp100,
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev,
        platform: Platforms.armoredVehicles.IS,
        producer: [Producers.armoredVehicles.Chelyabinsk100],
        numberOfIssued: 670,
      },
    },
  },
  {
    name: "ИСУ-122",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev,
        developer: Developers.armoredVehicles.ChelyabinskExp100,
        producer: [Producers.armoredVehicles.Chelyabinsk100],
        platform: Platforms.armoredVehicles.IS,
        numberOfIssued: 1375,
      },
    },
  },
  {
    name: "ИСУ-122С",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.Ermolaev,
        developer: Developers.armoredVehicles.ChelyabinskExp100,
        producer: [Producers.armoredVehicles.Chelyabinsk100],
        platform: Platforms.armoredVehicles.IS,
        numberOfIssued: 675,
      },
    },
  },
  {
    name: "СУ-152",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Chelyabinsk100,
        chiefDesigner: ChiefDesigners.armoredVehicles.Kotin,
        platform: Platforms.armoredVehicles.KV1S,
        numberOfIssued: 670,
      },
    },
  },
  {
    name: "СУ-100",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.UZTM,
        platform: Platforms.armoredVehicles.T34,
        producer: [
          Producers.armoredVehicles.UZTM,
          Producers.armoredVehicles.Omsk174,
        ],
        numberOfIssued: 4661,
      },
    },
  },
  {
    name: "СУ-85",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T34,
        producer: [Producers.armoredVehicles.UZTM],
        numberOfIssued: 2650,
      },
      crew: CREWS.size.five.perfect,
      mobility: {
        engine: ARMORED_ENGINES["В-2-34"],
      },
      armoring: {
        type: "стальная катаная гомогенная высокой твёрдости",
        body: BODIES["СУ-85"],
      },
    },
  },
  {
    name: "СУ-76",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Kirov38,
        chiefDesigner: ChiefDesigners.armoredVehicles.Ginzburg,
        numberOfIssued: 14292,
      },
    },
  },
  {
    name: "СУ-122",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.T34,
        producer: [Producers.armoredVehicles.UZTM],
        numberOfIssued: 640,
      },
    },
  },
  {
    name: "БА-10",
    type: WeaponClassification.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1938,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Izhorsky,
        producer: [Producers.armoredVehicles.Izhorsky],
        numberOfIssued: 3386,
        productionPeriod: "1938 — 1941",
      },
    },
  },
  {
    name: "Т-27",
    type: WeaponClassification.armoredVehicle.tankette,
    adoptedIntoServiceDate: 1931,
    specifications: {
      common: {
        numberOfIssued: 3155,
      },
    },
  },
];

const germany: IArmoredVehicle[] = [
  {
    name: "Pz.Kpfw. VI Ausf.B Königstiger",
    shortName: "Königstiger",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    galleryInfo: {
      artsCollectionSize: 21,
    },
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.ErwinAders,
        developer: Developers.armoredVehicles.Henschel,
        platform: Platforms.armoredVehicles.PzKpfw6B,
        producer: [Producers.armoredVehicles.Henschel],
        numberOfIssued: 492,
      },
    },
  },
  {
    name: "Pz.Kpfw. VI Tiger",
    shortName: "Tiger",
    isReady: true,
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,

    intro: [
      "Panzerkampfwagen VI Ausf. H1, или «Тигр» – это первый немецкий тяжелый танк времен Второй мировой войны. Один из самых знаменитых танков Германии.",
    ],
    sections: ["Введение", "Характеристики", "Модели"],
    galleryInfo: {
      artsCollectionSize: 8,
    },
    models: [
      {
        title: `Сборная модель ZVEZDA T-VI "Тигр" масштаб 1:35`,
        photo: "звезда-35.jpg",
        link: "https://www.ozon.ru/product/sbornaya-model-zvezda-nemetskiy-tyazhelyy-tank-t-vi-tigr-nabor-dlya-sborki-masshtab-1-35-zvezda-184454993/?advert=TM52BKx1ddYRyHAJl1EgJrUPPFsKv3mrkx85qpwqtG2kMqbJlYR_E-YiylpGo1HDXUTH-2dxHFgdrvqNgtN-SgwJUCHEo_f9Q4kem64ScJs0p9gFD8vyIahOt0W3-sNSVIyCewSON7O7_goHZJvW7O05MBa70mw2OZQZeHDcxTIXYlPjFf1LVQ9edbYWvvj4hQlVVTQDlZHpp8Cy1razFiOSH9uuelprAex98EYMwOTr3bX40r1zQwaYDOFed1Zi3DqjzEvSCeYKOdFZMF0D52n3bP-ujEqe1_WdXNHl7OXKFTD7N4ryEd9NCrtCqVqR0ql23uPiHZ418jegtjiIQr5k516mozHe5cyuHKG7XR1iokGJGLCihq7idxPlT3KplcsGGh5PlHn5xumSk7K48TryZ8o9jU8ggXG2xhuLkSQIIitNwpYPmI8UKFiazs3WHdV5t-OSrwXZlnd5s62rOgS_-rNcTSUmy5o5rEG0W7ZfvlSplc-GXC4NTN9-yo9GpP92Q6HGj8XF9MHxQbl91s2MSsogt5iQyDzqIPmPBYElSUJK_-EcsxofVVOOO48KdK8c8K0r45eEDZulOi8rxJJcXYDBCYbcToNEIuoqLulpylYLd4JXvgBv9PGA4I3DQSk7aWRqj__J6xDBObFAYbuA1Q04_XrdkeD0EAg_bA6Dp978N1hOZfihEUmDYFnBk0JxJfQKyMX9O3a9uVgYNUKHdUAn3oun2llbRz2Zb_1teOJC0w4N2Zqh4LlDnK_kINRvul4w-CHVcY1CqrHbRg&avtc=1&avte=4&avts=1673200289&keywords=модель+танка+тигр&sh=x0yTh63A0w",
      },
      {
        title: `Сборная модель ZVEZDA T-VI "Тигр" масштаб 1:100`,
        photo: "звезда-100.webp",
        link: "https://www.ozon.ru/product/model-tanka-zvezda-nemetskiy-tyazhelyy-tank-tigr-6256-150320489/?asb=ELDnVM6SG0uy%252B646u175mxF3Btzwzd%252FeDneVrVuh%252B3M%253D&asb2=mHErVDuVq0kGXzYtVszhhr6wUJRGRW_q4_PZ1tbTflTrXAodClPN4p04TcjHgCCF&avtc=1&avte=2&avts=1673244194&keywords=модель+танка+тигр+zvezda&sh=x0yThw-vQg",
      },
      {
        title: `Сборная модель ZVEZDA Великие противостояния ИC-2 против Тигра масштаб 1:72`,
        photo: "звезда-72.jpg",
        link: "https://www.ozon.ru/product/sbornaya-model-tanka-model-dlya-sborki-bez-kleya-zvezda-zvezda-velikie-protivostoyaniya-is-2-352958896/?asb=lMIZswAcPzfCU9TOPIUThGiYnox8u08KrKpgpRNXqXk%253D&asb2=rNC6rLT3JEkl1vF3KIcnwi8KCrqP5-f_ncw9Q7eZCNlrhJpFLH-eedIiiMdFwZjR&avtc=1&avte=2&avts=1673243988&keywords=модель+танка+тигр+zvezda&sh=x0yTh96ZjQ",
      },
    ],
    specifications: {
      common: {
        chiefDesigner: ChiefDesigners.armoredVehicles.ErwinAders,
        developer: Developers.armoredVehicles.Henschel,
        producer: [Producers.armoredVehicles.Henschel],
        numberOfIssued: 1347,
      },
      crew: CREWS.size.five.perfect,
      weapon: {
        cannon: CANNONS["8,8 cm KwK 36"],
      },
      mobility: {
        engine: ARMORED_ENGINES["Maybach HL 230"],
      },
    },
  },
  {
    name: "Pz.Kpfw. V Ausf.G Panther",
    shortName: "Panther G",
    isReady: true,
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    intro: [
      `Pz.Kpfw. V Ausf. G Panther (Полное название: Panzerkampfwagen Panther (7,5 cm KwK L/70) Ausführung G) — последняя и самая массовая серийная модификация среднего немецкого танка Panther. Танк обладал отличной лобовой бронёй, которую могли пробить лишь длинноствольные орудия калибром от 88-мм и выше, при этом броня бортов и кормы оставляла желать лучшего и поражалась даже мелкокалиберными орудиями. Машина отличалась высокой подвижностью, а проходимость «Пантеры» была просто образцовой, из-за чего, некоторые эксперты называют «Пантеру» лучшим средним танком Второй Мировой войны. На вооружении танка стояло 75-мм орудие KwK42, которое могло эффективно бороться практически со всеми танками союзников и СССР и 7,92-мм пулемёт MG34 спаренный с орудием. Несмотря на ряд преимуществ, машина имела значительные недостатки, из-за которых, значительная часть танков была брошена экипажем на поле боя и попала в руки противников или была выведена из строя собственным экипажем. К недостаткам «Пантеры» можно отнести: высокий силуэт, большой вес (как для среднего танка), низкую надёжность ходовой части, высокую стоимость и сложность в производстве и обслуживании (большинство поломок нельзя было починить в полевых условиях и необходимо было отправлять танк в тыловые мастерские со специальным оборудованием).`,
    ],
    specifications: {
      common: {
        developer: Developers.armoredVehicles.MAN,
        producer: [
          Producers.armoredVehicles.MAN,
          Producers.armoredVehicles.DaimlerBenz,
          Producers.armoredVehicles.Henschel,
          Producers.armoredVehicles.MNH,
        ],
        numberOfIssued: 2961,
        chiefDesigner: ChiefDesigners.armoredVehicles.Wibke,
        platform: Platforms.armoredVehicles.PzKpfw5,
      },
      crew: {
        size: 5,
        structure:
          "механик-водитель, стрелок-радист, заряжающий, наводчик, командир",
      },
      weapon: {
        cannon: CANNONS["7,5 cm KwK 42"],
      },
      mobility: {
        engine: ARMORED_ENGINES["Maybach HL 230"],
      },
    },
  },
  {
    name: "Pz.Kpfw. IV Ausf.J",
    shortName: "Pz. IV J",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Krupp,
        platform: Platforms.armoredVehicles.PzKpfw4,
        numberOfIssued: 3160,
      },
    },
  },
  {
    name: "Pz.Kpfw. IV Ausf.H",
    shortName: "Pz. IV H",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Krupp,
        platform: Platforms.armoredVehicles.PzKpfw4,
        numberOfIssued: 2324, /// ?
      },
    },
  },
  {
    name: "Pz.Kpfw. IV Ausf.G",
    shortName: "Pz. IV G",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Krupp,
        platform: Platforms.armoredVehicles.PzKpfw4,
        numberOfIssued: 1687, /// ? F2 - 1927 - 1687
      },
    },
  },
  {
    name: "Pz.Kpfw. IV Ausf.F2",
    shortName: "Pz. IV F2",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Krupp,
        platform: Platforms.armoredVehicles.PzKpfw4,
        numberOfIssued: 166,
      },
    },
  },
  {
    name: "Pz.Kpfw. III Ausf.M",
    shortName: "Pz. III M",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.DaimlerBenz,
        platform: Platforms.armoredVehicles.PzKpfw3,
        numberOfIssued: 517,
      },
    },
  },
  {
    name: "Pz.Kpfw. III Ausf.L",
    shortName: "Pz. III L",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.DaimlerBenz,
        platform: Platforms.armoredVehicles.PzKpfw3,
        numberOfIssued: 1470,
      },
    },
  },
  {
    name: "Pz.Kpfw. III Ausf.J",
    shortName: "Pz. III J",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.DaimlerBenz,
        platform: Platforms.armoredVehicles.PzKpfw3,
        numberOfIssued: 1521,
      },
    },
  },
  {
    name: "Pz.Kpfw. II",
    shortName: "Pz. II",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1935,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Krupp,
        numberOfIssued: 2050,
      },
    },
  },
  {
    name: "Jagdtiger",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw6B,
        numberOfIssued: 81,
      },
    },
  },
  {
    name: "Jagdpanther",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.DaimlerBenz,
        platform: Platforms.armoredVehicles.PzKpfw5,
        numberOfIssued: 413,
      },
    },
  },
  {
    name: "Ferdinand",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Porsche,
        chiefDesigner: ChiefDesigners.armoredVehicles.FerdinandPorsche,
        numberOfIssued: 91,
      },
    },
  },
  {
    name: "Nashorn",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 494,
      },
    },
  },
  {
    name: "Jagdpanzer 38(t) Hetzer",
    shortName: "Hetzer",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.CKD,
        numberOfIssued: 2612,
      },
    },
  },
  {
    name: "StuG III Ausf.G",
    shortName: "StuG III G",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw3,
        producer: [
          Producers.armoredVehicles.Alkett,
          Producers.armoredVehicles.Miag,
        ],
        numberOfIssued: 7800,
      },
    },
  },
  {
    name: "StuG III Ausf.F",
    shortName: "StuG III F",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw3,
        producer: [Producers.armoredVehicles.Alkett],
        numberOfIssued: 360,
      },
    },
  },
  {
    name: "StuH 42",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw3,
        producer: [Producers.armoredVehicles.Alkett],
        numberOfIssued: 1311,
      },
    },
  },
  {
    name: "StuG III Ausf.B",
    shortName: "StuG III B",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw3,
        producer: [Producers.armoredVehicles.Alkett],
        numberOfIssued: 300,
      },
    },
  },
  {
    name: "Hummel",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 705,
      },
    },
  },
  {
    name: "Flakpanzer IV «Wirbelwind»",
    shortName: "Wirbelwind",
    type: WeaponClassification.armoredVehicle.zsu,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.PzKpfw4,
        numberOfIssued: 100,
      },
    },
  },
  {
    name: "Sd.Kfz. 250/1 Alte",
    type: WeaponClassification.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Demag,
        platform: Platforms.armoredVehicles.SdKfz250,
      },
    },
  },
  {
    name: "Sd.Kfz. 250/3 Alte",
    type: WeaponClassification.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Demag,
        platform: Platforms.armoredVehicles.SdKfz250,
      },
    },
  },
  {
    name: "Sd.Kfz. 251/1",
    type: WeaponClassification.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Hanomag,
        platform: Platforms.armoredVehicles.SdKfz251,
      },
    },
  },
  {
    name: "Sd.Kfz. 251/16",
    type: WeaponClassification.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Hanomag,
        platform: Platforms.armoredVehicles.SdKfz251,
        numberOfIssued: 360,
      },
    },
  },
  {
    name: "Sd.Kfz. 251/22",
    type: WeaponClassification.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Hanomag,
        platform: Platforms.armoredVehicles.SdKfz251,
        numberOfIssued: 268,
      },
    },
  },
];

const usa: IArmoredVehicle[] = [
  {
    name: "M26 Pershing",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        numberOfIssued: 2239,
      },
    },
  },
  {
    name: "M4A3E2 76(W) Jumbo",
    shortName: "Jumbo 76mm",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
      },
    },
  },
  {
    name: "M4A3E2 Jumbo",
    shortName: "Jumbo 75mm",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        producer: [Producers.armoredVehicles.Fisher],
        productionPeriod: "1944",
        numberOfIssued: 244,
      },
    },
  },
  {
    name: "M4A3 76(W) Sherman",
    shortName: "M4A3 76(W)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        numberOfIssued: 1925,
      },
    },
  },
  {
    name: "M4A2 76(W) Sherman",
    shortName: "M4A2 76(W)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        producer: [
          Producers.armoredVehicles.PullmanStandard,
          Producers.armoredVehicles.Fisher,
        ],
        productionPeriod: "1944 - 1945",
        numberOfIssued: 2915,
      },
    },
  },
  {
    name: "M4A1 76(W) Sherman",
    shortName: "M4A1 76(W)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        producer: [Producers.armoredVehicles.PullmanStandard],
        platform: Platforms.armoredVehicles.Sherman,
        productionPeriod: "1944 - 1945",
        numberOfIssued: 3426,
      },
    },
  },
  {
    name: "M4A3(105) Sherman",
    shortName: "M4A3(105)",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        producer: [Producers.armoredVehicles.DetroitTankArsenal],
        platform: Platforms.armoredVehicles.Sherman,
        productionPeriod: "1944 - 1945",
        numberOfIssued: 3039,
      },
    },
  },
  {
    name: "M4A2 Sherman",
    shortName: "M4A2",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        numberOfIssued: 8053,
        productionPeriod: "1942 - 1944",
      },
    },
  },
  {
    name: "M4 Sherman",
    shortName: "M4",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        numberOfIssued: 6748,
        productionPeriod: "1942 - 1944",
      },
    },
  },
  {
    name: "M4A1 Sherman",
    shortName: "M4A1",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
        platform: Platforms.armoredVehicles.Sherman,
        numberOfIssued: 6281,
        productionPeriod: "1942 - 1943",
      },
    },
  },
  {
    name: "M3 Lee",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.AberdeenPG,
        producer: [
          Producers.armoredVehicles.Chrysler,
          Producers.armoredVehicles.ALCO,
          Producers.armoredVehicles.BLW,
        ],
        numberOfIssued: 6258,
      },
    },
  },
  {
    name: "M24 Chaffee",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Cadillac,
        producer: [
          Producers.armoredVehicles.Cadillac,
          Producers.armoredVehicles.MasseyHarris,
        ],
        numberOfIssued: 4731,
      },
    },
  },
  {
    name: "M5A1 Stuart",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
      },
    },
  },
  {
    name: "M3 Stuart",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.USArmyOrdnanceDepartment,
      },
    },
  },
  {
    name: "GMC M36 Jackson",
    shortName: "M36 Jackson",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.GMC,
        producer: [
          Producers.armoredVehicles.Fisher,
          Producers.armoredVehicles.MasseyHarris,
          Producers.armoredVehicles.ALCO,
          Producers.armoredVehicles.MontrealLW,
        ],
        numberOfIssued: 2324,
      },
    },
  },
  {
    name: "GMC M18 Hellcat",
    shortName: "M18 Hellcat",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.GMC,
        producer: [Producers.armoredVehicles.Buick],
        numberOfIssued: 2507,
      },
    },
  },
  {
    name: "GMC M10 Wolverine",
    shortName: "M10 Wolverine",
    type: WeaponClassification.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.GMC,
        producer: [
          Producers.armoredVehicles.Fisher,
          Producers.armoredVehicles.Ford,
        ],
        numberOfIssued: 6706,
      },
    },
  },
  {
    name: "GMC M40",
    shortName: "M40",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1945,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.GMC,
        numberOfIssued: 418,
      },
    },
  },
];

const britain: IArmoredVehicle[] = [
  {
    name: "Churchill III",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        numberOfIssued: 675,
      },
    },
  },
  {
    name: "Churchill II",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941, /// ?
    specifications: {
      common: {
        numberOfIssued: 1120,
      },
    },
  },
  {
    name: "Churchill I",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        numberOfIssued: 303,
      },
    },
  },
  {
    name: "Matilda Mk III",
    type: WeaponClassification.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {},
    },
  },
  {
    name: "Sherman Firefly",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      common: {
        platform: Platforms.armoredVehicles.Sherman,
        numberOfIssued: 699,
      },
    },
  },
  {
    name: "Valentine Mk XI",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "Valentine Mk X",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: { common: {} },
  },
  {
    name: "Valentine Mk I",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1939,
    specifications: { common: {} },
  },
  {
    name: "Crusader Mk III",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Nuffield,
        producer: [Producers.armoredVehicles.Nuffield],
      },
    },
  },
  {
    name: "Crusader Mk II",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Nuffield,
        producer: [Producers.armoredVehicles.Nuffield],
      },
    },
  },
  {
    name: "Tetrach I",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1940,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.Vickers,
        producer: [Producers.armoredVehicles.MetroCammell],
        numberOfIssued: 100,
      },
    },
  },
  {
    name: "Dimler Mk II",
    type: WeaponClassification.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1941,
    specifications: { common: {} },
  },
];

const france: IArmoredVehicle[] = [
  {
    name: "Somua S35",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1935,
    specifications: {
      common: {
        numberOfIssued: 425,
      },
    },
  },
];

const italy: IArmoredVehicle[] = [
  {
    name: "Lancia IZ/IZM",
    type: WeaponClassification.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1916,
    specifications: {
      common: {
        numberOfIssued: 130,
      },
    },
  },
];

const czechoslovakia: IArmoredVehicle[] = [
  {
    name: "LT vz.38",
    type: WeaponClassification.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1939,
    specifications: {
      common: {
        developer: Developers.armoredVehicles.CKD,
      },
    },
  },
];

const finland: IArmoredVehicle[] = [
  {
    name: "BT-42",
    type: WeaponClassification.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    specifications: {
      common: {
        numberOfIssued: 18,
        platform: Platforms.armoredVehicles.BT,
      },
    },
  },
];

const japan: IArmoredVehicle[] = [
  {
    name: "Chi-Nu",
    type: WeaponClassification.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    specifications: {
      common: {
        numberOfIssued: 166,
      },
    },
  },
];

appendNation(ussr, Nations.USSR);
appendNation(germany, Nations.Germany);
appendNation(usa, Nations.USA);
appendNation(britain, Nations.GreatBritain);
appendNation(france, Nations.France);
appendNation(italy, Nations.Italy);
appendNation(czechoslovakia, Nations.Czechoslovakia);
appendNation(finland, Nations.Finland);
appendNation(japan, Nations.Japan);

export const ARMORED_VEHICLES = [
  ...ussr,
  ...germany,
  ...usa,
  ...britain,
  ...japan,
  ...france,
  ...italy,
  ...czechoslovakia,
  ...finland,
];
appendWeaponBranch(ARMORED_VEHICLES, WeaponClassification.armoredVehicle);
