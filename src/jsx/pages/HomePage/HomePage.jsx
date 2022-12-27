import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import { useDispatch } from "react-redux";
import { SECTION_CARD_TYPE } from "../../components/SectionCard/constants";
import SectionCard from "../../components/SectionCard/SectionCard";
import VideoIntro from "../../components/VideoIntro/VideoIntro";
import { documentTitle } from "../../../utils/updateDocumentTitle";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    documentTitle.setHomePage();
  }, [dispatch]);

  return (
    <>
      <VideoIntro />
      <ContentWrapper>
        <Container>
          <div className={styles.innerWrapper}>
            <SectionCard type={SECTION_CARD_TYPE.articles} />
            <SectionCard type={SECTION_CARD_TYPE.weapons} />
            <SectionCard type={SECTION_CARD_TYPE.battles} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
