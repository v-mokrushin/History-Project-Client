import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";
import IS_2 from "../fragments/weapons/IS-2";

let USSR = [
  {
    name: "ИС-3",
    id: "69ea2120-3689-42e9-a226-57143986597b",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1945,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/ИС-3/1.jpg",
      photo: [],
    },
  },
  {
    name: "КВ-1",
    id: "ac7b3fad-05de-4210-804f-dca5cdc959dd",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/КВ-1/1.jpg",
      photo: [],
    },
  },
  {
    name: "КВ-2",
    id: "40108a6e-991a-4d94-8714-5374c2633818",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/КВ-2/1.jpg",
      photo: [],
    },
  },
  {
    name: "КВ-1C",
    id: "ff820ec6-6521-4753-af14-87a039fa55b0",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/КВ-1С/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-35",
    id: "9d92dcb1-2129-4128-80eb-0d45ffe904ed",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1933,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-35/1.jpg",
      photo: [],
    },
  },
  {
    name: "ИС-1",
    id: "d8595613-07f4-46bd-8c35-c1cd62150d98",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/ИС-1/1.jpg",
      photo: [],
    },
  },
  {
    name: "ИС-2",
    id: "3a0ff217-6f5e-4a50-8df6-c520e85e28ab",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    JSXComponent: <IS_2 />,
    gallery: {
      icon: "/images/weapons/armored/USSR/ИС-2/1.webp",
      photo: [],
    },
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
    id: "hh068dbc-kdje-32d1-84a6-3f046ee09207",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1933,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-28/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-34 обр. 1940 г.",
    id: "4a0685bc-2cb2-42d9-94a2-cf046ee09207",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1940,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-34-40/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-34 обр. 1941 г.",
    id: "2bb18929-7f20-4bb0-9251-8d7458269931",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-34-41/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-34 обр. 1942 г.",
    id: "ea5254ef-0de0-437b-96a8-8b8d86779156",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-34-42/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-34-57",
    id: "2009c011-bcbc-4b66-bd63-3576aeedb765",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1941,
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-34-57/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-34-85",
    id: "0b5804aa-8f0a-4812-9585-84bf694e29e0",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-34-85/1.jpg",
      photo: [],
    },
  },
  {
    name: "БТ-7",
    id: "60d23b91-50c6-4786-940d-b45ee9ee1f1c",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1935,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/БТ-7/1.jpg",
      photo: [],
    },
  },
  {
    name: "Т-70",
    id: "ca8b6704-38ae-4567-92be-b057760abbb7",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1942,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/Т-70/1.jpg",
      photo: [],
    },
  },
  {
    name: "СУ-76",
    id: "2cbb9414-3d23-459a-9d7d-f0e4ce636636",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    gallery: {
      icon: "/images/weapons/armored/USSR/СУ-76/1.jpg",
      photo: [],
    },
  },
  {
    name: "СУ-122",
    id: "0c5390ea-0979-43aa-b3bb-d32763503aea",
    type: WEAPONS_TYPE.armoredVehicle.sau,
    adoptedIntoServiceDate: 1942,
    gallery: {
      icon: "/images/weapons/armored/USSR/СУ-122/1.jpg",
      photo: [],
    },
  },
  {
    name: "БА-10",
    id: "hg7b3fad-05de-4210-804f-dca5cdc959dd",
    type: WEAPONS_TYPE.armoredVehicle.armoredCar,
    adoptedIntoServiceDate: 1938,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/USSR/БА-10/1.jpg",
      photo: [],
    },
  },
];
USSR = USSR.map((item) => ({ ...item, nation: NATIONS.USSR }));

let germany = [
  {
    name: "PzKpfw VI Ausf.B «Tiger II»",
    id: "af4480b7-1f59-4149-ae14-14889cdc1092",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1944,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/germany/Tiger-2/1.jpg",
      photo: [],
    },
  },
  {
    name: "PzKpfw VI «Tiger»",
    id: "9ae87222-4712-4534-9d70-fbc4f14804d3",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/germany/Tiger/1.jpg",
      photo: [],
    },
  },
  {
    name: "PzKpfw V «Panther»",
    id: "924a2012-3fc5-4099-bfc2-f8952a6aed8d",
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1943,
    weapon: {},
    gallery: {
      icon: "/images/weapons/armored/germany/Panther/1.jpg",
      photo: [],
    },
  },
];
germany = germany.map((item) => ({ ...item, nation: NATIONS.germany }));

export const ARMORED_VEHICLES = [...USSR, ...germany];
