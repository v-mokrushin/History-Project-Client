import React from "react";
import styles from "./ArtilcleCreatorPage.module.scss";
import classNames from "classnames";
import IntroImage from "components/Graphics/IntroImage/IntroImage";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import Title from "components/Texts/Title/Title";
import { Pages } from "constants/pages";
import { useLocation } from "react-router-dom";
import { Weapons } from "data/weapons/weapons";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import WarningPage from "pages/WarningPage/WarningPage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { Nations, NationsMethods } from "constants/nations";
import {
  IWeaponType,
  WeaponClassification,
  WeaponClassificationMethods,
} from "constants/weapon-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Text from "components/Texts/Text/Text";
import { IArmoredVehicle } from "data/weapons/interfaces/armored-interfaces";
import { prepareWeapon, writeNewWeaponToLocalStorage } from "utils/weapons";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";
import { InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import { isValidURL } from "utils/common";
import { DocumentTitle } from "utils/document-title";
import {
  articleCreatorFormInitialValues,
  fillFormTest,
  validateArticleCreatorForm,
} from "./utils";
import { set } from "mobx";
import CustomButton from "components/Buttons/Button/Button";

interface IArtilcleCreatorPageProps {
  className?: string;
}

const ArtilcleCreatorPage: React.FC<IArtilcleCreatorPageProps> = ({
  className,
}) => {
  const pageInfo = Pages.getByPath(useLocation().pathname);
  const [rerenderInitiator, runRerenderInitiator] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    DocumentTitle.set("Создание статьи");
  }, []);

  const formik = useFormik({
    initialValues: articleCreatorFormInitialValues,
    onSubmit: (values, { resetForm }) => {
      if (Weapons.doesWeaponExist(formik.values.name)) {
        alert("Вооружение с таким названием уже существует.");
        return;
      }

      const weapon: IArmoredVehicle = {
        name: values.name,
        isReady: true,
        branch: WeaponClassification.armoredVehicle,
        type: WeaponClassificationMethods.getByName(values.type)!,
        nation: NationsMethods.getByName(values.country),
        adoptedIntoServiceDate: values.adoptedIntoService,
        intro: [values.intro],
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
          // sizes: {
          //   weight: state.weight,
          //   length: state.length,
          //   width: state.width,
          //   height: state.height,
          //   clearance: state.clearance,
          // },
          // crew: {
          //   size: state.crewSize,
          //   structure: state.crewStructure,
          // },
        },
      };

      prepareWeapon(weapon);
      Weapons.addNewWeapon(weapon);
      writeNewWeaponToLocalStorage(weapon);
      alert(`Вооружение ${values.name} успешно создано.`);
      resetForm({ values: articleCreatorFormInitialValues });
    },
    validate: (values) => validateArticleCreatorForm(values),
  });

  if (!pageInfo)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root, className)}>
      <>
        <VideoIntro size="half" path="/videos/building.mp4" />
        <ContentWrapper>
          <Container>
            <Title>{pageInfo.name.russian}</Title>
            <form
              onSubmit={(event) => {
                // event.preventDefault();
                formik.handleSubmit();
              }}
            >
              <div className={styles.wrapper}>
                <div className={styles.section}>
                  <Text color="gold">Введение</Text>
                  <TextField
                    label="Пара слов о технике"
                    name="intro"
                    value={formik.values.intro}
                    onChange={formik.handleChange}
                    error={formik.touched.intro && !!formik.errors.intro}
                    helperText={formik.touched.intro && formik.errors.intro}
                    onBlur={formik.handleBlur}
                    required
                    multiline
                    rows={5}
                  />
                </div>
                <div className={styles.section}>
                  <Text color="gold">Общее</Text>
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
                    <FormControl required>
                      <InputLabel htmlFor="country">Страна</InputLabel>
                      <Select
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.country && !!formik.errors.country
                        }
                        onBlur={formik.handleBlur}
                        native
                      >
                        <option aria-label="None" value="" />
                        {Object.values(Nations)
                          .filter((item) => item.name.russian !== "Весь мир")
                          .map((item) => (
                            <option key={item.path} value={item.name.russian}>
                              {item.name.russian}
                            </option>
                          ))}
                      </Select>
                      <FormHelperText error={Boolean(formik.errors.country)}>
                        {formik.touched.country && formik.errors.country}
                      </FormHelperText>
                    </FormControl>
                    <FormControl required>
                      <InputLabel htmlFor="type">Тип техники</InputLabel>
                      <Select
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        error={formik.touched.type && !!formik.errors.type}
                        onBlur={formik.handleBlur}
                        native
                      >
                        <option aria-label="None" value="" />
                        {WeaponClassificationMethods.getTypesArray(
                          WeaponClassification.armoredVehicle
                        ).map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </Select>
                      <FormHelperText error={Boolean(formik.errors.type)}>
                        {formik.touched.type && formik.errors.type}
                      </FormHelperText>
                    </FormControl>
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
                        formik.touched.numberOfIssued &&
                        !!formik.errors.numberOfIssued
                      }
                      helperText={
                        formik.touched.numberOfIssued &&
                        formik.errors.numberOfIssued
                      }
                      onBlur={formik.handleBlur}
                      type="text"
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
                  <Text color="gold">Фотографии</Text>
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
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">ссылка</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                {/* <div className={styles.section}>
                  <Text color="gold">Размеры и масса</Text>
                  <div className={styles.inputsWrapper}>
                    <TextField
                      label="Масса"
                      value={state.weight || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setWeight",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">тонн</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Длина"
                      value={state.length || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setLength",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">м</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Ширина"
                      value={state.width || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setWidth",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">м</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Высота"
                      value={state.height || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setHeight",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">м</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Клиренс"
                      value={state.clearance || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setClearance",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">м</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <Text color="gold">Экипаж</Text>
                  <div className={styles.inputsWrapper}>
                    <TextField
                      label="Количество"
                      value={state.crewSize || ""}
                      onChange={(event) =>
                        dispatch({
                          type: "setCrewSize",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            человек(а)
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Состав"
                      value={state.crewStructure}
                      onChange={(event) =>
                        dispatch({
                          type: "setCrewStructure",
                          payload: event.currentTarget.value,
                        })
                      }
                      variant="outlined"
                    />
                  </div>
                </div> */}
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
                  <CustomButton
                    color="red"
                    onClick={() => {
                      localStorage.clear();
                    }}
                    uppercase
                  >
                    Очистить LocalStorage
                  </CustomButton>
                  <CustomButton
                    color="red"
                    onClick={() => {
                      formik.resetForm({
                        values: articleCreatorFormInitialValues,
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
          </Container>
        </ContentWrapper>
      </>
    </div>
  );
};

export default ArtilcleCreatorPage;
