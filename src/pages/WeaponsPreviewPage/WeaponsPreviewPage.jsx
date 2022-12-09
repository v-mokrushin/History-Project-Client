import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import { NATIONS, NATIONS_METHODS } from "../../constants/nations";
import { WEAPONS_TYPE } from "../../constants/weapons";
import { WEAPONS_DATA } from "../../data/weapons";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";
import Filter from "../../components/Filter/Filter";

export default function WeaponsPreviewPage() {
  const dispatch = useDispatch();
  const { weaponsBranchPath } = useParams();
  const { nationPath } = useParams();
  const weaponsBranchObject = WEAPONS_TYPE.getObjectByPath(weaponsBranchPath);
  const nationObject = NATIONS_METHODS.getObjectByPath(nationPath);
  const selectedWeapons = React.useMemo(selectWeapons, []);
  const [filters, setFilters] = React.useState({});
  const filteredWeapons = React.useMemo(() => filterWeapons(), [filters]);
  const uniqueDates = React.useMemo(getUniqueDates, [filteredWeapons]);

  function selectWeapons() {
    return WEAPONS_DATA.filter(
      (item) => item.type.baseType.path === weaponsBranchPath
    ).filter(
      (item) =>
        nationPath === NATIONS.world.path || item.nation.path === nationPath
    );
  }

  function filterWeapons() {
    if (Object.keys(filters).length === 0) {
      return selectedWeapons;
    } else {
      return selectedWeapons.filter((item) => item.type === filters.type);
    }
  }

  function getUniqueDates() {
    let dates = filteredWeapons.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    return dates;
  }

  React.useEffect(() => {
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, []);

  return (
    <div className={styles.root}>
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsBranchObject.name.russian}{" "}
            {nationObject.name.russianАccusative}
          </Title>
          <Filter weaponBranch={weaponsBranchObject} setFilters={setFilters} />
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
}

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
