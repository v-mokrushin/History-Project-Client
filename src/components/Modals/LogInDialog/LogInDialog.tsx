import React from "react";
import styles from "./LogInDialog.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { DocumentOverflow } from "utils/document-overflow";
import Text from "components/Texts/Text/Text";
import Preloader from "components/Graphics/Preloader/Preloader";
import Title from "components/Texts/Title/Title";
import Input from "../../Controls/Input/Input";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import Logo from "components/Graphics/Logo/Logo";
import { useNavigate } from "react-router";
import burgerStore from "stores/mobx/burgerStore";
import { authorizationStore } from "stores/mobx/authorizationStore";
import { hashSync } from "bcryptjs";
import axios from "axios";
import { Server } from "config/server";
import { alertsStore } from "stores/mobx/alertsStore";
import CustomButton from "components/Buttons/Button/Button";
import CloseButton from "components/Buttons/CloseButton/CloseButton";

const LogInDialog = observer(() => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        commonApplicationStore.hideLogInDialog();
        clearForm();
      }
    });
  }, []);

  React.useEffect(() => {
    commonApplicationStore.logInDialogVisibility
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [commonApplicationStore.logInDialogVisibility]);

  function clearForm() {
    setUsername("");
    setPassword("");
  }

  return (
    <div
      className={classNames(
        styles.root,
        commonApplicationStore.logInDialogVisibility && styles.root_open
      )}
    >
      <div
        className={classNames(
          styles.dialog,
          commonApplicationStore.logInDialogVisibility && styles.dialog_open
        )}
      >
        {isLoading && <Preloader color="white" overlapping />}
        <CloseButton
          onClick={() => {
            commonApplicationStore.hideLogInDialog();
            clearForm();
          }}
        />
        <Logo disableLink className={styles.logo} />
        <Subtitle color="white" className={styles.title}>
          Вход
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
          </div>
          <CustomButton
            style="login"
            color="blue"
            textColor="white"
            type="submit"
            uppercase
            onClick={() => {
              if (username === "") {
                alertsStore.runAlert("error", `Введите никнейм.`);
                return;
              }

              if (password === "") {
                alertsStore.runAlert("error", `Введите пароль.`);
                return;
              }

              setIsLoading(true);
              axios
                .post(Server.path("/users"), {
                  username: username,
                  password: password,
                })
                .then((response) => {
                  authorizationStore.authorizeUser(response.data);
                  burgerStore.setClose();
                  clearForm();
                  commonApplicationStore.hideLogInDialog();
                  alertsStore.runAlert("info", "Вы успешно авторизовались.");
                  alertsStore.runAlert(
                    "info",
                    "Теперь вам доступно создание статей.",
                    1500
                  );
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
            войти
          </CustomButton>
        </form>
      </div>
    </div>
  );
});

export default LogInDialog;
