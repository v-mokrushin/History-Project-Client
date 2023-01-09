import { CREWS } from "../crews";
import { BODIES } from "../parts/bodies";
import { IWeapon } from "../weapons";
import { WEAPONS_TYPE } from "../../../constants/weapon-types";
import { NATIONS } from "../../../constants/nations";
import IS_2 from "../../../fragments/weapons/IS-2";
import { ENGINES } from "../parts/engines";
import { CANNONS } from "../parts/cannons";
import { appendNation, appendWeaponBranch } from "utils/weapons";
import { TOWERS } from "../parts/towers";

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
    name: "КВ-1 (Л-11)",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1940,
  },
  {
    name: "КВ-1 (ЗиС-5)",
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1941,
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
    JSXComponent: <IS_2 />,
    sections: [
      "Введение",
      "Характеристики",
      "История создания",
      "Конструкция",
      "Вооружение",
      "Применение в бою",
      "Видеоматериалы",
      "Модели",
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
        link: "https://www.ozon.ru/product/sbornaya-model-zvezda-sovetskiy-tyazhelyy-tank-is-2-nabor-dlya-sborki-masshtab-1-35-zvezda-art-3524-184455104/?advert=4C-u9uSqd4qS9YZg-YmFssZC9PSLsx7qLGreCeeO4mxUY438mb_4l3C1j5ajr1Oi9QEdYwoIPHDu_QRL2tOdgyjaxMDInlHjI9BkRkumVDDTmjZioDYhPDU-rAM-01xEIbLDUxSawKwltKlxqX9kt8y6oqX6G8yGsGBMyJF285Aj35gFt45Q51pnxvdM5Rgz5_23o8iolE6n2rfshUTLubdIo6OVSHoTuVC0wXvCMse4-d462w4_1itGmKNlfrZ8sP1iMGf8YrOn8g7k-EbfvFNiZjR8KsOdpXlMdKot7kX7qjlXzJ7yBaBUSmGLmW1YsEWLLM6C0E-LUXUlKOhZfyyxBHGhTx82HVPCrwsL-K55ZDlffvkl4SZoK0FXiSh2gvJ163xL6hEZouenQZ5WeNYa0OQdlg3Ex_TP7zCzYKv0qB39vxfQ3Jpr2YPRnm6aRhu1XcDmm1heHLgXhxxcpEYvyfN59RK_Og-glKmAGsYXz6btqqeVClvmaXUjWIJliJhSMP1AytDUtsWVQYc2VxVRhofMHAQlemuVCbFLiC0Yd3VBOFq0drNmnPjJEa6VvzxAowS25dc1WVTPmMdEXrrohs6ltK1CHcPFJYx5zLqi7l4-ZXeal3b2PY22HAyi6k1ozJZrzXwx0kST-9von6mXV1EEJMfTKoCbmTKz9V02nq31ppRn11OdmXNAhcN6GGB8jTAivy_eTnrAAs9xGwzIAe9OV7WJJs4VUaYKJOGGW52Rt63kb7zKCZcM6ZnNa3eVWBrRz4teOGnGL__OLg&avtc=1&avte=4&avts=1673164064&keywords=сборная+модель+ис-2&sh=x0yThzLvBw",
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
      // {
      //   title: "Сборная модель Моделист ИС-2 масштаб 1:72",
      //   photo: "моделист-72.webp",
      //   link: "https://www.ozon.ru/product/modelist-sovetskiy-tank-is-2-1-72-sbornaya-model-305077003/?asb=qaU0bUqAC8vz4b%252FWrzq%252BvjRM6WCye7gKTqaRrjioRME%253D&asb2=SM58FSgS8iBxZ3_4WawBT-1n4BQSa5sErBrXprkoS590KLJbDC7SNSQsMmkQ1tw_&avtc=1&avte=2&avts=1673167244&keywords=сборная+модель+ис-2&sh=x0yThxWkjw",
      // },
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
      crew: CREWS.size.four.perfect,
      sizes: {
        weight: 46,
        length: 6770,
        width: 3070,
        height: 2630,
        clearance: 420,
      },
      armoring: {
        type: "катаная высокой твёрдости, литая средней твёрдости",
        body: BODIES.get("ИС"),
        tower: TOWERS.get("ИС"),
      },
      weapon: {
        cannon: CANNONS.get("Д-25T"),
        ammunition: {
          cannon: 28,
          machinegun: "ДТ - 2520, ДШК - 250",
        },
        verticalGA: "−3…+20°",
        horizontalGA: "360°",
        sights: "ТШ-17",
        machinegun: `3 × 7,62-мм ДТ 
        1 × 12,7-мм ДШК`,
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
      "Танк Т-34 является самым известным советским танком и одним из самых узнаваемых символов Второй мировой войны. Из-за постоянных перебоев с поставками пушек Л-11 было решено поставить на танк Т-34 более мощное орудие Ф-34. Новые Т-34 начали производиться с февраля 1941-го года. К осени 1941-го года крупным производителем этого танка остался только один завод - СТЗ. В связи с этим в городе Сталинград была развёрнута цепочка заводов, которые снабжали комплектующими сборочные цеха. Всего было выпущено 3014 экземпляров Т-34 образца 1941-го года.",
    ],
    sections: ["Введение"],
    specifications: {
      crew: CREWS.size.four.weak,
      weapon: {
        cannon: CANNONS.get("Ф-34"),
      },
      mobility: {
        engine: ENGINES.get("В-2-34"),
      },
      armoring: {
        type: "стальная катаная гомогенная высокой твёрдости",
        body: BODIES.get("Т-34"),
        tower: TOWERS.get("Т-34 обр. 40-41 г."),
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
    isReady: true,
    type: WEAPONS_TYPE.armoredVehicle.heavyTank,
    adoptedIntoServiceDate: 1942,
    intro: [
      "Panzerkampfwagen VI Ausf. H1, или «Тигр» – это первый немецкий тяжелый танк времен Второй мировой войны. Один из самых знаменитых танков Германии.",
    ],
    sections: ["Введение", "Характеристики", "Модели"],
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
      crew: CREWS.size.five.perfect,
      weapon: {
        cannon: CANNONS.get("8,8 cm KwK 36"),
      },
      mobility: {
        engine: ENGINES.get("Maybach HL 230"),
      },
    },
  },
  {
    name: "PzKpfw V Ausf.G Panther",
    isReady: true,
    type: WEAPONS_TYPE.armoredVehicle.mediumTank,
    adoptedIntoServiceDate: 1944,
    specifications: {
      crew: {
        size: 5,
        structure:
          "механик-водитель, стрелок-радист, заряжающий, наводчик, командир",
      },
      weapon: {
        cannon: CANNONS.get("7,5 cm KwK 42"),
      },
      mobility: {
        engine: ENGINES.get("Maybach HL 230"),
      },
    },
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
