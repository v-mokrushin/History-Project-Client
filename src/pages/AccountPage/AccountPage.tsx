import React from "react";
import styles from "./AccountPage.module.scss";
import classNames from "classnames";
import Title from "components/Texts/Title/Title";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { useNavigate } from "react-router";
import Text from "components/Texts/Text/Text";
import { InputAdornment, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import actualSectionStore from "stores/mobx/actualSectionStore";
import { DocumentTitle } from "utils/document-title";
import CustomButton from "components/Buttons/Button/Button";
import { authorizationStore } from "stores/mobx/authorizationStore";
import imageViewerStore from "stores/mobx/imageViewerStore";
import { getStringDate, getStringDateTime } from "utils/common";
import { useFormik } from "formik";
import axios from "axios";
import { Server as ServerSource } from "config/server";
import { alertsStore } from "stores/mobx/alertsStore";
import { ANIMATIONS } from "constants/animations";

interface IAccountPageProps {
  className?: string;
}

const AccountPage: React.FC<IAccountPageProps> = observer(({ className }) => {
  const navigate = useNavigate();
  const [editingMode, setEditingMode] = React.useState(false);
  const formik = useFormik({
    initialValues: authorizationStore.getEditableInfo(),
    onSubmit: (values) => {},
  });

  React.useEffect(() => {
    if (authorizationStore.isUserAuthorized) {
      actualSectionStore.throw();
      DocumentTitle.set("Личный кабинет");
    } else {
      navigate("/");
    }

    return () => {};
  }, [authorizationStore.isUserAuthorized]);

  function onExitClick() {
    setTimeout(() => {
      authorizationStore.unauthorizeUser();
      alertsStore.add("info", `Вы вышли из учетной записи.`);
    }, 500);
  }

  if (!authorizationStore.user) return <></>;

  return (
    <ContentWrapper>
      <Container>
        <Title>Личный кабинет</Title>
        <div className={styles.separator}></div>
        <div className={styles.wrapper}>
          <div className={styles.preview}>
            {authorizationStore.user.avatar && (
              <img
                className={styles.avatar}
                src={authorizationStore.user.avatar}
                onClick={() =>
                  imageViewerStore.openPhoto(authorizationStore.user?.avatar!)
                }
              />
            )}
            <Subtitle color="gold" noMargin>
              {authorizationStore.user.username}
            </Subtitle>
            <div className={styles.buttonsBox}>
              {!editingMode ? (
                <CustomButton
                  color="black"
                  uppercase
                  onClick={() => setEditingMode(true)}
                  className={ANIMATIONS.fadeIn}
                >
                  Редактировать
                </CustomButton>
              ) : (
                <CustomButton
                  color="blue"
                  uppercase
                  className={ANIMATIONS.fadeIn}
                  onClick={() => {
                    commonApplicationStore.showBanner("СОХРАНЕНИЕ");

                    axios
                      .patch(ServerSource.path("/users"), {
                        id: authorizationStore.user?.id,
                        name: formik.values.name,
                        surname: formik.values.surname,
                        avatar: formik.values.avatar,
                      })
                      .then((response) => {
                        if (authorizationStore.user) {
                          authorizationStore.updateInfo(
                            formik.values.name,
                            formik.values.surname,
                            formik.values.avatar
                          );
                        }
                        commonApplicationStore.hideBanner();
                        setEditingMode(false);
                        alertsStore.add("info", `Изменения успешно внесены.`);
                      })
                      .catch((error) => {
                        alertsStore.add(
                          "error",
                          `Неудалось внести изменения на сервере.`
                        );
                      });
                  }}
                >
                  Сохранить
                </CustomButton>
              )}
              {editingMode && (
                <CustomButton
                  className={ANIMATIONS.fadeIn}
                  onClick={() => {
                    formik.resetForm({
                      values: authorizationStore.getEditableInfo(),
                    });

                    setEditingMode(false);
                  }}
                  color="red"
                  uppercase
                >
                  Отменить
                </CustomButton>
              )}
              {editingMode || (
                <CustomButton
                  onClick={onExitClick}
                  color="red"
                  uppercase
                  className={ANIMATIONS.fadeIn}
                >
                  Выйти
                </CustomButton>
              )}
            </div>
          </div>
          {!editingMode ? (
            <div className={classNames(styles.infoWrapper, ANIMATIONS.fadeIn)}>
              <div className={styles.section}>
                <div className={styles.header}>
                  <Subtitle color="black" noMargin>
                    Мои данные
                  </Subtitle>
                  <Text color="grey" size="small">
                    {"Зарегистрирован: " +
                      getStringDateTime(
                        authorizationStore.user.registrationDate
                      )}
                  </Text>
                </div>
                <div className={styles.inputsWrapper}>
                  <TextField
                    label="Имя"
                    value={authorizationStore.user.name || "не заполнено"}
                    variant="outlined"
                    type="text"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    label="Фамилия"
                    value={authorizationStore.user.surname || "не заполнено"}
                    variant="outlined"
                    type="text"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <form className={ANIMATIONS.fadeIn}>
              <div className={styles.infoWrapper}>
                <div className={styles.section}>
                  <div className={styles.header}>
                    <Subtitle color="black" noMargin>
                      Редактирование
                    </Subtitle>
                  </div>
                  <div className={styles.inputsWrapper_editingMode}>
                    <TextField
                      label="Имя"
                      name="name"
                      value={formik.values.name || ""}
                      onChange={formik.handleChange}
                      variant="outlined"
                      type="text"
                    />
                    <TextField
                      label="Фамилия"
                      name="surname"
                      value={formik.values.surname || ""}
                      onChange={formik.handleChange}
                      variant="outlined"
                      type="text"
                    />
                    <TextField
                      label="Аватар"
                      name="avatar"
                      value={formik.values.avatar || ""}
                      onChange={formik.handleChange}
                      variant="outlined"
                      multiline
                      type="text"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">ссылка</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </Container>
    </ContentWrapper>
  );
});

export default AccountPage;
