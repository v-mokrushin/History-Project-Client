import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapons";
import { NATIONS } from "../../../constants/nations";
import IS_2 from "../../../fragments/weapons/IS-2";
import { ENGINES } from "../parts/engines";
import { CANNONS } from "./../parts/cannons";
import { appendNation, appendWeaponBranch } from "utils/common";

const ussr: IWeapon[] = [
  {
    name: "ИС-3",
    isReady: false,
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    intro: [
      "ИС-3 — последний советский тяжёлый танк, принятый на вооружение и запущенный в серийное производство во время Второй Мировой войны. Его проектирование началось весной 1944 года как глубокая модернизация ИС-2, который не устраивал военных по бронезащите. В результате ИС-3 получил новый сварной корпус с характерным «щучим носом» (такое название он получил из-за формы верхней лобовой части корпуса) и бортовыми бронелистами под наклоном. На крыше башни новой конструкции были сделаны новые люки, намного более удобные для экипажа, а механик-водитель получил новый треугольный люк для лучшей обзорности вне боевой обстановки. Помимо этого, топливные баки были убраны из боевого отделения, а вместо командирской башенки установили удачные перископические приборы наблюдения.",
    ],
  },
  {
    name: "КВ-1",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "КВ-2",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "КВ-1Э",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "КВ-1С",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Т-35",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1933,
  },
  {
    name: "ИС-1",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "ИС-2",
    isReady: true,
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    JSXComponent: IS_2(),
    sections: [
      "Введение",
      "Характеристики",
      "История создания",
      "Конструкция",
      "Вооружение",
      "Применение в бою",
      "Видеоматериалы",
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
    specifications: {
      common: {
        developer: "ЧКЗ",
        manufacturer: "ЧКЗ",
        chiefDesigner: "Ж.Я. Котин",
        developmentYear: 1943,
        productionYears: [1943, 1945],
        exploitationYears: [1944, 1945],
        numberOfIssued: 3483,
      },
      crew: {
        size: 4,
        structure: "механик-водитель, наводчик, заряжающий, командир",
      },
      sizes: {
        weight: 46,
        length: 6770,
        width: 3070,
        height: 2630,
        clearance: 420,
      },
      armoring: {
        type: "катаная высокой твёрдости, литая средней твёрдости",
        body: {
          foreheadTop: "120 мм / 60°",
          foreheadBottom: "100 мм / −30°",
          boardTop: "90-120 мм / 15°",
          boardBottom: "90 мм / 0°",
          sternTop: "60 мм / 49°",
          sternBottom: "60 мм / 49°",
          bottom: "20 мм",
          roof: "30 мм",
        },
        tower: {
          forehead: "100 мм",
          gunMask: "100 мм",
          board: "100 мм / 20°",
          stern: "100 мм / 30°",
          roof: "30 мм",
        },
      },
      weapon: {
        cannon: CANNONS.get("Д-25T"),
        сannonАmmunition: 28,
        verticalGA: "−3…+20°",
        horizontalGA: "360°",
        sights: "ТШ-17",
        machinegun: `3 × 7,62-мм ДТ 
        1 × 12,7-мм ДШК`,
        machinegunАmmunition: "ДТ - 2520,\nДШК - 250",
      },
      mobility: {
        engine: ENGINES.get("В-2ИС"),
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
    name: "Т-28",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1933,
  },
  {
    name: "Т-34 обр. 1940 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "Т-34-57",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Т-34 обр. 1941 г.",
    isReady: true,
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    intro: [
      "Из-за постоянных перебоев с поставками пушек Л-11 было решено поставить на танк Т-34 более мощное орудие Ф-34. Новые Т-34 начали производиться с февраля 1941-го года. К осени 1941-го года крупным производителем этого танка остался только один завод СТЗ. В связи с этим в городе Сталинград была развёрнута цепочка заводов, которые снабжали комплектующими сборочные цеха. Всего было выпущено 3014 экземпляров Т-34 образца 1941-го года. Танк Т-34 является самым известным советским танком и одним из самых узнаваемых символов Второй мировой войны.",
    ],
    sections: ["Введение"],
    specifications: {
      crew: {
        size: 4,
        structure:
          "механик-водитель, стрелок-радист, заряжающий, командир-наводчик",
      },
      weapon: {
        cannon: CANNONS.get("Ф-34"),
      },
      mobility: {
        engine: ENGINES.get("В-2"),
      },
    },
  },
  {
    name: "Т-34Э (СТЗ)",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Т-34Э (завод №112)",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Т-34 обр. 1942 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Т-34 обр. 1943 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Т-34-85 (ЗИС-С-53)",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Т-34-85 (Д5-Т)",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "БТ-7",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1935,
  },
  {
    name: "БТ-5",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1933,
  },
  {
    name: "БТ-2",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1932,
  },
  {
    name: "Т-70",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Т-26",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1931,
  },
  {
    name: "Т-38",
    type: WEAPONS_TYPE.armoredVehicle.smallTank,
    adoptedIntoServiceDate: 1936,
  },
  {
    name: "ИСУ-152",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "СУ-100",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "ИСУ-122",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "СУ-152",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "СУ-85",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "СУ-76",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "СУ-122",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "БА-10",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1938,
  },
  {
    name: "Т-27",
    type: WEAPONS_TYPE.armoredVehicle.tankette,
    adoptedIntoServiceDate: 1931,
  },
];

const germany: IWeapon[] = [
  {
    name: "PzKpfw VI Ausf.B Tiger II",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "PzKpfw VI Tiger",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "PzKpfw V Ausf.G Panther",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Pz.Kpfw. IV Ausf.G",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Pz.Kpfw. IV Ausf.H",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Pz.Kpfw. III Ausf.J1",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Pz.Kpfw. III Ausf.L",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Pz.Kpfw. III Ausf.M",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Pz.Kpfw. II",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1935,
  },
  {
    name: "Jagdtiger",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Jagdpanther",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Ferdinand",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Nashorn",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "StuG III Ausf.G",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "StuG III Ausf.F",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "10,5 cm Sturmhaubitze 42",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "StuG III Ausf.A",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "Hummel",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Flakpanzer IV «Wirbelwind»",
    type: WEAPONS_TYPE.armoredVehicle.zsu,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Sd.Kfz. 251/1",
    type: WEAPONS_TYPE.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "Sd.Kfz. 250/1 Alte",
    type: WEAPONS_TYPE.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Sd.Kfz. 250/3 Alte",
    type: WEAPONS_TYPE.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Sd.Kfz. 251/16",
    type: WEAPONS_TYPE.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Sd.Kfz. 251/22",
    type: WEAPONS_TYPE.armoredVehicle.armoredСarrier,
    adoptedIntoServiceDate: 1944,
  },
];

const usa: IWeapon[] = [
  {
    name: "M26 Pershing",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
  },
  {
    name: "M4A3E2 76(W) Jumbo",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "M4A3E2 Jumbo",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "M4A3 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "M4A2 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "M4A1 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  // {
  //   name: "M4A3(105) Sherman",
  //   type: WEAPONS_TYPE.armoredVehicle.mediumTank,
  //   adoptedIntoServiceDate: 1944,
  // },
  {
    name: "M4A2 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "M4 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "M4A1 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "M3 Lee",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "M24 Chaffee",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "M5A1 Stuart",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "M3 Stuart",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "GMC M36 Jackson",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "GMC M18 Hellcat",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "GMC M10 Wolverine",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "GMC M40",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1945,
  },
];

const britain: IWeapon[] = [
  {
    name: "Churchill III",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Churchill I",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Matilda Mk III",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Sherman Firefly",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
  },
  {
    name: "Valentine Mk XI",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Valentine Mk X",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
  {
    name: "Valentine Mk I",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1939,
  },
  {
    name: "Crusader Mk III",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
  },
  {
    name: "Crusader Mk II",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
  },
  {
    name: "Tetrach I",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "Dimler Mk II",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1941,
  },
];

const france: IWeapon[] = [
  {
    name: "Somua S35",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1935,
  },
];

const italy: IWeapon[] = [
  {
    name: "Lancia IZ/IZM",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1916,
  },
];

const czechoslovakia: IWeapon[] = [
  {
    name: "LT vz.38",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1939,
  },
];

const finland: IWeapon[] = [
  {
    name: "BT-42",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
  },
];

const japan: IWeapon[] = [
  {
    name: "Chi-Nu",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
  },
];

appendNation(ussr, NATIONS.USSR);
appendNation(germany, NATIONS.germany);
appendNation(usa, NATIONS.USA);
appendNation(britain, NATIONS.greatBritain);
appendNation(france, NATIONS.france);
appendNation(italy, NATIONS.italy);
appendNation(czechoslovakia, NATIONS.czechoslovakia);
appendNation(finland, NATIONS.finland);
appendNation(japan, NATIONS.japan);

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
appendWeaponBranch(ARMORED_VEHICLES, WEAPONS_TYPE.armoredVehicle);
