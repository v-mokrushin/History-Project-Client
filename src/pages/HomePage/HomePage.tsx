import React from "react";
import ContentWrapper from "../../components/Structure/ContentWrapper/ContentWrapper";
import Container from "../../components/Structure/Container/Container";
import SectionCard from "../../components/Cards/SectionCard/SectionCard";
import VideoIntro from "../../components/Graphics/VideoIntro/VideoIntro";
import styles from "./HomePage.module.scss";
import { PAGES } from "constants/pages";

export default function HomePage() {
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
