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

export default function NationSelectionPage() {
  const dispatch = useDispatch();
  const { weaponsType } = useParams();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, [dispatch, weaponsType]);

  return (
    <>
      <IntroImage type={pageInfo.introImage} />
      <ContentWrapper>
        <Container>
          <Title>{pageInfo.title}</Title>
          <div className={styles.flagsWrapper}>
            {Object.values(NATIONS).map(
              (item, index) =>
                typeof item === "object" && <Flag key={index} nation={item} />
            )}
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
}
