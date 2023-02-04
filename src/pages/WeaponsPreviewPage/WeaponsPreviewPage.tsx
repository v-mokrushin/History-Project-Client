import React from "react";
import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import { NATIONS, NATIONS_METHODS } from "../../constants/nations";
import { WEAPONS_TYPE_METHODS } from "../../constants/weapon-types";
import { WEAPONS } from "../../data/weapons/weapons";
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
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import Text from "components/Text/Text";
import Subtitle from "components/Subtitle/Subtitle";
import { getShortNumber } from "utils/common";

const WeaponsPreviewPage = observer(() => {
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE_METHODS.getByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath);
  const selectedWeapons: TWeapon[] = React.useMemo(
    () => WEAPONS.selectWeapons(weaponsBranchPath, nationPath),
    []
  );
  const filteredWeapons: TWeapon[] = React.useMemo(
    () => WEAPONS.filterWeapons(selectedWeapons, filtersStore.getFilters()),
    [filtersStore.filters]
  );
  const uniqueDates = React.useMemo(
    () => WEAPONS.getUniqueDates(filteredWeapons),
    [filtersStore.filters]
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

  const max = Math.max(
    ...filteredWeapons
      .filter((item) => item.specifications.common.numberOfIssued)
      .map((item) => item.specifications.common.numberOfIssued!)
  );

  return (
    <div className={styles.root}>
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsBranchObject.name.russian}{" "}
            {nationObject.name.russianАccusative}{" "}
            {filteredWeapons.length === 0 || `(${filteredWeapons.length})`}
          </Title>
          <Filters weapons={selectedWeapons} />
          <WeaponPreviewSettings />
          <Subtitle noMargin>Произведено</Subtitle>
          <div className={styles.infographic}>
            <div className={styles.section1}>
              {filteredWeapons
                .filter((item) => item.specifications.common.numberOfIssued)
                .sort(
                  (a, b) =>
                    b.specifications.common.numberOfIssued! -
                    a.specifications.common.numberOfIssued!
                )
                .map((item) => (
                  <NavLink
                    key={item.id!}
                    to={item.id!}
                    className={styles.diagramBox}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className={styles.column}
                      style={{
                        height:
                          (item.specifications.common.numberOfIssued! / max) *
                            100 +
                          "%",
                      }}
                    >
                      <Text className={styles.value}>
                        {getShortNumber(
                          item.specifications.common.numberOfIssued!
                        )}
                      </Text>
                    </div>
                  </NavLink>
                ))}
            </div>
            <div className={styles.section2}>
              {filteredWeapons
                .filter((item) => item.specifications.common.numberOfIssued)
                .sort(
                  (a, b) =>
                    b.specifications.common.numberOfIssued! -
                    a.specifications.common.numberOfIssued!
                )
                .map((item) => (
                  <NavLink
                    to={item.id!}
                    key={item.id!}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={styles.nameBox}>
                      <Text className={styles.name}>
                        {item.shortName ? item.shortName : item.name}
                      </Text>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>

          {filteredWeapons.length > 0 ? (
            <Timeline
              contentCollection={filteredWeapons}
              uniqueDates={uniqueDates}
              showFlags={NATIONS_METHODS.identity.isWorld(nationObject)}
            />
          ) : (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.notFound} vertiacalFill />
          )}
        </Container>
      </ContentWrapper>
    </div>
  );
});

export default WeaponsPreviewPage;
