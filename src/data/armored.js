import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";
import IS_2 from "../fragments/weapons/IS-2";

let USSR = [
  {
    name: "ИС-3",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    icon: "1.jpg",
  },
  {
    name: "КВ-1",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
    icon: "1.jpg",
  },
  {
    name: "КВ-2",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
    icon: "1.jpg",
  },
  {
    name: "КВ-1С",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "Т-35",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1933,
    icon: "1.jpg",
  },
  {
    name: "ИС-1",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "ИС-2",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    JSXComponent: <IS_2 />,
    sections: [
      "Введение",
      "Характеристики",
      "История создания",
      "Конструкция",
      "Вооружение",
      "Применение в бою",
      "Видеоматериалы",
    ],
    icon: "1.webp",
    intro: [
      "ИС-2 (Объект 240) — советский основной и тяжёлый танк периода Великой Отечественной войны, являлся самым мощным и наиболее тяжелобронированным из советских и союзных серийных танков периода войны, и одним из сильнейших основных танков на то время в мире. В годы Великой Отечественной войны вместе с обозначением ИС-2 на равных использовалось название ИС-122, в этом случае число 122 означает калибр пушки — основного вооружения боевой машины. Танки этого типа сыграли большую роль в боях 1944—1945 годов, особенно отличившись при штурме городов. После завершения войны ИС-2 были модернизированы и находились на вооружении Советской Армии ВС Союза ССР и впоследствии ВС России до 1993 года. Также танки ИС-2 поставлялись в ряд государств и участвовали в некоторых вооружённых конфликтах после 1945 года.",
    ],
    specifications: {
      common: {
        developer: "Челябинский Кировский Завод",
        manufacturer: "Челябинский Кировский Завод",
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
      weapon: {
        cannon: {
          trademark: "Д-25Т",
          caliber: "122 мм",
          length: "48 калибров",
          type: "нарезное",
          ammunition: "БР-471, БР-471Б, ОФ-471",
          chargingType: "раздельное",
          combatFireRate: "< 3",
          muzzleBrake: "двухкамерный ",
          trigger: "механический, электрический",
        },
        сannonАmmunition: 28,
        verticalGA: "−3…+20°",
        horizontalGA: "360°",
        sights: "ТШ-17",
        machinegun: `3 × 7,62-мм ДТ; 
        1 × 12,7-мм ДШК (начиная с 1944 г.)`,
        machinegunАmmunition: "ДТ - 2520,\nДШК - 250",
      },
      mobility: {
        engine: {
          trademark: "В‑2-10",
          type: "дизельный",
          power: 520 + " л.с.",
          capacity: 38.88 + " л",
          config: "V-образный \n 12-цилиндровый четырёхтактный",
        },
        speed: {
          road: 37 + " км/ч",
          roughTerrain: 15 + " км/ч",
        },
        powerReserve: {
          road: "≈ 240 км",
          roughTerrain: "≈ 160 км",
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
    icon: "1.jpg",
  },
  {
    name: "Т-34 обр. 1940 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1940,
    icon: "1.jpg",
  },
  {
    name: "Т-34 обр. 1941 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Т-34 обр. 1942 г.",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "Т-34-57",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Т-34-85",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "БТ-7",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1935,
    icon: "1.jpg",
  },
  {
    name: "Т-70",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "ИСУ-152",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "СУ-100",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "ИСУ-122",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "СУ-152",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "СУ-85",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "СУ-76",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "СУ-122",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "БА-10",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1938,
    icon: "1.jpg",
  },
];
USSR.forEach((item) => (item.nation = NATIONS.USSR));

let germany = [
  {
    name: "PzKpfw VI Ausf.B «Tiger II»",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "PzKpfw VI «Tiger»",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "PzKpfw V «Panther»",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "Pz.Kpfw. IV Ausf.G",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "Pz.Kpfw. IV Ausf.H",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "Pz.Kpfw. III Ausf.J1",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Pz.Kpfw. III Ausf.M",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "Pz.Kpfw. II",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1935,
    icon: "1.jpg",
  },
  {
    name: "Jagdtiger",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "Jagdpanther",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "Ferdinand",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "Nashorn",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    icon: "2.webp",
  },
  {
    name: "StuG III Ausf.G",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "StuG III Ausf.F",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
    icon: "1.webp",
  },
  {
    name: "10,5 cm Sturmhaubitze 42",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "StuG III Ausf.A",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1940,
    icon: "1.jpg",
  },
  {
    name: "Hummel",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
];
germany.forEach((item) => (item.nation = NATIONS.germany));

let usa = [
  {
    name: "M26 Pershing",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    icon: "1.jpg",
  },
  {
    name: "M4A3E2 76(W) Jumbo",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A3E2 Jumbo",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A3 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A2 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A1 76(W) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A3(105) Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M4A2 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "M4 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "M4A1 Sherman",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "M3 Lee",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "M24 Chaffee",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "M5A1 Stuart",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "M3 Stuart",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "GMC M36 Jackson",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "GMC M18 Hellcat",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "GMC M10 Wolverine",
    type: WEAPONS_TYPE.armoredVehicle.ptsau,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "GMC M40",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1945,
    icon: "1.jpg",
  },
];
usa.forEach((item) => (item.nation = NATIONS.USA));

let britain = [
  {
    name: "Churchill III",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jfif",
  },
  {
    name: "Churchill I",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Matilda Mk III",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Sherman Firefly",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    icon: "1.jpg",
  },
  {
    name: "Valentine Mk XI",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jfif",
  },
  {
    name: "Valentine Mk X",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    icon: "1.jpg",
  },
  {
    name: "Valentine Mk I",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1939,
    icon: "1.jfif",
  },
  {
    name: "Crusader Mk III",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    icon: "1.jpg",
  },
  {
    name: "Crusader Mk II",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
  {
    name: "Tetrach I",
    type: WEAPONS_TYPE.armoredVehicle.lightTank,
    adoptedIntoServiceDate: 1940,
    icon: "1.jpeg",
  },
  {
    name: "Dimler Mk II",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1941,
    icon: "1.jpg",
  },
];
britain.forEach((item) => (item.nation = NATIONS.greatBritain));

export const ARMORED_VEHICLES = [...USSR, ...germany, ...usa, ...britain];

ARMORED_VEHICLES.forEach((item) => {
  let name = item.name;
  if (name.at(-1) === ".") name = name.slice(0, -1);

  Object.defineProperty(item, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-");
    },
  });

  item.gallery = {
    icon:
      `/images/weapons/armored/` +
      item.nation.path +
      "/" +
      name.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "") +
      "/" +
      item.icon,
  };
  delete item.icon;
});
