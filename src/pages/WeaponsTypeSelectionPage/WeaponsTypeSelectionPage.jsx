import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/SectionCard/SectionCard";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import styles from "./WeaponsTypeSelectionPage.module.scss";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import Beadcrumbs from "../../components/Beadcrumbs/Beadcrumbs";
import Title from "../../components/Title/Title";

export default function WeaponsTypeSelectionPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    documentTitle.setWeaponsPage();
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, [dispatch]);

  return (
    <>
      <IntroImage type={INTRO_IMAGE_TYPE.pages.weapons} />
      <ContentWrapper>
        <Container>
          <Title>Вооружения</Title>
          <div className={styles.weaponCardsWrapper}>
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.armored} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.aviation} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.smallArms} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.artillery} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
