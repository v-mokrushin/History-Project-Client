import React from "react";
import ContentWrapper from "../../../components/Structure/ContentWrapper/ContentWrapper";
import Container from "../../../components/Structure/Container/Container";
import IntroImage from "../../../components/Graphics/IntroImage/IntroImage";
import styles from "./NationSelectionPage.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { Pages } from "../../../constants/pages";
import Flag from "../../../components/Graphics/Flag/Flag";
import Title from "../../../components/Texts/Title/Title";
import { Weapons } from "../../../data/weapons/weapons";
import filtersStore from "../../../stores/mobx/filtersStore";
import scrollMemoryStore from "../../../stores/mobx/scrollMemoryStore";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import settingsStore from "stores/mobx/settingsStore";

export default function NationSelectionPage() {
  const { weaponsBranchPath } = useParams();
  const pageInfo = Pages.getByPath(useLocation().pathname);
  const nations = Weapons.selectNation(weaponsBranchPath);

  React.useEffect(() => {
    filtersStore.cancelFilters();
    settingsStore.resetDisplayOnPreview();
    scrollMemoryStore.cencel();
  }, [weaponsBranchPath]);

  if (!pageInfo)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

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
              (item, index) => item && <Flag key={index} nation={item} showLabel/>
            )}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
