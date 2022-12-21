import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/SectionCard/SectionCard";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./WeaponsBranchSelectionPage.module.scss";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../../javascript/utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../../javascript/store/redux/navigation/changeActualSectionMiddleware";
import Title from "../../components/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../../javascript/constants/pages";

export default function WeaponsBranchSelectionPage() {
  const dispatch = useDispatch();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    documentTitle.setWeaponsPage();
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, [dispatch]);

  React.useEffect(() => {
    // window.scrollTo(0, 500); 
  }, []); 

  return (
    <>
      <IntroImage imageUrl={pageInfo.introImage} />
      <ContentWrapper>
        <Container>
          <Title>Вооружения</Title>
          <div className={styles.weaponCardsWrapper}>
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.armored} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.aviation} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.artillery} />
            <SectionCard type={SECTION_CARD_TYPE.pages.weapons.smallArms} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
