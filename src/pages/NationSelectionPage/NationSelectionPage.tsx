import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./NationSelectionPage.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";
import Flag from "../../components/Flag/Flag";
import Title from "../../components/Title/Title";
import { WEAPONS_DATA } from "../../data/weapons/weapons";
import filtersStore from "../../stores/mobx/filtersStore";
import scrollMemoryStore from "../../stores/mobx/scrollMemoryStore";

export default function NationSelectionPage() {
  const { weaponsBranchPath } = useParams();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);
  const nations = WEAPONS_DATA.selectNation(weaponsBranchPath);

  React.useEffect(() => {
    filtersStore.cancelFilters();
    scrollMemoryStore.cencel();
  }, [weaponsBranchPath]);

  return (
    <>
      <IntroImage imageUrl={pageInfo.introImage} />
      <ContentWrapper>
        <Container>
          <Title>{pageInfo.name.russian}</Title>
          <div className={styles.flagsWrapper}>
            {nations.map(
              (item, index) => item && <Flag key={index} nation={item} />
            )}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
