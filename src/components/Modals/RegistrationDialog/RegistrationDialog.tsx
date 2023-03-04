import React from "react";
import styles from "./RegistrationDialog.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { DocumentOverflow } from "utils/document-overflow";
import Text from "components/Texts/Text/Text";
import Input from "../../Controls/Input/Input";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import Logo from "components/Graphics/Logo/Logo";
import { useNavigate } from "react-router";
import burgerStore from "stores/mobx/burgerStore";
import { authorizationStore } from "stores/mobx/authorizationStore";
import axios from "axios";
import Preloader from "components/Graphics/Preloader/Preloader";
import { Server } from "config/server";
import { alertsStore } from "stores/mobx/alertsStore";

const RegistrationDialog = observer(() => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        commonApplicationStore.hideRegistrationDialog();
      }
    });
  }, []);

  React.useEffect(() => {
    commonApplicationStore.registrationDialogVisibility
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [commonApplicationStore.registrationDialogVisibility]);

  function clearForm() {
    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  }

  return (
    <div
      className={classNames(
        styles.root,
        commonApplicationStore.registrationDialogVisibility && styles.root_open
      )}
    >
      <div
        className={classNames(
          styles.dialog,
          commonApplicationStore.registrationDialogVisibility &&
            styles.dialog_open
        )}
      >
        {isLoading && <Preloader color="white" overlapping />}
        <button
          onClick={() => {
            commonApplicationStore.hideRegistrationDialog();
            clearForm();
          }}
          className={styles.closeButton}
        ></button>
        <Logo disableLink className={styles.logo} />
        <Subtitle color="white" className={styles.title}>
          Регистрация
        </Subtitle>
        <div className={styles.separator}></div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className={styles.inputsWrapper}>
            <Input
              label="Никнэйм"
              initialValue={username}
              setter={setUsername}
              type="text"
              theme="dark"
              hideIcon
            />
            <Input
              label="Пароль"
              initialValue={password}
              setter={setPassword}
              type="password"
              theme="dark"
              hideIcon
            />
            <Input
              label="Подтвердите пароль"
              initialValue={passwordConfirm}
              setter={setPasswordConfirm}
              type="password"
              theme="dark"
              hideIcon
            />
          </div>
          <button
            className={classNames(styles.submit)}
            onClick={(event) => {
              event.preventDefault();

              if (username === "") {
                alertsStore.runAlert("error", `Придумайте никнейм.`);
                return;
              }

              if (username.length < 3) {
                alertsStore.runAlert(
                  "error",
                  `Минимальная длина никнейма 3 символа.`
                );
                return;
              }

              if (password === "") {
                alertsStore.runAlert("error", `Придумайте пароль.`);
                return;
              }

              if (passwordConfirm === "") {
                alertsStore.runAlert("error", `Подтвердите пароль.`);
                return;
              }

              if (password !== passwordConfirm) {
                alertsStore.runAlert("error", `Пароли не совпадают.`);
                return;
              }

              if (password.length < 3) {
                alertsStore.runAlert(
                  "error",
                  `Минимальная длина пароля — 4 символа.`
                );
                return;
              }

              if (username === password) {
                alertsStore.runAlert(
                  "error",
                  `Пароль и никнейм не должны совпадать.`
                );
                return;
              }

              setIsLoading(true);
              axios
                .post(Server.path("/users/registration"), {
                  username: username,
                  password: password,
                })
                .then((response) => {
                  authorizationStore.authorizeUser(response.data);
                  burgerStore.setClose();
                  clearForm();
                  commonApplicationStore.hideRegistrationDialog();
                  navigate("/account");
                  alertsStore.runAlert("info", `Вы успешно зарегистрировались.`);
                })
                .catch((error) => {
                  if (error.code === "ERR_NETWORK") {
                    alertsStore.runAlert("error", `Сервер недоступен.`);
                  } else {
                    alertsStore.runAlert("error", error.response.data);
                  }
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            <Text>Зарегистрироваться</Text>
          </button>
        </form>
      </div>
    </div>
  );
});

export default RegistrationDialog;
