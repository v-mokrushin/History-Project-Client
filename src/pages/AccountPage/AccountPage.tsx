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
import authorizationStore from "stores/mobx/authorizationStore";

interface IAccountPageProps {
  className?: string;
}

const AccountPage: React.FC<IAccountPageProps> = observer(({ className }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authorizationStore.isUserAuthorized) {
      commonApplicationStore.setShowOrdinarHeader(true);
      actualSectionStore.throw();
      DocumentTitle.set("Личный кабинет");
    } else {
      navigate("/");
    }

    return () => {
      commonApplicationStore.setShowOrdinarHeader(false);
    };
  }, [authorizationStore.isUserAuthorized]);

  function onExitClick() {
    const result = confirm("Вы действительно хотите выйти из учетной записи?");

    if (result) {
      setTimeout(() => {
        authorizationStore.unauthorizeUser();
      }, 500);
    }
  }

  if (!authorizationStore.authorizedUser) return <></>;

  return (
    <ContentWrapper>
      <Container>
        <Subtitle>Личный кабинет</Subtitle>
        <form>
          <div className={styles.wrapper}>
            <div className={styles.section}>
              <Text color="gold">Общее</Text>
              <div className={styles.inputsWrapper}>
                <TextField
                  label="Никнейм"
                  value={authorizationStore.authorizedUser.username}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Имя"
                  value={authorizationStore.authorizedUser.name}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Фамилия"
                  value={authorizationStore.authorizedUser.surname}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Дата регистрации"
                  value={authorizationStore.authorizedUser.registrationDate}
                  variant="outlined"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>
            <CustomButton onClick={onExitClick} color="red">
              Выйти из учетной записи
            </CustomButton>
            <div className={styles.test}></div>
          </div>
        </form>
      </Container>
    </ContentWrapper>
  );
});

export default AccountPage;
