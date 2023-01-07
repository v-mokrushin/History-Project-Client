import React, { useEffect } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { ANIMATIONS } from "../../constants/animation";
import { WEAPONS_DATA } from "../../data/weapons/weapons";
import styles from "./WeaponDisplayPage.module.scss";
import SpecLine from "../../components/SpecLine/SpecLine";
import SpecSection from "../../components/SpecSection/SpecSection";
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
import { WEAPONS_TYPE } from "constants/weapons";
import Flag from "components/Flag/Flag";

export default function WeaponDisplayPage() {
  const navigate = useNavigate();
  const { weaponId } = useParams();
  const weapon = WEAPONS_DATA.getById(weaponId);

  useEffect(() => {
    if (!weapon) {
      navigate("*");
    }
  });

  function getSpecification() {
    if (weapon.specifications) {
      if (weapon.branch.path === WEAPONS_TYPE.armoredVehicle.path)
        return getArmoredSpec();
    }
  }

  function getArmoredSpec() {
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
            <SpecSection
              toShow={Boolean(weapon.specifications.common)}
              title="Общее"
            >
              <SpecLine crit="Страна" val={weapon.nation.name.russian} />
              <SpecLine
                crit="Тип"
                val={weapon.type.name.russian.toLowerCase()}
              />
              <SpecLine
                crit="Разработчик"
                val={weapon.specifications.common?.developer}
              />
              <SpecLine
                crit="Главный конструктор"
                val={weapon.specifications.common?.chiefDesigner}
              />
              <SpecLine
                crit="Производитель"
                val={weapon.specifications.common?.manufacturer}
              />
              <SpecLine
                crit="Год разработки"
                val={weapon.specifications.common?.developmentYear}
              />
              <SpecLine
                crit="Годы производства"
                val={
                  weapon.specifications.common?.productionYears[0] +
                  " - " +
                  weapon.specifications.common?.productionYears[1]
                }
              />
              <SpecLine
                crit="Поизведено"
                val={weapon.specifications.common?.numberOfIssued}
                mesure="шт."
              />
              <SpecLine
                crit="Годы эксплуатации"
                val={
                  weapon.specifications.common?.exploitationYears[0] +
                  " - " +
                  weapon.specifications.common?.exploitationYears[1]
                }
              />
            </SpecSection>
            <SpecSection
              toShow={Boolean(weapon.specifications.sizes)}
              title="Размеры и масса"
            >
              <SpecLine
                crit="Масса"
                val={weapon.specifications.sizes?.weight}
                mesure="тонн"
              />
              <SpecLine
                crit="Длина"
                val={weapon.specifications.sizes?.length}
                mesure="мм"
              />
              <SpecLine
                crit="Ширина"
                val={weapon.specifications.sizes?.width}
                mesure="мм"
              />
              <SpecLine
                crit="Высота"
                val={weapon.specifications.sizes?.height}
                mesure="мм"
              />
              <SpecLine
                crit="Клиренс"
                val={weapon.specifications.sizes?.clearance}
                mesure="мм"
              />
            </SpecSection>
            <SpecSection
              title="Экипаж"
              toShow={Boolean(weapon.specifications.crew)}
            >
              <SpecLine
                crit="Количество"
                val={weapon.specifications.crew?.size}
                mesure="человек(а)"
              />
              <SpecLine
                crit="Состав"
                val={weapon.specifications.crew?.structure}
              />
            </SpecSection>
          </div>
          <SpecSection
            title="Вооружение"
            toShow={Boolean(weapon.specifications.weapon)}
          >
            <SpecLine
              crit="Марка орудия"
              val={weapon.specifications.weapon?.cannon.trademark}
            />
            <SpecLine
              crit="Калибр орудия"
              val={weapon.specifications.weapon?.cannon.caliber}
              mesure="мм"
            />
            <SpecLine
              crit="Длина ствола"
              val={weapon.specifications.weapon?.cannon.length}
              mesure=" калибров"
            />
            <SpecLine
              crit="Тип орудия"
              val={weapon.specifications.weapon?.cannon.type}
            />
            <SpecLine
              crit="Боеприпасы"
              val={weapon.specifications.weapon?.cannon.ammunition}
            />
            <SpecLine
              crit="Боекомплект орудия"
              val={weapon.specifications.weapon?.сannonАmmunition}
              mesure="выстрелов"
            />
            <SpecLine
              crit="Тип заряжания"
              val={weapon.specifications.weapon?.cannon.chargingType}
            />
            <SpecLine
              crit="Боевая скорострельность"
              val={weapon.specifications.weapon?.cannon.combatFireRate}
              mesure="выстр./мин."
            />
            <SpecLine
              crit="Дульный тормоз"
              val={weapon.specifications.weapon?.cannon.muzzleBrake}
            />
            <SpecLine
              crit="Тип спуска"
              val={weapon.specifications.weapon?.cannon.trigger}
            />
            <SpecLine
              crit="Углы вертик. наведения"
              val={weapon.specifications.weapon?.verticalGA}
            />
            <SpecLine
              crit="Углы горизон. наведения"
              val={weapon.specifications.weapon?.horizontalGA}
            />
            <SpecLine
              crit="Прицелы"
              val={weapon.specifications.weapon?.sights}
            />
            <SpecLine
              crit="Пулеметы"
              val={weapon.specifications.weapon?.machinegun}
            />
            <SpecLine
              crit="Боекомплект пулеметов, выстр."
              val={weapon.specifications.weapon?.machinegunАmmunition}
            />
          </SpecSection>
          <SpecSection
            title="Бронирование"
            toShow={Boolean(weapon.specifications.armoring)}
          >
            <SpecLine
              crit="Тип брони"
              val={weapon.specifications.armoring?.type}
            />
            <SpecLine
              crit="Лоб корпуса (верх)"
              val={weapon.specifications.armoring?.body.foreheadTop}
            />
            <SpecLine
              crit="Лоб корпуса (низ)"
              val={weapon.specifications.armoring?.body.foreheadBottom}
            />
            <SpecLine
              crit="Борт корпуса (верх)"
              val={weapon.specifications.armoring?.body.boardTop}
            />
            <SpecLine
              crit="Борт корпуса (низ)"
              val={weapon.specifications.armoring?.body.boardBottom}
            />
            <SpecLine
              crit="Корма корпуса (верх)"
              val={weapon.specifications.armoring?.body.sternTop}
            />
            <SpecLine
              crit="Корма корпуса (низ)"
              val={weapon.specifications.armoring?.body.sternBottom}
            />
            <SpecLine
              crit="Днище"
              val={weapon.specifications.armoring?.body.bottom}
            />
            <SpecLine
              crit="Крыша корпуса"
              val={weapon.specifications.armoring?.body.roof}
            />
            <SpecLine
              crit="Лоб башни"
              val={weapon.specifications.armoring?.tower.forehead}
            />
            <SpecLine
              crit="Маска орудия"
              val={weapon.specifications.armoring?.tower.gunMask}
            />
            <SpecLine
              crit="Борт башни"
              val={weapon.specifications.armoring?.tower.board}
            />
            <SpecLine
              crit="Корма башни"
              val={weapon.specifications.armoring?.tower.stern}
            />
            <SpecLine
              crit="Крыша башни"
              val={weapon.specifications.armoring?.tower.roof}
            />
          </SpecSection>
          <SpecSection
            title="Подвижность"
            toShow={Boolean(weapon.specifications.mobility)}
          >
            <SpecLine
              crit="Марка двигателя"
              val={weapon.specifications.mobility?.engine.trademark}
            />
            <SpecLine
              crit="Тип двигателя"
              val={weapon.specifications.mobility?.engine.type}
            />
            <SpecLine
              crit="Конфигурация двигателя"
              val={weapon.specifications.mobility?.engine.config}
            />
            <SpecLine
              crit="Мощность двигателя"
              val={weapon.specifications.mobility?.engine.power}
              mesure="л.с."
            />
            <SpecLine
              crit="Объем двигателя"
              val={weapon.specifications.mobility?.engine.capacity}
              mesure="л"
            />
            <SpecLine
              crit="Скорость по шоссе"
              val={weapon.specifications.mobility?.speed?.road}
              mesure="км/ч"
            />
            <SpecLine
              crit="Скорость по пересечённой местности"
              val={weapon.specifications.mobility?.speed?.roughTerrain}
              mesure="км/ч"
            />
            <SpecLine
              crit="Запас хода по шоссе"
              val={weapon.specifications.mobility?.powerReserve?.road}
              mesure="км"
            />
            <SpecLine
              crit="Запас хода по пересечённой местности"
              val={weapon.specifications.mobility?.powerReserve?.roughTerrain}
              mesure="км"
            />
            <SpecLine
              crit="Удельная мощность"
              val={weapon.specifications.mobility?.specificPower}
              mesure="л.с./т"
            />
            <SpecLine
              crit="Тип подвески"
              val={weapon.specifications.mobility?.suspensionType}
            />
            <SpecLine
              crit="Удельное давление на грунт"
              val={weapon.specifications.mobility?.specificPressure}
              mesure="кг/см²"
            />
            <SpecLine
              crit="Преодолеваемый подъем"
              val={weapon.specifications.mobility?.surmount?.ascent}
              mesure="°"
            />
            <SpecLine
              crit="Преодолеваемая стенка"
              val={weapon.specifications.mobility?.surmount?.wall}
              mesure="м"
            />
            <SpecLine
              crit="Преодолеваемый ров"
              val={weapon.specifications.mobility?.surmount?.moat}
              mesure="м"
            />
            <SpecLine
              crit="Преодолеваемый брод"
              val={weapon.specifications.mobility?.surmount?.ford}
              mesure="м"
            />
          </SpecSection>
        </Spec>
      </TextBlock>
    );
  }

  function getIntro() {
    if (weapon.intro)
      return weapon.intro.map((item, index) => (
        <Paragraph key={index}>{item}</Paragraph>
      ));
  }

  function getVideomaterials() {
    if (weapon.videomaterials)
      return (
        <>
          <Subtitle id="Видеоматериалы">Видеоматериалы</Subtitle>
          <YTFrame links={weapon.videomaterials} id={weapon.id} />
        </>
      );
  }

  return (
    <div className={classNames(styles.root)}>
      {weapon && (
        <>
          <ReadingProgressBar />
          <IntroImage imageUrl={weapon.gallery.icon} />
          <ContentWrapper className={ANIMATIONS.fadeIn}>
            <Container type={CONTAINER_TYPES.aside}>
              <DesktopContentList list={weapon.sections} />
              <Container>
                <MobileContentList list={weapon.sections} />
                <Title id="Введение">{weapon.name}</Title>
                {/* <p className={styles.subtitle}>
                  {weapon.type.name.russian +
                    " " +
                    weapon.nation.name.russianАccusative}
                </p> */}
                {weapon.isReady ? (
                  <>
                    {getIntro()}
                    {getSpecification()}
                    {weapon.JSXComponent}
                    {getVideomaterials()}
                  </>
                ) : (
                  <SpecialLogo
                    type={SPECIAL_LOGO_TYPE.inDevelopment}
                    centered75vh
                  />
                )}
              </Container>
              <div></div>
            </Container>
          </ContentWrapper>
        </>
      )}
    </div>
  );
}
