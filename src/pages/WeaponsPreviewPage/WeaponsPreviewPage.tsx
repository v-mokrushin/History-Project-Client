import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import { NATIONS, NATIONS_METHODS } from "../../constants/nations";
import { WEAPONS_TYPE_METHODS } from "../../constants/weapons";
import { WEAPONS_DATA } from "../../data/weapons/weapons";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";
import Filter from "../../components/Filter/Filter";
import { observer } from "mobx-react";
import scrollMemoryStore from "../../stores/mobx/scrollMemory";
import filtersStore from "../../stores/mobx/filters";
import WeaponPreviewSettings from "components/WeaponPreviewSettings/WeaponPreviewSettings";

const WeaponsPreviewPage = observer(() => {
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE_METHODS.getByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath!);
  const selectedWeapons = React.useMemo(
    () => WEAPONS_DATA.selectWeapons(weaponsBranchPath, nationPath),
    []
  );
  const filteredWeapons = React.useMemo(
    () =>
      WEAPONS_DATA.filterWeapons(selectedWeapons, filtersStore.getFilters()),
    [filtersStore.filters]
  );
  const uniqueDates = React.useMemo(
    () => WEAPONS_DATA.getUniqueDates(filteredWeapons),
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
            {nationObject?.name.russianАccusative}{" "}
            {filteredWeapons.length === 0 || `(${filteredWeapons.length})`}
          </Title>
          <Filter weaponBranch={weaponsBranchObject} />
          <WeaponPreviewSettings />
          {filteredWeapons.length > 0 ? (
            <Timeline
              contentCollection={filteredWeapons}
              uniqueDates={uniqueDates}
              showFlags={nationObject === NATIONS.world}
            />
          ) : (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.notFound} centered50vh />
          )}
        </Container>
      </ContentWrapper>
    </div>
  );
});

export default WeaponsPreviewPage;
