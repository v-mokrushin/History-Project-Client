import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./NationSelectionPage.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { PAGES } from "../../constants/pages";
import Flag from "../../components/Flag/Flag";
import Title from "../../components/Title/Title";
import { WEAPONS } from "../../data/weapons/weapons";
import filtersStore from "../../stores/mobx/filtersStore";
import scrollMemoryStore from "../../stores/mobx/scrollMemoryStore";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";

export default function NationSelectionPage() {
  const { weaponsBranchPath } = useParams();
  const pageInfo = PAGES.getByPath(useLocation().pathname);
  const nations = WEAPONS.selectNation(weaponsBranchPath);

  React.useEffect(() => {
    filtersStore.cancelFilters();
    scrollMemoryStore.cencel();
  }, [weaponsBranchPath]);

  if (!pageInfo)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  console.log("render");

  return (
    <>
      <IntroImage
        imageUrl={pageInfo.introImage}
        animated
        shouldThrowAnimation
      />
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
