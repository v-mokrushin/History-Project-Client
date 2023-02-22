import { Nations } from './../../../constants/nations';
import { isValidURL } from "utils/common";
import { WeaponClassification } from 'constants/weapon-types';

export const articleCreatorFormInitialValues = {
  name: "",
  intro: "",
  adoptedIntoService: 0,
  country: "",
  type: "",
  productionPeriod: "",
  exploitationYears: "",
  numberOfIssued: 0,
  originalPhotoLink: "",
  colorizedPhotoLink: "",
};

export function fillFormTest(formik: any) {
  formik.values.intro =
    "Т-34 Экранированный (сокращенно Т-34Э) — экранированная версия советского среднего танка Т-34. Из-за возросшей мощи немецких танковых орудий и противотанковой артиллерии с лета 1942 года, Народный комиссариат обороны (НКО) СССР, выдал задание особой группе сотрудников научно-исследовательского института (НИИ) завода №112 на усиление бронирования средних танков Т-34.";
  formik.values.name = "Т-34Э";
  formik.values.adoptedIntoService = 1942;
  formik.values.country = Nations.USA.name.russian;
  formik.values.type =
    WeaponClassification.armoredVehicle.mediumTank.name.russian;
  formik.values.productionPeriod = "1942 - 1943";
  formik.values.numberOfIssued = 25;
  formik.values.exploitationYears = "1942 - 1943";
  formik.values.originalPhotoLink =
    "https://i-com.cdn.gaijin.net/monthly_2022_04/247324968_T-34Egorkyonstreet2.jpg.10fa7842a497b3a9d2fc6ceaa1de63a9.jpg";
  formik.values.colorizedPhotoLink =
    "https://www.wotanks.com/images/wot-novosti/t-34-ekranirovannyj.JPG";
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
