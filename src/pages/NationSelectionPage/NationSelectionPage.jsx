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
import Title2 from "../../components/Title2/Title2";
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
          <InnerContentWrapper>
            <Title2>{pageInfo.title}</Title2>
            <div className={styles.flagsWrapper}>
              <Flag nation={NATIONS.USSR} />
              <Flag nation={NATIONS.germany} />
              <Flag nation={NATIONS.USA} />
              <Flag nation={NATIONS.greatBritain} />
              <Flag nation={NATIONS.japan} />
            </div>
          </InnerContentWrapper>
        </Container>
      </ContentWrapper>
    </>
  );
}
