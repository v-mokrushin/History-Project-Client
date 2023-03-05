import React from "react";
import styles from "./ArticleCreatorPage.module.scss";
import { Pages } from "constants/pages";
import { useNavigate } from "react-router-dom";
import { Weapons } from "data/weapons/weapons";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import WarningPage from "pages/WarningPage/WarningPage";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { Nations, NationsMethods } from "constants/nations";
import {
  WeaponClassification,
  WeaponClassificationMethods,
} from "constants/weapon-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Text from "components/Texts/Text/Text";
import { prepareWeapon, writeNewWeaponToLocalStorage } from "utils/weapons";
import { InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import { DocumentTitle } from "utils/document-title";
import {
  articleCreatorFormInitialValues,
  fillFormTest,
  validateArticleCreatorForm,
} from "./utils";
import CustomButton from "components/Buttons/Button/Button";
import imageViewerStore from "stores/mobx/imageViewerStore";
import { IAircraft } from "interfaces/weapons/aviation-interfaces";
import axios from "axios";
import { Server } from "config/server";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { alertsStore } from "stores/mobx/alertsStore";

interface IAvationCreatorFormProps {
  className?: string;
}

const AvationCreatorForm: React.FC<IAvationCreatorFormProps> = ({
  className,
}) => {
  const navigate = useNavigate();
  const [rerenderInitiator, runRerenderInitiator] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    DocumentTitle.set("Создание статьи");
  }, []);

  const formik = useFormik({
    initialValues: { ...articleCreatorFormInitialValues },
    onSubmit: (values, { resetForm }) => {
      if (Weapons.doesWeaponExist(formik.values.name)) {
        alertsStore.runAlert("error", `Вооружение с таким названием уже существует`);
        return;
      }

      const weapon: IAircraft = {
        name: values.name,
        isReady: true,
        branch: WeaponClassification.aviation,
        type: WeaponClassificationMethods.getByName(values.type)!,
        nation: NationsMethods.getByName(values.country),
        adoptedIntoServiceDate: values.adoptedIntoService,
        intro: [values.intro],
        sections: ["Введение", "Характеристики", "Читайте также"],
        galleryInfo: {
          isIconsRemote: true,
          remoteOriginalIcon: values.originalPhotoLink,
          remoteColorizedIcon: values.colorizedPhotoLink,
        },
        specifications: {
          common: {
            productionPeriod: values.productionPeriod,
            exploitationPeriod: values.exploitationYears,
            numberOfIssued: values.numberOfIssued,
          },
          crew: {
            size: values.crewSize,
            structure: values.crewStructure,
          },
          flightCharacteristics: {
            technicalRange: values.technicalRange,
            practicalRange: values.practicalRange,
            maximumSpeed: values.maximumSpeed,
            climbRate: values.climbRate,
          },
          powerUnits: {
            enginesNumber: values.enginesNumber,
            engine: {
              trademark: values.engineTrademark,
              type: values.engineType,
              capacity: values.engineCapacity,
              takeoffPower: values.engineTakeoffPower,
              combatPower: values.engineCombatPower,
            },
          },
          weapons: {
            weaponsSet: values.weaponsSet,
            ammunition: values.ammunition,
            secondSalvoWeight: values.secondSalvoWeight,
            bombWeapons: values.bombWeapons,
          },
        },
      };

      prepareWeapon(weapon);

      commonApplicationStore.showBanner("соединение с сервером");
      axios
        .post(Server.path("/weapons"), {
          createdWeapon: weapon,
        })
        .then((response) => {
          alertsStore.runAlert("info", `Статья ${values.name} успешно создана.`);
          Weapons.addNewWeapon(weapon);
          resetForm({ values: { ...articleCreatorFormInitialValues } });
          setTimeout(() => {
            weapon.path && navigate(weapon.path);
          }, 250);
        })
        .catch((error) => {
          alertsStore.runAlert(
            "error",
            `Статья ${values.name} не создана. Не удалось подключиться к серверу.`
          );
        })
        .finally(() => {
          commonApplicationStore.hideBanner();
        });
    },
    validate: (values) => validateArticleCreatorForm(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Введение
          </Text>
          <TextField
            label="Несколько предложений о вооружени"
            name="intro"
            placeholder="Расскажите о вооружении"
            value={formik.values.intro}
            onChange={formik.handleChange}
            error={formik.touched.intro && !!formik.errors.intro}
            helperText={formik.touched.intro && formik.errors.intro}
            onBlur={formik.handleBlur}
            minRows={4}
            required
            multiline
          />
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Общее
          </Text>
          <div className={styles.inputsWrapper}>
            <TextField
              label="Название"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              required
            />
            <TextField
              select
              label="Вид вооружения"
              name="kind"
              value={"Авиация"}
              onChange={formik.handleChange}
              SelectProps={{
                native: true,
              }}
              disabled
            >
              <option value={0}>{"Авиация"}</option>
            </TextField>
            <TextField
              select
              label="Тип"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              error={formik.touched.type && !!formik.errors.type}
              onBlur={formik.handleBlur}
              SelectProps={{
                native: true,
              }}
              helperText={formik.touched.type && formik.errors.type}
              required
            >
              <option aria-label="None" value="" />
              {WeaponClassificationMethods.getTypesArray(
                WeaponClassification.aviation
              ).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </TextField>
            <TextField
              select
              label="Страна"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && !!formik.errors.country}
              onBlur={formik.handleBlur}
              SelectProps={{
                native: true,
              }}
              helperText={formik.touched.country && formik.errors.country}
              required
            >
              <option aria-label="None" value="" />
              {Object.values(Nations)
                .filter((item) => item.name.russian !== "Весь мир")
                .map((item) => (
                  <option key={item.path} value={item.name.russian}>
                    {item.name.russian}
                  </option>
                ))}
            </TextField>
            <TextField
              label="Принято на вооружение"
              name="adoptedIntoService"
              value={formik.values.adoptedIntoService || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.adoptedIntoService &&
                !!formik.errors.adoptedIntoService
              }
              helperText={
                formik.touched.adoptedIntoService &&
                formik.errors.adoptedIntoService
              }
              onBlur={formik.handleBlur}
              type="number"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">год</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Период производства"
              name="productionPeriod"
              value={formik.values.productionPeriod || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.productionPeriod &&
                !!formik.errors.productionPeriod
              }
              helperText={
                formik.touched.productionPeriod &&
                formik.errors.productionPeriod
              }
              onBlur={formik.handleBlur}
              type="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">c – по</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Произведено"
              name="numberOfIssued"
              value={formik.values.numberOfIssued || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.numberOfIssued && !!formik.errors.numberOfIssued
              }
              helperText={
                formik.touched.numberOfIssued && formik.errors.numberOfIssued
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">штук</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Период эксплуатации"
              name="exploitationYears"
              value={formik.values.exploitationYears || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.exploitationYears &&
                !!formik.errors.exploitationYears
              }
              helperText={
                formik.touched.exploitationYears &&
                formik.errors.exploitationYears
              }
              onBlur={formik.handleBlur}
              type="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">c – по</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Размеры и масса
          </Text>
          <div className={styles.inputsWrapper}>
            <TextField
              label="Масса пустого"
              name="emptyWeight"
              value={formik.values.emptyWeight || ""}
              onChange={formik.handleChange}
              error={formik.touched.emptyWeight && !!formik.errors.emptyWeight}
              helperText={
                formik.touched.emptyWeight && formik.errors.emptyWeight
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">кг</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Масса снаряжённого"
              name="curbWeight"
              value={formik.values.curbWeight || ""}
              onChange={formik.handleChange}
              error={formik.touched.curbWeight && !!formik.errors.curbWeight}
              helperText={formik.touched.curbWeight && formik.errors.curbWeight}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">кг</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Длина"
              name="length"
              value={formik.values.length || ""}
              onChange={formik.handleChange}
              error={formik.touched.length && !!formik.errors.length}
              helperText={formik.touched.length && formik.errors.length}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">м</InputAdornment>,
              }}
            />
            <TextField
              label="Высота"
              name="height"
              value={formik.values.height || ""}
              onChange={formik.handleChange}
              error={formik.touched.height && !!formik.errors.height}
              helperText={formik.touched.height && formik.errors.height}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">м</InputAdornment>,
              }}
            />
            <TextField
              label="Размах крыла"
              name="wingSpan"
              value={formik.values.wingSpan || ""}
              onChange={formik.handleChange}
              error={formik.touched.wingSpan && !!formik.errors.wingSpan}
              helperText={formik.touched.wingSpan && formik.errors.wingSpan}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">м</InputAdornment>,
              }}
            />
            <TextField
              label="Площадь крыла"
              name="wingArea"
              value={formik.values.wingArea || ""}
              onChange={formik.handleChange}
              error={formik.touched.wingArea && !!formik.errors.wingArea}
              helperText={formik.touched.wingArea && formik.errors.wingArea}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">м²</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Экипаж
          </Text>
          <div className={styles.inputsWrapper}>
            <TextField
              label="Количество"
              name="crewSize"
              value={formik.values.crewSize || ""}
              onChange={formik.handleChange}
              error={formik.touched.crewSize && !!formik.errors.crewSize}
              helperText={formik.touched.crewSize && formik.errors.crewSize}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">человек</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Состав"
              name="crewStructure"
              value={formik.values.crewStructure}
              onChange={formik.handleChange}
              error={
                formik.touched.crewStructure && !!formik.errors.crewStructure
              }
              helperText={
                formik.touched.crewStructure && formik.errors.crewStructure
              }
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Летные характеристики
          </Text>
          <div className={styles.inputsWrapper}>
            <TextField
              label="Техническая дальность"
              name="technicalRange"
              value={formik.values.technicalRange || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.technicalRange && !!formik.errors.technicalRange
              }
              helperText={
                formik.touched.technicalRange && formik.errors.technicalRange
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">км</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Практическая дальность"
              name="practicalRange"
              value={formik.values.practicalRange || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.practicalRange && !!formik.errors.practicalRange
              }
              helperText={
                formik.touched.practicalRange && formik.errors.practicalRange
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">км</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Максимальная скорость"
              name="maximumSpeed"
              value={formik.values.maximumSpeed || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.maximumSpeed && !!formik.errors.maximumSpeed
              }
              helperText={
                formik.touched.maximumSpeed && formik.errors.maximumSpeed
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">км/ч</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Скороподъемность"
              name="climbRate"
              value={formik.values.climbRate || ""}
              onChange={formik.handleChange}
              error={formik.touched.climbRate && !!formik.errors.climbRate}
              helperText={formik.touched.climbRate && formik.errors.climbRate}
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">м/c</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Силовая установка
          </Text>
          <div className={styles.inputsWrapper}>
            <TextField
              label="Количество двигателей"
              name="enginesNumber"
              value={formik.values.enginesNumber || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.enginesNumber && !!formik.errors.enginesNumber
              }
              helperText={
                formik.touched.enginesNumber && formik.errors.enginesNumber
              }
              onBlur={formik.handleBlur}
              multiline
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">шт.</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Марка двигателя"
              name="engineTrademark"
              value={formik.values.engineTrademark}
              onChange={formik.handleChange}
              error={
                formik.touched.engineTrademark &&
                !!formik.errors.engineTrademark
              }
              helperText={
                formik.touched.engineTrademark && formik.errors.engineTrademark
              }
              onBlur={formik.handleBlur}
              type="text"
            />
            <TextField
              label="Тип двигателя"
              name="engineType"
              value={formik.values.engineType}
              onChange={formik.handleChange}
              error={formik.touched.engineType && !!formik.errors.engineType}
              helperText={formik.touched.engineType && formik.errors.engineType}
              multiline
              onBlur={formik.handleBlur}
              type="text"
            />
            <TextField
              label="Объем двигателя"
              name="engineCapacity"
              value={formik.values.engineCapacity || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.engineCapacity && !!formik.errors.engineCapacity
              }
              helperText={
                formik.touched.engineCapacity && formik.errors.engineCapacity
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">л</InputAdornment>,
              }}
            />
            <TextField
              label="Взлетная мощность"
              name="engineTakeoffPower"
              value={formik.values.engineTakeoffPower}
              onChange={formik.handleChange}
              error={
                formik.touched.engineTakeoffPower &&
                !!formik.errors.engineTakeoffPower
              }
              helperText={
                formik.touched.engineTakeoffPower &&
                formik.errors.engineTakeoffPower
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">л.с.</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Боевая мощность"
              name="engineCombatPower"
              value={formik.values.engineCombatPower}
              onChange={formik.handleChange}
              error={
                formik.touched.engineCombatPower &&
                !!formik.errors.engineCombatPower
              }
              helperText={
                formik.touched.engineCombatPower &&
                formik.errors.engineCombatPower
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">л.с.</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Вооружение
          </Text>
          <div className={styles.inputsWrapper_fullWidthFlex}>
            <TextField
              label="Комплект вооружения"
              name="weaponsSet"
              value={formik.values.weaponsSet || ""}
              onChange={formik.handleChange}
              error={formik.touched.weaponsSet && !!formik.errors.weaponsSet}
              helperText={formik.touched.weaponsSet && formik.errors.weaponsSet}
              onBlur={formik.handleBlur}
              multiline
              type="text"
            />
            <TextField
              label="Боезапас"
              name="ammunition"
              value={formik.values.ammunition}
              onChange={formik.handleChange}
              error={formik.touched.ammunition && !!formik.errors.ammunition}
              helperText={formik.touched.ammunition && formik.errors.ammunition}
              onBlur={formik.handleBlur}
              multiline
              type="text"
            />
            <TextField
              label="Вес секундного залпа"
              name="secondSalvoWeight"
              value={formik.values.secondSalvoWeight || ""}
              onChange={formik.handleChange}
              error={
                formik.touched.secondSalvoWeight &&
                !!formik.errors.secondSalvoWeight
              }
              helperText={
                formik.touched.secondSalvoWeight &&
                formik.errors.secondSalvoWeight
              }
              onBlur={formik.handleBlur}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">кг/с</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Бомбовое вооружение"
              name="bombWeapons"
              value={formik.values.bombWeapons}
              onChange={formik.handleChange}
              error={formik.touched.bombWeapons && !!formik.errors.bombWeapons}
              helperText={
                formik.touched.bombWeapons && formik.errors.bombWeapons
              }
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
        </div>
        <div className={styles.section}>
          <Text color="gold" noMargin>
            Фотографии
          </Text>
          {formik.values.originalPhotoLink && formik.values.colorizedPhotoLink && (
            <div className={styles.photosWrapper}>
              {formik.values.originalPhotoLink && (
                <img
                  src={formik.values.originalPhotoLink}
                  className={styles.photo}
                  onClick={() =>
                    imageViewerStore.openPhoto(formik.values.originalPhotoLink)
                  }
                />
              )}
              {formik.values.colorizedPhotoLink && (
                <img
                  src={formik.values.colorizedPhotoLink}
                  className={styles.photo}
                  onClick={() =>
                    imageViewerStore.openPhoto(formik.values.colorizedPhotoLink)
                  }
                />
              )}
            </div>
          )}
          <div className={styles.inputsWrapper_fullWidthFlex}>
            <TextField
              label="Черно-белая фотография"
              name="originalPhotoLink"
              value={formik.values.originalPhotoLink}
              onChange={formik.handleChange}
              error={
                formik.touched.originalPhotoLink &&
                !!formik.errors.originalPhotoLink
              }
              helperText={
                formik.touched.originalPhotoLink &&
                formik.errors.originalPhotoLink
              }
              onBlur={formik.handleBlur}
              type="text"
              required
              multiline
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ссылка</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Цветная фотография"
              name="colorizedPhotoLink"
              value={formik.values.colorizedPhotoLink}
              onChange={formik.handleChange}
              error={
                formik.touched.colorizedPhotoLink &&
                !!formik.errors.colorizedPhotoLink
              }
              helperText={
                formik.touched.colorizedPhotoLink &&
                formik.errors.colorizedPhotoLink
              }
              onBlur={formik.handleBlur}
              type="text"
              required
              multiline
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ссылка</InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div className={styles.test}>
          <CustomButton color="blue" type="submit" uppercase>
            Создать
          </CustomButton>
          <CustomButton
            color="blue"
            onClick={() => {
              fillFormTest(formik);
              runRerenderInitiator((val) => !val);
            }}
            uppercase
          >
            Тестовое заполнение
          </CustomButton>
          {/* <CustomButton
                    color="gold"
                    onClick={() => {
                      axios
                        .get(Server.path("/weapons"))
                        .then((response) => {
                          console.log(response.data);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                    uppercase
                  >
                    Запросить с сервера
                  </CustomButton> */}
          <CustomButton
            color="red"
            onClick={() => {
              formik.resetForm({
                values: { ...articleCreatorFormInitialValues },
              });
              runRerenderInitiator((val) => !val);
            }}
            uppercase
          >
            Очистить
          </CustomButton>
        </div>
      </div>
    </form>
  );
};

export default AvationCreatorForm;
