import React from "react";
import styles from "./ArticleCreatorPage.module.scss";
import classNames from "classnames";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import Title from "components/Texts/Title/Title";
import { Pages } from "constants/pages";
import { useLocation, useNavigate } from "react-router-dom";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import WarningPage from "pages/WarningPage/WarningPage";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";
import { observer } from "mobx-react-lite";
import AvationCreatorForm from "./AviationCreatorForm";
import { Alert, AlertTitle } from "@mui/material";
import Text from "components/Texts/Text/Text";
import { authorizationStore } from "stores/mobx/authorizationStore";
import { DocumentTitle } from "utils/document-title";
import { alertsStore } from "stores/mobx/alertsStore";

interface IArtilcleCreatorPageProps {
  className?: string;
}

const ArtilcleCreatorPage: React.FC<IArtilcleCreatorPageProps> = observer(
  ({ className }) => {
    const pageInfo = Pages.getByPath(useLocation().pathname);
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!authorizationStore.isUserAuthorized) {
        navigate("/");
        alertsStore.add(
          "error",
          "Авторизуйтесь, чтобы получить доступ к созданию статей."
        );
      } else {
        DocumentTitle.set("Создание статьи");
        alertsStore.add("info", `Доступно создание статей только об авиации.`);
      }
    }, [authorizationStore.isUserAuthorized]);

    if (!pageInfo)
      return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

    return (
      <div className={classNames(styles.root, className)}>
        <>
          <VideoIntro size="half" path="/videos/building.mp4" />
          <ContentWrapper>
            <Container>
              <Title>{pageInfo.name.russian}</Title>
              <AvationCreatorForm />
            </Container>
          </ContentWrapper>
        </>
      </div>
    );
  }
);

export default ArtilcleCreatorPage;
