import React from "react";
import styles from "./UserAccount.module.scss";
import classNames from "classnames";
import { accountStore } from "stores/mobx/authorizationStore";
import imageViewerStore from "stores/mobx/imageViewerStore";
import { useFormik } from "formik";
import { Weapons } from "data/weapons/weapons";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import CustomButton from "components/Buttons/Button/Button";
import { ANIMATIONS } from "constants/animations";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import axios from "axios";
import { alertsStore } from "stores/mobx/alertsStore";
import Text from "components/Texts/Text/Text";
import { getStringDateTime } from "utils/common";
import { InputAdornment, TextField } from "@mui/material";
import Comments from "components/Structure/Comments/Comments";
import WeaponCard from "components/Cards/WeaponCard/WeaponCard";
import { Server } from "config/server";
import Title from "components/Texts/Title/Title";

interface IUserAccountProps {
  className?: string;
}

const UserAccount: React.FC<IUserAccountProps> = ({ className }) => {
  const [editingMode, setEditingMode] = React.useState(false);
  const formik = useFormik({
    initialValues: accountStore.getEditableInfo(),
    onSubmit: (values) => {},
  });
  const viewsHistoryWeapons = React.useMemo(() => {
    if (accountStore.user?.viewsHistory) {
      return Weapons.getWeaponsByIds(accountStore.user.viewsHistory);
    } else {
      return undefined;
    }
  }, []);

  function onExitClick() {
    setTimeout(() => {
      accountStore.unauthorizeUser();
      alertsStore.runAlert("info", `Вы вышли из учетной записи.`);
    }, 500);
  }

  if (!accountStore.user) return <></>;

  return (
    <div className={styles.root}>
      <Title>Личный кабинет</Title>
      <div className={styles.separator}></div>
      <div className={styles.wrapper}>
        <div className={styles.preview}>
          {accountStore.user.avatar && (
            <img
              className={styles.avatar}
              src={accountStore.user.avatar}
              onClick={() =>
                imageViewerStore.openPhoto(accountStore.user?.avatar!)
              }
            />
          )}
          <Subtitle color="gold" noMargin>
            {accountStore.user.username}
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
                    .patch(Server.path("/users"), {
                      id: accountStore.user?.id,
                      name: formik.values.name,
                      surname: formik.values.surname,
                      avatar: formik.values.avatar,
                    })
                    .then((response) => {
                      if (accountStore.user) {
                        accountStore.updateInfo(
                          formik.values.name,
                          formik.values.surname,
                          formik.values.avatar
                        );
                      }
                      commonApplicationStore.hideBanner();
                      setEditingMode(false);
                      alertsStore.runAlert(
                        "info",
                        `Изменения успешно внесены.`
                      );
                    })
                    .catch((error) => {
                      alertsStore.runAlert(
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
                    values: accountStore.getEditableInfo(),
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
                  Данные
                </Subtitle>
                <Text color="grey" size="small">
                  {"Зарегистрирован: " +
                    getStringDateTime(accountStore.user.registrationDate)}
                </Text>
              </div>
              <div className={styles.inputsWrapper}>
                <TextField
                  label="Имя"
                  value={accountStore.user.name || "не заполнено"}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Фамилия"
                  value={accountStore.user.surname || "не заполнено"}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>
            <div className={styles.section}>
              {accountStore.user.comments?.length ? (
                <Comments
                  articleId="ss"
                  comments={accountStore.user.comments}
                  accountMode
                />
              ) : null}
            </div>
            {viewsHistoryWeapons?.length ? (
              <div className={styles.section}>
                <Subtitle color="black" noMargin>
                  Вы читали
                </Subtitle>
                <div className={styles.viewHistory}>
                  {viewsHistoryWeapons.map((weapon) => (
                    <WeaponCard
                      key={weapon?.id}
                      weapon={weapon}
                      isAbsoluteLinkPath
                    />
                  ))}
                </div>
              </div>
            ) : null}
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
    </div>
  );
};

export default UserAccount;
