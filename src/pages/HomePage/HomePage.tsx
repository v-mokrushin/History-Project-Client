import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import SectionCard from "../../components/SectionCard/SectionCard";
import VideoIntro from "../../components/VideoIntro/VideoIntro";
import { documentTitle } from "../../utils/updateDocumentTitle";
import styles from "./HomePage.module.scss";
import { PAGES } from "constants/pages";

export default function HomePage() {
  React.useEffect(() => {
    documentTitle.setHomePage();
  }, []);

  return (
    <>
      <VideoIntro />
      <ContentWrapper>
        <Container>
          <div className={styles.innerWrapper}>
            <SectionCard information={PAGES.articles} />
            <SectionCard information={PAGES.weapons} />
            <SectionCard information={PAGES.battles} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
