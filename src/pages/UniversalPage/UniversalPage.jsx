import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import WideContainer from "../../components/WideContainer/WideContainer";
import IntroImage from "../../components/IntroImage/IntroImage";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import styles from "./UniversalPage.module.scss";
import Title from "../../components/Title/Title";
import { useDispatch } from "react-redux";
import { documentTitle } from "../../utils/updateDocumentTitle";
import { navigationMiddlewares } from "../../store/navigation/changeActualSectionMiddleware";
import { useLocation, useParams } from "react-router-dom";
import { PAGES_DATA } from "./pagesData";
import Flag from "./Flag";
import { FLAG_COUNTRY } from "./flagsConstants";

export default function UniversalPage() {
  const dispatch = useDispatch();
  const { weaponsType } = useParams();
  const pageInfo = PAGES_DATA.getByPath(useLocation().pathname);

  React.useEffect(() => {
    documentTitle.addRoute(weaponsType);
    dispatch(navigationMiddlewares.setWeaponsActualSection());
  }, []);

  return (
    <>
      <IntroImage type={pageInfo.introImage} />
      <ContentWrapper>
        <WideContainer>
          <InnerContentWrapper>
            <Title text={pageInfo.title} />
            <div className={styles.flagsWrapper}>
              <Flag country={FLAG_COUNTRY.USSR} />
              <Flag country={FLAG_COUNTRY.germany} />
              <Flag country={FLAG_COUNTRY.USA} />
              <Flag country={FLAG_COUNTRY.unitedKindom} />
              <Flag country={FLAG_COUNTRY.japan} />
            </div>
          </InnerContentWrapper>
        </WideContainer>
      </ContentWrapper>
    </>
  );
}
