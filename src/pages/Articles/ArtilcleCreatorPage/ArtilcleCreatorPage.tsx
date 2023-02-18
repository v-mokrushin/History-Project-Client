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
import { CREWS } from "data/weapons/departments/crews";
import { createGallery, createModels, defineIdProperty } from "utils/weapons";
import { action } from "mobx";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import Block from "components/Structure/Block/Block";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import { Alert } from "@material-ui/lab";
import { PayloadAction } from "@reduxjs/toolkit";
import { FormInitialState, IFormState } from "./interfaces";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";

interface IArtilcleCreatorPageProps {
  className?: string;
}

const ArtilcleCreatorPage: React.FC<IArtilcleCreatorPageProps> = ({
  className,
}) => {
  const pageInfo = Pages.getByPath(useLocation().pathname);

  const [state, dispatch] = React.useReducer(
    (state: IFormState, action: any) => {
      switch (action.type) {
        case "setIntro":
          return { ...state, intro: action.payload };
        case "setName":
          return { ...state, name: action.payload };
        case "setAdoptedIntoService":
          return {
            ...state,
            adoptedIntoService: action.payload < 1946 ? action.payload : 0,
          };
        case "setCountry":
          return { ...state, country: action.payload };
        case "setType":
          return { ...state, type: action.payload };
        case "setProductionPeriod":
          return { ...state, productionPeriod: action.payload };
        case "setExploitationYears":
          return { ...state, exploitationYears: action.payload };
        case "setNumberOfIssued":
          return { ...state, numberOfIssued: action.payload };

        case "setWeight":
          return {
            ...state,
            weight:
              action.payload > 0 && action.payload < 300 ? action.payload : 0,
          };
        case "setLength":
          return {
            ...state,
            length:
              action.payload > 0 && action.payload < 10 ? action.payload : 0,
          };
        case "setWidth":
          return {
            ...state,
            width:
              action.payload > 0 && action.payload < 10 ? action.payload : 0,
          };
        case "setHeight":
          return {
            ...state,
            height:
              action.payload > 0 && action.payload < 10 ? action.payload : 0,
          };
        case "setClearance":
          return {
            ...state,
            clearance: action.payload > 0 ? action.payload : 0,
          };

        case "setCrewSize":
          return {
            ...state,
            crewSize: action.payload > 0 ? action.payload : 0,
          };
        case "setCrewStructure":
          return { ...state, crewStructure: action.payload };

        case "setInitialState":
          return { ...FormInitialState };

        default:
          return state;
      }
    },
    FormInitialState
  );

  function testFill() {
    dispatch({
      type: "setIntro",
      payload:
        "Т-34 Экранированный (сокращенно Т-34Э) — экранированная версия советского среднего танка Т-34. Из-за возросшей мощи немецких танковых орудий и противотанковой артиллерии с лета 1942 года, Народный комиссариат обороны (НКО) СССР, выдал задание особой группе сотрудников научно-исследовательского института (НИИ) завода №112 на усиление бронирования средних танков Т-34.",
    });
    dispatch({ type: "setName", payload: "Т-34Э" });
    dispatch({ type: "setAdoptedIntoService", payload: 1942 });
    dispatch({ type: "setCountry", payload: "США" });
    dispatch({
      type: "setType",
      payload: WeaponClassification.armoredVehicle.mediumTank.name.russian,
    });
    dispatch({ type: "setProductionPeriod", payload: "1942 - 1943" });
    dispatch({ type: "setExploitationYears", payload: "1942 - 1943" });
    dispatch({ type: "setNumberOfIssued", payload: 25 });

    dispatch({ type: "setWeight", payload: 29 });
    dispatch({ type: "setLength", payload: 5.6 });
    dispatch({ type: "setWidth", payload: 3.2 });
    dispatch({ type: "setHeight", payload: 2.2 });
    dispatch({ type: "setClearance", payload: 0.56 });

    dispatch({ type: "setCrewSize", payload: 4 });
    dispatch({
      type: "setCrewStructure",
      payload: CREWS.size.four.weak.structure,
    });
  }

  function addWeapon() {
    if (!state.name || !state.intro || !state.country || !state.type) {
      alert("Заполните все обязательные поля.");
      return;
    }

    if (Weapons.doesWeaponExist(state.name)) {
      alert("Вооружение с таким названием уже существует.");
      return;
    }

    const weapon: IArmoredVehicle = {
      name: state.name,
      isReady: true,
      branch: WeaponClassification.armoredVehicle,
      type: WeaponClassificationMethods.getByName(state.type)!,
      nation: NationsMethods.getByName(state.country),
      adoptedIntoServiceDate: state.adoptedIntoService,
      intro: [state.intro],
      specifications: {
        common: {
          productionPeriod: state.productionPeriod,
          exploitationYears: state.exploitationYears,
          numberOfIssued: state.numberOfIssued,
        },
        sizes: {
          weight: state.weight,
          length: state.length,
          width: state.width,
          height: state.height,
          clearance: state.clearance,
        },
        crew: {
          size: state.crewSize,
          structure: state.crewStructure,
        },
      },
    };

    defineIdProperty(weapon);
    createGallery(weapon);
    createModels(weapon);
    Weapons.addNewWeapon(weapon);

    if (localStorage.getItem("created-weapons")) {
      const savedCreatedWeapons: TWeapon[] = JSON.parse(
        localStorage.getItem("created-weapons") || ""
      );
      savedCreatedWeapons.push(weapon);
      localStorage.setItem(
        "created-weapons",
        JSON.stringify(savedCreatedWeapons)
      );
    } else {
      localStorage.setItem("created-weapons", JSON.stringify([weapon]));
    }

    alert(`Вооружение ${state.name} успешно создано.`);
    dispatch({ type: "setInitialState" });
  }

  if (!pageInfo)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root, className)}>
      <>
        {/* <IntroImage imageUrl={pageInfo.introImage} animated /> */}
        <VideoIntro size="half" path="/videos/building.mp4" />
        <ContentWrapper>
          <Container>
            <Title>{pageInfo.name.russian}</Title>
            <form>
              <div className={styles.wrapper}>
                <div className={styles.section}>
                  <Text color="gold">Введение</Text>
                  <TextField
                    onChange={(event) =>
                      dispatch({
                        type: "setIntro",
                        payload: event.currentTarget.value,
                      })
                    }
                    value={state.intro}
                    required
                    label="Пара слов о технике"
                    multiline
                    rows={4}
                  />
                </div>
                <div className={styles.section}>
                  <Text color="gold">Общее</Text>
                  <div className={styles.inputsWrapper}>
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setName",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.name}
                      label="Название"
                      variant="outlined"
                      required
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setAdoptedIntoService",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.adoptedIntoService || ""}
                      label="Принят на вооружение (год)"
                      variant="outlined"
                      type="number"
                      required
                    />
                    <FormControl required>
                      <InputLabel htmlFor="country">Страна</InputLabel>
                      <Select
                        value={state.country}
                        onChange={(event) =>
                          dispatch({
                            type: "setCountry",
                            payload: event.target.value,
                          })
                        }
                        native
                        name="country"
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
                    </FormControl>
                    <FormControl required>
                      <InputLabel htmlFor="type">Тип техники</InputLabel>
                      <Select
                        onChange={(event) =>
                          dispatch({
                            type: "setType",
                            payload: event.target.value,
                          })
                        }
                        value={state.type}
                        native
                        name="type"
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
                    </FormControl>
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setProductionPeriod",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.productionPeriod}
                      label="Годы производства"
                      variant="outlined"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setNumberOfIssued",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.numberOfIssued || ""}
                      label="Произведено"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setExploitationYears",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.exploitationYears}
                      label="Годы эксплуатации"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <Text color="gold">Размеры и масса</Text>
                  <div className={styles.inputsWrapper}>
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setWeight",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.weight || ""}
                      label="Масса (тонн)"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setLength",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.length || ""}
                      label="Длина (м)"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setWidth",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.width || ""}
                      label="Ширина (м)"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setHeight",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.height || ""}
                      label="Высота (м)"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setClearance",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.clearance || ""}
                      label="Клиренс (м)"
                      variant="outlined"
                      type="number"
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <Text color="gold">Экипаж</Text>
                  <div className={styles.inputsWrapper}>
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setCrewSize",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.crewSize || ""}
                      label="Количество"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      onChange={(event) =>
                        dispatch({
                          type: "setCrewStructure",
                          payload: event.currentTarget.value,
                        })
                      }
                      value={state.crewStructure}
                      label="Состав"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className={styles.test}>
                  <Button
                    type="submit"
                    onClick={(event) => {
                      event.preventDefault();
                      addWeapon();
                    }}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Создать
                  </Button>
                  <Button
                    onClick={() => testFill()}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Тестовое заполнение
                  </Button>
                  <Button
                    onClick={() => localStorage.clear()}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Очистить localStorage
                  </Button>
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
