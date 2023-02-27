import React from "react";
import styles from "./AccountPage.module.scss";
import classNames from "classnames";
import Title from "components/Texts/Title/Title";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { useNavigate } from "react-router";
import Text from "components/Texts/Text/Text";
import { TextField } from "@mui/material";
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
    const result = confirm("Вы действительно хотите выйти из учетной записи?");

    if (result) {
      setTimeout(() => {
        authorizationStore.unauthorizeUser();
      }, 500);
    }
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
                >
                  Редактировать
                </CustomButton>
              ) : (
                <CustomButton
                  color="blue"
                  uppercase
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
                      })
                      .catch((error) => alert(error));
                  }}
                >
                  Сохранить
                </CustomButton>
              )}
              {editingMode && (
                <CustomButton
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
                <CustomButton onClick={onExitClick} color="red" uppercase>
                  Выйти
                </CustomButton>
              )}
            </div>
          </div>
          {!editingMode ? (
            <div className={styles.infoWrapper}>
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
            <>
              <form>
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
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </Container>
    </ContentWrapper>
  );
});

export default AccountPage;
