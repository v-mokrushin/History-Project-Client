import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/SectionCard/SectionCard";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./WeaponsBranchSelectionPage.module.scss";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import { documentTitle } from "../../utils/updateDocumentTitle";
import Title from "../../components/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";

export default function WeaponsBranchSelectionPage() {
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    documentTitle.setWeaponsPage();
  }, []);

  return (
    <>
      <IntroImage imageUrl={pageInfo!.introImage} />
      <ContentWrapper>
        <Container>
          <Title>Вооружения</Title>
          <div className={styles.weaponCardsWrapper}>
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.armored} />
            <div className={styles.weaponCardsInnerWrapper}>
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.aviation} />
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.artillery} />
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.smallArms} />
              <SectionCard
                type={SECTION_CARD_TYPE.pages.weapons.grenadeLaunchers}
              />
            </div>
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
