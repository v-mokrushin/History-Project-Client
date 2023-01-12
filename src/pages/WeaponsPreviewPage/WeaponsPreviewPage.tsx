import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import { NATIONS, NATIONS_METHODS } from "../../constants/nations";
import { WEAPONS_TYPE_METHODS } from "../../constants/weapon-types";
import { IWeapon, WEAPONS } from "../../data/weapons/weapons";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";
import Filter from "../../components/Filter/Filter";
import { observer } from "mobx-react";
import scrollMemoryStore from "../../stores/mobx/scrollMemoryStore";
import filtersStore from "../../stores/mobx/filtersStore";
import WeaponPreviewSettings from "components/WeaponPreviewSettings/WeaponPreviewSettings";
import Filters from "components/Filters/Filters";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";

const WeaponsPreviewPage = observer(() => {
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE_METHODS.getByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath!);
  const selectedWeapons: IWeapon[] = React.useMemo(
    () => WEAPONS.selectWeapons(weaponsBranchPath, nationPath),
    []
  );
  const filteredWeapons: IWeapon[] = React.useMemo(
    () => WEAPONS.filterWeapons(selectedWeapons, filtersStore.getFilters()),
    [filtersStore.filters]
  );
  const uniqueDates = React.useMemo(
    () => WEAPONS.getUniqueDates(filteredWeapons),
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

  if (!weaponsBranchObject || !nationObject)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={styles.root}>
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsBranchObject.name.russian}{" "}
            {nationObject.name.russianАccusative}{" "}
            {filteredWeapons.length === 0 || `(${filteredWeapons.length})`}
          </Title>
          <Filters selectedWeapons={selectedWeapons} />
          <WeaponPreviewSettings />
          {filteredWeapons.length > 0 ? (
            <Timeline
              contentCollection={filteredWeapons}
              uniqueDates={uniqueDates}
              showFlags={NATIONS_METHODS.identity.isWorld(nationObject)}
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
