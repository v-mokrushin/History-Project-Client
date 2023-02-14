import React from "react";
import ContentWrapper from "../../components/Structure/ContentWrapper/ContentWrapper";
import Container from "../../components/Structure/Container/Container";
import SectionCard from "../../components/Cards/SectionCard/SectionCard";
import VideoIntro from "../../components/Graphics/VideoIntro/VideoIntro";
import styles from "./HomePage.module.scss";
import { Pages } from "constants/pages";

export default function HomePage() {
  return (
    <>
      <VideoIntro />
      <ContentWrapper>
        <Container>
          <div className={styles.innerWrapper}>
            <SectionCard information={Pages.articles} />
            <SectionCard information={Pages.weapons} />
            <SectionCard information={Pages.battles} />
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
