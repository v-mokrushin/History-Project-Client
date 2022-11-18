import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import WideContainer from "../../components/WideContainer/WideContainer";
import { useDispatch } from "react-redux";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import SectionCard from "../../components/SectionCard/SectionCard";
import VideoIntro from "../../components/VideoIntro/VideoIntro";
import { documentTitle } from "../../utils/updateDocumentTitle";
import styles from "./HomePage.module.scss";
import { NAVIGATION_ACTUAL_SECTION } from "../../components/Navigation/constants";
import { changeActualSection } from "../../store/navigation/changeActualSectionMiddleware";

export default function HomePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    documentTitle.setHomePage();
    dispatch(changeActualSection(NAVIGATION_ACTUAL_SECTION.home));
  }, []);

  return (
    <>
      <VideoIntro />
      <ContentWrapper>
        <WideContainer>
          <div className={styles.innerWrapper}>
            <SectionCard type={SECTION_CARD_TYPE.articles} />
            <SectionCard type={SECTION_CARD_TYPE.weapons} />
            <SectionCard type={SECTION_CARD_TYPE.battles} />
          </div>
        </WideContainer>
      </ContentWrapper>
    </>
  );
}
