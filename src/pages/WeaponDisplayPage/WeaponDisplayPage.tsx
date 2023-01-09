import React from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { ANIMATIONS } from "../../constants/animations";
import { WEAPONS_DATA } from "../../data/weapons/weapons";
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
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import Models from "components/Models/Models";
import { SpecificationsLayout } from "utils/specifications-layout";
import Recommendations from "components/Recommendations/Recommendations";

export default function WeaponDisplayPage() {
  const navigate = useNavigate();
  const { weaponId } = useParams();
  const weapon = WEAPONS_DATA.getById(weaponId);

  // console.log(weaponId);
  console.log(weapon);

  React.useEffect(() => {
    if (!weapon) {
      navigate("*");
    }
  });

  function getSpecification() {
    if (weapon?.specifications) {
      if (WEAPONS_TYPE_METHODS.identity.isArmoredVehicle(weapon))
        return getArmoredSpec();
    }
  }

  function getArmoredSpec() {
    if (!weapon) return;
    return (
      <TextBlock>
        <Spec
          title={
            <Subtitle id="Характеристики" noMargin>
              Характеристики
            </Subtitle>
          }
        >
          <div className={styles.box}>
            {SpecificationsLayout.armored.getCommon(weapon)}
            {SpecificationsLayout.armored.getSizes(weapon)}
            {SpecificationsLayout.armored.getCrew(weapon)}
          </div>
          {SpecificationsLayout.armored.getWeapon(weapon)}
          {SpecificationsLayout.armored.getArmoring(weapon)}
          {SpecificationsLayout.armored.getMobility(weapon)}
        </Spec>
      </TextBlock>
    );
  }

  function getIntro() {
    if (!weapon) return;
    if (weapon.intro)
      return weapon.intro.map((item, index) => (
        <Paragraph key={`${weapon.id}-${index}`}>{item}</Paragraph>
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

  function getSideSpecifications() {
    if (!weapon) return <div></div>;
    if (!weapon.isReady) return <div></div>;
    return (
      <div className={styles.test}>
        {SpecificationsLayout.armored.getCommon(weapon)}
        {SpecificationsLayout.armored.getSizes(weapon)}
        {SpecificationsLayout.armored.getCrew(weapon)}
        {SpecificationsLayout.armored.getWeapon(weapon)}
        {SpecificationsLayout.armored.getArmoring(weapon)}
        {SpecificationsLayout.armored.getMobility(weapon)}
      </div>
    );
  }

  if (!weapon) return <></>;

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
                  {getSpecification()}
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
            {getSideSpecifications()}
          </Container>
        </ContentWrapper>
      </>
    </div>
  );
}
