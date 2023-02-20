import React from "react";
import styles from "./RegistrationPage.module.scss";
import classNames from "classnames";
import Title from "components/Texts/Title/Title";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import commonApplicationStore from "stores/mobx/commonApplicationStore";

interface IRegistrationPageProps {
  className?: string;
}

const RegistrationPage: React.FC<IRegistrationPageProps> = ({ className }) => {
  React.useEffect(() => {
    commonApplicationStore.setShowOrdinarHeader(true);

    return () => {
      commonApplicationStore.setShowOrdinarHeader(false);
    };
  }, []);

  return (
    <ContentWrapper>
      <Container>
        <Title>Регистрация</Title>
      </Container>
    </ContentWrapper>
  );
};

export default RegistrationPage;
