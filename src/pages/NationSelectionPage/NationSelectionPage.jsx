import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import styles from "./NationSelectionPage.module.scss";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";
import Flag from "../../components/Flag/Flag";
import Title from "../../components/Title/Title";
import { NATIONS } from "../../constants/nations";
import { WEAPONS_DATA } from "../../data/weapons";

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
