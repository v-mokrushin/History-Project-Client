import React from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { ANIMATIONS } from "../../constants/animations";
import { WEAPONS } from "../../data/weapons/weapons";
import styles from "./WeaponDisplayPage.module.scss";
import Spec from "../../components/Spec/Spec";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import Paragraph from "../../components/Paragraph/Paragraph";
import TextBlock from "../../components/TextBlock/TextBlock";
import DesktopContentList from "../../components/DesktopContentList/DesktopContentList";
import MobileContentList from "../../components/MobileContentList/MobileContentList";
import { CONTAINER_TYPES } from "../../components/Container/constants";
import ReadingProgressBar from "../../components/ReadingProgressBar/ReadingProgressBar";
import YTFrame from "../../components/YTFrame/YTFrame";
import Models from "components/Models/Models";
import Recommendations from "components/Recommendations/Recommendations";
import SideSpec from "components/SideSpec/SideSpec";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";

export default function WeaponDisplayPage() {
  const { weaponId } = useParams();
  const weapon = WEAPONS.getById(weaponId);

  function getIntro() {
    if (!weapon) return;
    if (weapon.intro)
      return weapon.intro.map((item, index) => (
        <Paragraph key={`${weapon.id}-intro-${index}`}>{item}</Paragraph>
      ));
  }

  function getVideomaterials() {
    if (!weapon) return;
    if (weapon.videomaterials)
      return (
        <TextBlock>
          <Subtitle id="Видеоматериалы">Видеоматериалы</Subtitle>
          <YTFrame links={weapon.videomaterials} id={weapon.id!} />
        </TextBlock>
      );
  }

  function getModels() {
    if (!weapon) return;
    if (weapon.models)
      return (
        <TextBlock>
          <Subtitle id="Модели">Модели</Subtitle>
          <Models models={weapon.models} />
        </TextBlock>
      );
  }

  if (!weapon)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root)}>
      <>
        <ReadingProgressBar />
        {weapon.gallery && <IntroImage imageUrl={weapon.gallery.icon} />}
        <ContentWrapper className={ANIMATIONS.fadeIn}>
          <Container type={CONTAINER_TYPES.aside}>
            <DesktopContentList list={weapon.sections} />
            <Container>
              <MobileContentList list={weapon.sections} />
              <Title id="Введение">{weapon.name}</Title>
              {weapon.isReady ? (
                <>
                  {getIntro()}
                  <TextBlock>
                    <Spec weapon={weapon} />
                  </TextBlock>
                  {weapon.JSXComponent}
                  {getVideomaterials()}
                  {getModels()}
                  <TextBlock>
                    <Subtitle id="Читайте также">Читайте также</Subtitle>
                    <Recommendations weapon={weapon} />
                  </TextBlock>
                </>
              ) : (
                <SpecialLogo
                  type={SPECIAL_LOGO_TYPE.inDevelopment}
                  centered75vh
                />
              )}
            </Container>
            <SideSpec weapon={weapon} />
          </Container>
        </ContentWrapper>
      </>
    </div>
  );
}
