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

  if (!authorizationStore.user) return <></>;

  return (
    <ContentWrapper>
      <Container>
        {/* <Subtitle>Личный кабинет</Subtitle> */}
        <Title>Личный кабинет</Title>
        <div className={styles.separator}></div>
        <div className={styles.wrapper}>
          <div className={styles.preview}>
            {authorizationStore.user.avatar && (
              <img
                className={styles.avatar}
                src={authorizationStore.user.avatar}
                alt={`${authorizationStore.user.username} avatar`}
                onClick={() =>
                  imageViewerStore.openPhoto(authorizationStore.user?.avatar!)
                }
              />
            )}
            <Subtitle color="gold" noMargin>
              {authorizationStore.user.username}
            </Subtitle>
            <div className={styles.buttonsBox}>
              <CustomButton
                color="black"
                uppercase
                onClick={() => commonApplicationStore.showBanner("СОХРАНЕНИЕ")}
              >
                Редактировать
              </CustomButton>
              <CustomButton onClick={onExitClick} color="red" uppercase>
                Выйти
              </CustomButton>
            </div>
          </div>
          <form>
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
          </form>
        </div>
      </Container>
    </ContentWrapper>
  );
});

export default AccountPage;
