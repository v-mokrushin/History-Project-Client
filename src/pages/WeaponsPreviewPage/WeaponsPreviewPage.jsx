import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Timeline from "../../components/Timeline/Timeline";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import Title from "../../components/Title/Title";
import { NATIONS } from "../../constants/nations";
import { WEAPONS_TYPE } from "../../constants/weapons";
import { WEAPONS_DATA } from "../../data/weapons";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import styles from "./WeaponsPreviewPage.module.scss";

export default function WeaponsPreviewPage() {
  const dispatch = useDispatch();
  const { weaponsTypePath } = useParams();
  const { nationPath } = useParams();
  const weaponsTypeObject = WEAPONS_TYPE.getObjectByPath(weaponsTypePath);
  const nationObject = NATIONS.getObjectByPath(nationPath);
  const [uniqueDates, setUniqueDates] = React.useState([]);
  const [filteredWeapons, setFilteredWeapons] = React.useState(
    WEAPONS_DATA.filter(
      (item) => item.type.baseType.path === weaponsTypePath
    ).filter(
      (item) =>
        nationPath === NATIONS.world.path || item.nation.path === nationPath
    )
  );

  React.useEffect(() => {
    dispatch(navigationMiddlewares.setWeaponsActualSection());

    let dates = filteredWeapons.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    setUniqueDates(dates);
  }, []);

  return (
    <div className={styles.root}>
      <ContentWrapper>
        <Container>
          <Title>
            {weaponsTypeObject.name.russian}{" "}
            {nationObject.name.russianАccusative}
          </Title>
          {filteredWeapons.length > 0 ? (
            <Timeline
              contentCollection={filteredWeapons}
              uniqueDates={uniqueDates}
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
