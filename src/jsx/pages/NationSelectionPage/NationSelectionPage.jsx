import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import styles from "./NationSelectionPage.module.scss";
import { useDispatch } from "react-redux";
import { navigationMiddlewares } from "../../../javascript/store/redux/navigation/changeActualSectionMiddleware";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../../javascript/constants/pages";
import Flag from "../../components/Flag/Flag";
import Title from "../../components/Title/Title";
import { NATIONS } from "../../../javascript/constants/nations";
import { WEAPONS_DATA } from "../../../javascript/data/weapons";
import filtersStore from "../../../javascript/store/mobx/filters";
import scrollMemoryStore from "../../../javascript/store/mobx/scrollMemory";

export default function NationSelectionPage() {
  const dispatch = useDispatch();
  const { weaponsBranchPath } = useParams();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);
  const nations = selectNations();

  function selectNations() {
    return [
      NATIONS.world,
      ...Array.from(
        new Set(
          WEAPONS_DATA.filter(
            (item) => item.type.branch.path === weaponsBranchPath
          ).map((item) => item.nation)
        )
      ),
    ];
  }

  React.useEffect(() => {
    dispatch(navigationMiddlewares.setWeaponsActualSection());
    filtersStore.cancelFilters();
    scrollMemoryStore.cencel();
  }, [dispatch, weaponsBranchPath]);

  return (
    <>
      <IntroImage imageUrl={pageInfo.introImage} />
      <ContentWrapper>
        <Container>
          <Title>{pageInfo.name.russian}</Title>
          <div className={styles.flagsWrapper}>
            {nations.map((item, index) => (
              <Flag key={index} nation={item} />
            ))}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
