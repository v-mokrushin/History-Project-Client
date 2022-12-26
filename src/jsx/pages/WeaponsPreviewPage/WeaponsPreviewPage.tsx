import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import {
  NATIONS,
  NATIONS_METHODS,
} from "../../../javascript/constants/nations";
import { WEAPONS_TYPE } from "../../../javascript/constants/weapons";
import {
  WEAPONS_DATA,
  WEAPONS_DATA_METHODS,
} from "../../../javascript/data/weapons";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";
import Filter from "../../components/Filter/Filter";
import { observer } from "mobx-react";
import scrollMemoryStore from "../../../javascript/store/mobx/scrollMemory";
import filtersStore from "../../../javascript/store/mobx/filters";

const WeaponsPreviewPage = observer(() => {
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE.getObjectByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath);
  const selectedWeapons = React.useMemo(
    () => WEAPONS_DATA_METHODS.selectWeapons(weaponsBranchPath, nationPath),
    []
  );
  const filteredWeapons = React.useMemo(
    () =>
      WEAPONS_DATA_METHODS.filterWeapons(
        selectedWeapons,
        filtersStore.isEmpty(),
        filtersStore.getFilters()
      ),
    [filtersStore.filters]
  );
  const uniqueDates = React.useMemo(
    () => WEAPONS_DATA_METHODS.getUniqueDates(filteredWeapons),
    [filteredWeapons]
  );

  React.useEffect(() => {
    const scrollEvent = () => {
      scrollMemoryStore.setValue(window.scrollY);
    };

    scrollMemoryStore.activate();
    document.addEventListener("scroll", scrollEvent);
    scrollMemoryStore.shouldRemember = true;

    return () => {
      document.removeEventListener("scroll", scrollEvent);
      scrollMemoryStore.shouldRemember = false;
    };
  }, []);

  return (
    <div className={styles.root}>
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsBranchObject.name.russian}{" "}
            {nationObject.name.russianАccusative}
          </Title>
          <Filter weaponBranch={weaponsBranchObject} />
          {filteredWeapons.length > 0 ? (
            <Timeline
              contentCollection={filteredWeapons}
              uniqueDates={uniqueDates}
              showFlags={nationObject === NATIONS.world}
            />
          ) : (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.inDevelopment} centered50vh />
          )}
        </Container>
      </ContentWrapper>
    </div>
  );
});

export default WeaponsPreviewPage;

{
  /* {uniqueDates.map((year, yearIndex) => (
                <TimelineItem year={year} key={yearIndex}>
                  {filteredWeapons
                    .filter((item) => item.adoptedIntoServiceDate === year)
                    .map((val, valIndex) => (
                      <PreviewWeaponCard weapon={val} key={valIndex} />
                    ))}
                </TimelineItem>
              ))} */
}
