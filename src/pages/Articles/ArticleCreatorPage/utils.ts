import { Nations } from "../../../constants/nations";
import { isValidURL } from "utils/common";
import { WeaponClassification } from "constants/weapon-types";

export const articleCreatorFormInitialValues = {
  name: "",
  intro: "",
  adoptedIntoService: 0,
  country: "",
  type: "",
  productionPeriod: "",
  exploitationYears: "",
  numberOfIssued: 0,

  emptyWeight: 0,
  curbWeight: 0,
  length: 0,
  height: 0,
  wingSpan: 0,
  wingArea: 0,

  crewSize: 0,
  crewStructure: "",
  technicalRange: 0,
  practicalRange: 0,
  maximumSpeed: 0,
  climbRate: 0,

  enginesNumber: 0,
  engineTrademark: "",
  engineType: "",
  engineCapacity: 0,
  engineTakeoffPower: 0,
  engineCombatPower: 0,

  weaponsSet: "",
  ammunition: "",
  secondSalvoWeight: 0,
  bombWeapons: "",

  originalPhotoLink: "",
  colorizedPhotoLink: "",
};

export function fillFormTest(formik: any) {
  formik.values.intro = `Появление последней серийной версии Bf 109К ("Курфюст") явилось результатом политики рационализма "истребительного штаба", пытавшегося удержать хорошо отработанный истребитель на конвейере, но сократить число его модификаций и субмодификаций. В результате появился "Курфюст" (литеру I министерство авиации не использовало, а J была присвоена модификации истребителя с двигателем "Испано-Сюиза"), который представлял собой модифицированный вариант Bf 109G-10, получивший ряд использовавшихся на самолетах серии G наборов заводской установки и некоторые аэродинамические улучшения.`;

  formik.values.name = "Bf.109K";
  formik.values.adoptedIntoService = 1944;
  formik.values.country = Nations.Germany.name.russian;
  formik.values.type = WeaponClassification.aviation.fighter.name.russian;
  formik.values.productionPeriod = "1944 - 1945";
  formik.values.numberOfIssued = 1200;
  formik.values.exploitationYears = "1942 - 1943";

  formik.values.emptyWeight = 3100;
  formik.values.curbWeight = 3400;
  formik.values.length = 8.85;
  formik.values.height = 2.5;
  formik.values.wingSpan = 10;
  formik.values.wingArea = 16.1;

  formik.values.crewSize = 1;
  formik.values.crewStructure = "пилот";

  formik.values.technicalRange = 790;
  formik.values.practicalRange = 570;
  formik.values.maximumSpeed = 695;
  formik.values.climbRate = 24.5;

  formik.values.enginesNumber = 1;
  formik.values.engineTrademark = "Daimler-Benz DB 605ASCM";
  formik.values.engineType =
    "двенадцатицилиндровый Λ- образный двигатель жидкостного охлаждения";
  formik.values.engineCapacity = 35.7;
  formik.values.engineTakeoffPower = 2000;
  formik.values.engineCombatPower = 2000;

  formik.values.weaponsSet =
    "1 x 30-мм пушка МК 103 или 108, 2 x 15-мм пушки MG 151";
  formik.values.ammunition = "МК 103 - 120 выстрелов, MG 151 - 440 выстрелов";
  formik.values.secondSalvoWeight = 3.56;
  formik.values.bombWeapons = "отсутствует";

  formik.values.originalPhotoLink =
    "https://grafiq.ru/wp-content/uploads/2016/11/Messerschmitt-Bf-109-G-10-WNr-611155-Schwarzer-Winkel-2-Uffz-Anton-Kellmeier-6-JG-52-Neubiberg-May-1945.jpg";
  formik.values.colorizedPhotoLink =
    "https://www.digitalcombatsimulator.com/upload/iblock/1fa/Digital%20Combat%20Simulator%20%20Black%20Shark%20Screenshot%202018.09.23%20-%2017.58.30.35.jpg";
}

export function validateArticleCreatorForm(
  values: typeof articleCreatorFormInitialValues
): any {
  const errors: any = {};

  if (!values.intro) {
    errors.intro = "Обязательное поле";
  } else if (values.intro.length < 100) {
    errors.intro = "Не менее 100 знаков";
  }

  if (!values.name) {
    errors.name = "Обязательное поле";
  }

  if (!values.country) {
    errors.country = "Обязательное поле";
  }

  if (!values.type) {
    errors.type = "Обязательное поле";
  }

  if (!values.adoptedIntoService) {
    errors.adoptedIntoService = "Обязательное поле";
  } else if (
    values.adoptedIntoService < 1850 ||
    values.adoptedIntoService > 1950
  ) {
    errors.adoptedIntoService = "Неверный год";
  }

  if (values.numberOfIssued < 0) {
    errors.numberOfIssued = "Должно быть больше 0";
  }

  if (!values.originalPhotoLink) {
    errors.originalPhotoLink = "Обязательное поле";
  } else if (!isValidURL(values.originalPhotoLink)) {
    errors.originalPhotoLink = "Невалидная ссылка";
  }

  if (!values.colorizedPhotoLink) {
    errors.colorizedPhotoLink = "Обязательное поле";
  } else if (!isValidURL(values.colorizedPhotoLink)) {
    errors.colorizedPhotoLink = "Невалидная ссылка";
  }

  return errors;
}
