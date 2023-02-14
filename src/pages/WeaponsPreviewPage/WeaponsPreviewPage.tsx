import React from "react";
import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
import Container from "../../components/Structure/Container/Container";
import ContentWrapper from "../../components/Structure/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Graphics/Timeline/Timeline";
import SpecialLogo from "../../components/Graphics/SpecialLogo/SpecialLogo";
import Title from "../../components/Texts/Title/Title";
import { Nations, NATIONS_METHODS } from "../../constants/nations";
import { WEAPONS_TYPE_METHODS } from "../../constants/weapon-types";
import { SPECIAL_LOGO_TYPE } from "../../components/Graphics/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";
import Filter from "../../components/Controls/Filter/Filter";
import { observer } from "mobx-react";
import scrollMemoryStore from "../../stores/mobx/scrollMemoryStore";
import filtersStore from "../../stores/mobx/filtersStore";
import WeaponPreviewSettings from "components/Controls/WeaponPreviewSettings/WeaponPreviewSettings";
import Filters from "components/Controls/Filters/Filters";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import Text from "components/Texts/Text/Text";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import { getShortNumber } from "utils/common";
import settingsStore, { DisplayOnPreview } from "stores/mobx/settingsStore";
import { ANIMATIONS } from "constants/animations";
import Infographics from "components/Graphics/Infographics/Infographics";
import WeaponCard from "components/Cards/WeaponCard/WeaponCard";
import { Weapons } from "data/weapons/weapons";

const WeaponsPreviewPage = observer(() => {
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE_METHODS.getByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath);
  const selectedWeapons: TWeapon[] = React.useMemo(
    () => Weapons.selectWeapons(weaponsBranchPath, nationPath),
    []
  );
  const filteredWeapons: TWeapon[] = React.useMemo(
    () => Weapons.filterWeapons(selectedWeapons, filtersStore.getFilters()),
    [filtersStore.filters]
  );
  const uniqueDates = React.useMemo(
    () => Weapons.getUniqueDates(filteredWeapons),
    [filtersStore.filters]
  );
  const [preview, setPreview] = React.useState({
    weapon: filteredWeapons[1],
    toShow: false,
    element: document.documentElement,
  });

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
      {preview.toShow && (
        <div
          className={styles.preview}
          style={{
            left:
              preview.element.getBoundingClientRect().x +
              window.pageXOffset +
              preview.element.getBoundingClientRect().width / 2 +
              "px",
            top:
              preview.element.getBoundingClientRect().y +
              window.pageYOffset +
              -80 +
              "px",
          }}
        >
          <WeaponCard weapon={preview.weapon} showFlag />
        </div>
      )}
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsBranchObject.name.russian}{" "}
            {nationObject.name.russianАccusative}{" "}
            {filteredWeapons.length === 0 || `(${filteredWeapons.length})`}
          </Title>
          <Filters weapons={selectedWeapons} />
          <WeaponPreviewSettings />
          {filteredWeapons.length > 0 ? (
            settingsStore.displayOnPreview === DisplayOnPreview.weapons ? (
              <Timeline
                contentCollection={filteredWeapons}
                uniqueDates={uniqueDates}
                showFlags={NATIONS_METHODS.identity.isWorld(nationObject)}
              />
            ) : (
              <Infographics weapons={filteredWeapons} setPreview={setPreview} />
            )
          ) : (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.notFound} vertiacalFill />
          )}
        </Container>
      </ContentWrapper>
    </div>
  );
});

export default WeaponsPreviewPage;
