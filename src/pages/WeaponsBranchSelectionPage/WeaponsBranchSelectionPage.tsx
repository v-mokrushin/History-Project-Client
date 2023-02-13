import React from "react";
import ContentWrapper from "../../components/Structure/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/Cards/SectionCard/SectionCard";
import Container from "../../components/Structure/Container/Container";
import IntroImage from "../../components/Graphics/IntroImage/IntroImage";
import styles from "./WeaponsBranchSelectionPage.module.scss";
import Title from "../../components/Texts/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { PAGES } from "../../constants/pages";
import { useTranslation } from "react-i18next";

export default function WeaponsBranchSelectionPage() {
  const pageInfo = PAGES.getByPath(useLocation().pathname);
  const { t } = useTranslation();

  return (
    <>
      <IntroImage imageUrl={pageInfo!.introImage} animated />
      <ContentWrapper>
        <Container>
          <Title>{t("navigation.weapons")}</Title>
          <div className={styles.weaponCardsWrapper}>
            <SectionCard
              information={PAGES.armoredVehicles}
              className={styles.wideBox}
            />
            <SectionCard information={PAGES.aviation} />
            <SectionCard information={PAGES.artillery} />
            <SectionCard information={PAGES.smallArms} />
            <SectionCard information={PAGES.grenadeLaunchers} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
