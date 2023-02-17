import React from "react";
import ContentWrapper from "../../../components/Structure/ContentWrapper/ContentWrapper";
import SectionCard from "../../../components/Cards/SectionCard/SectionCard";
import Container from "../../../components/Structure/Container/Container";
import IntroImage from "../../../components/Graphics/IntroImage/IntroImage";
import styles from "./WeaponsBranchSelectionPage.module.scss";
import Title from "../../../components/Texts/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { Pages } from "../../../constants/pages";
import { useTranslation } from "react-i18next";

export default function WeaponsBranchSelectionPage() {
  const pageInfo = Pages.getByPath(useLocation().pathname);
  const { t } = useTranslation();

  return (
    <>
      <IntroImage imageUrl={pageInfo!.introImage} animated />
      <ContentWrapper>
        <Container>
          <Title>{t("navigation.weapons")}</Title>
          <div className={styles.weaponCardsWrapper}>
            <SectionCard
              information={Pages.armoredVehicles}
              className={styles.wideBox}
            />
            <SectionCard information={Pages.aviation} />
            <SectionCard information={Pages.artillery} />
            <SectionCard information={Pages.smallArms} />
            <SectionCard information={Pages.grenadeLaunchers} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
