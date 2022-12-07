import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/SectionCard/SectionCard";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./WeaponsTypeSelectionPage.module.scss";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import Title from "../../components/Title/Title";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";

export default function WeaponsTypeSelectionPage() {
  const dispatch = useDispatch();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    documentTitle.setWeaponsPage();
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, [dispatch]);

  console.log(pageInfo);

  return (
    <>
      <IntroImage imageUrl={pageInfo.introImage} />
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
