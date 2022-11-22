import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Container from "../../components/Container/Container";
import IntroImage from "../../components/IntroImage/IntroImage";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import styles from "./UniversalPage.module.scss";
import Title from "../../components/Title/Title";
import Beadcrumbs from "../../components/Beadcrumbs/Beadcrumbs";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";
import Flag from "../../components/Flag/Flag";
import { FLAG_COUNTRY } from "../../components/Flag/constants";
import Title2 from "../../components/Title2/Title2";

export default function UniversalPage() {
  const dispatch = useDispatch();
  const { weaponsType } = useParams();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    documentTitle.addRoute(weaponsType);
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, [dispatch, weaponsType]);

  return (
    <>
      <IntroImage type={pageInfo.introImage} />
      <ContentWrapper>
        <Container>
          <InnerContentWrapper>
            {/* <Title text={pageInfo.title} /> */}
            <Title2>{pageInfo.title}</Title2>
            <div className={styles.flagsWrapper}>
              <Flag country={FLAG_COUNTRY.USSR} />
              <Flag country={FLAG_COUNTRY.germany} />
              <Flag country={FLAG_COUNTRY.USA} />
              <Flag country={FLAG_COUNTRY.unitedKindom} />
              <Flag country={FLAG_COUNTRY.japan} />
            </div>
          </InnerContentWrapper>
        </Container>
      </ContentWrapper>
    </>
  );
}
