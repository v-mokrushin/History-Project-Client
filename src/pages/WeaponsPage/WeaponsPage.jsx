import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import SectionCard from "../../components/SectionCard/SectionCard";
import WideContainer from "../../components/WideContainer/WideContainer";
import IntroImage from "../../components/IntroImage/IntroImage";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import styles from "./WeaponsPage.module.scss";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import { INTRO_IMAGE_TYPE } from "../../components/IntroImage/constants";
import Title from "../../components/Title/Title";
import { useDispatch } from "react-redux";
import { NAVIGATION_ACTUAL_SECTION } from "../../components/Navigation/constants";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { changeActualSection } from "../../store/navigation/changeActualSectionMiddleware";

export default function WeaponsPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    documentTitle.setWeaponsPage();
    dispatch(changeActualSection(NAVIGATION_ACTUAL_SECTION.weapons));
  }, []);

  return (
    <>
      <IntroImage type={INTRO_IMAGE_TYPE.pages.weapons} />
      <ContentWrapper>
        <WideContainer>
          <InnerContentWrapper>
            <Title text="Вооружения" />
            <div className={styles.weaponCardsWrapper}>
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.aviation} />
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.armored} />
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.smallArms} />
              <SectionCard type={SECTION_CARD_TYPE.pages.weapons.artillery} />
            </div>
          </InnerContentWrapper>
        </WideContainer>
      </ContentWrapper>
    </>
  );
}
