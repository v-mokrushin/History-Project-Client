import React from "react";
import styles from "./LogIn.module.scss";
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

const LogIn = observer(() => {
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        commonApplicationStore.hideLogInDialog();
      }
    });
  }, []);

  React.useEffect(() => {
    commonApplicationStore.logInDialogVisibility
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [commonApplicationStore.logInDialogVisibility]);

  const req = { nickname: "xvadim", password: 12345 };
  console.log(JSON.stringify(req));

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
        <Logo />
        <Subtitle color="gold">Вход</Subtitle>
        <div className={styles.separator}></div>
        <div className={styles.inputsWrapper}>
          <div className={styles.block}>
            <Text noMargin color="gold">
              Ник
            </Text>
            <Input type="text" theme="dark" hideIcon />
          </div>
          <div className={styles.block}>
            <Text noMargin color="gold">
              Пароль
            </Text>
            <Input type="password" theme="dark" hideIcon />
          </div>
        </div>
        <button className={classNames(styles.submit)}>
          <Text color="white">ВОЙТИ</Text>
        </button>
        <button
          onClick={() => commonApplicationStore.hideLogInDialog()}
          className={styles.closeButton}
        ></button>
      </div>
    </div>
  );
});

export default LogIn;
