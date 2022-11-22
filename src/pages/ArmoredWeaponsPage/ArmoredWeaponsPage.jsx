import React from "react";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./ArmoredWeaponsPage.module.scss";

export default function ArmoredWeaponsPage() {
  return (
    <div className={styles.root}>
      <IntroImage/>
      <ContentWrapper>
        <Container>
          <InnerContentWrapper></InnerContentWrapper>
        </Container>
      </ContentWrapper>
    </div>
  );
}
