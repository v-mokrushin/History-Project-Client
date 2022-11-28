import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import InnerContentWrapper from "../../components/InnerContentWrapper/InnerContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import Subtitle from "../../components/Subtitle/Subtitle";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { ANIMATIONS } from "../../constants/animation";
import { WEAPONS_DATA } from "../../data/weapons";
import styles from "./WeaponDisplayPage.module.scss";
import SpecLine from "../../components/SpecLine/SpecLine";
import SpecSection from "../../components/SpecSection/SpecSection";
import Spec from "../../components/Spec/Spec";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import Paragraph from "../../components/Paragraph/Paragraph";
import TextBlock from "../../components/TextBlock/TextBlock";
import { Link, NavLink } from "react-router-dom";
import ContentList from "../../components/ContentList/ContentList";

export default function WeaponDisplayPage() {
  const { weaponId } = useParams();
  const weapon = WEAPONS_DATA.find((item) => item.id === weaponId);

  return (
    <div className={classNames(styles.root)}>
      <IntroImage imageUrl={weapon.gallery.icon} />
      <ContentWrapper className={ANIMATIONS.fadeIn}>
        <Container>
          <Title>{weapon.name}</Title>
          {/* <ContentList /> */}
          {weapon.intro &&
            weapon.intro.map((item) => <Paragraph>{item}</Paragraph>)}
          {weapon.specifications ? (
            <TextBlock>
              <Subtitle id="ss">Характеристики</Subtitle>
              <Spec>
                <div className={styles.box}>
                  <SpecSection title="Общее">
                    <SpecLine crit="Страна" val={weapon.nation.name.russian} />
                    <SpecLine
                      crit="Тип"
                      val={weapon.type.name.russian.toLowerCase()}
                    />
                    <SpecLine
                      crit="Разработчик"
                      val={weapon.specifications.common.developer}
                    />
                    <SpecLine
                      crit="Производитель"
                      val={weapon.specifications.common.manufacturer}
                    />
                    <SpecLine
                      crit="Год разработки"
                      val={weapon.specifications.common.developmentYear}
                    />
                    <SpecLine
                      crit="Годы производства"
                      val={
                        weapon.specifications.common.productionYears[0] +
                        " - " +
                        weapon.specifications.common.productionYears[1]
                      }
                    />
                    <SpecLine
                      crit="Поизведено"
                      val={weapon.specifications.common.numberOfIssued}
                      mesure="шт."
                    />
                    <SpecLine
                      crit="Годы эксплуатации"
                      val={
                        weapon.specifications.common.exploitationYears[0] +
                        " - " +
                        weapon.specifications.common.exploitationYears[1]
                      }
                    />
                  </SpecSection>
                  <SpecSection title="Размеры и масса">
                    <SpecLine
                      crit="Масса"
                      val={weapon.specifications.sizes.weight}
                      mesure="тонн"
                    />
                    <SpecLine
                      crit="Длина"
                      val={weapon.specifications.sizes.length}
                      mesure="мм"
                    />
                    <SpecLine
                      crit="Ширина"
                      val={weapon.specifications.sizes.width}
                      mesure="мм"
                    />
                    <SpecLine
                      crit="Высота"
                      val={weapon.specifications.sizes.height}
                      mesure="мм"
                    />
                    <SpecLine
                      crit="Клиренс"
                      val={weapon.specifications.sizes.clearance}
                      mesure="мм"
                    />
                  </SpecSection>
                  <SpecSection title="Экипаж">
                    <SpecLine
                      crit="Количество"
                      val={weapon.specifications.crew.size}
                      mesure="человек(а)"
                    />
                    <SpecLine
                      crit="Состав"
                      val={weapon.specifications.crew.structure}
                    />
                  </SpecSection>
                </div>
                <SpecSection title="Вооружение">
                  <SpecLine
                    crit="Марка орудия"
                    val={weapon.specifications.weapon.cannon.trademark}
                  />
                  <SpecLine
                    crit="Калибр орудия"
                    val={weapon.specifications.weapon.cannon.caliber}
                  />
                  <SpecLine
                    crit="Длина ствола"
                    val={weapon.specifications.weapon.cannon.length}
                  />
                  <SpecLine
                    crit="Тип орудия"
                    val={weapon.specifications.weapon.cannon.type}
                  />
                  <SpecLine
                    crit="Боеприпасы"
                    val={weapon.specifications.weapon.cannon.ammunition}
                  />
                  <SpecLine
                    crit="Боекомплект орудия"
                    val={weapon.specifications.weapon.сannonАmmunition}
                    mesure="выстрелов"
                  />
                  <SpecLine
                    crit="Тип заряжания"
                    val={weapon.specifications.weapon.cannon.chargingType}
                  />
                  <SpecLine
                    crit="Боевая скорострельность"
                    val={weapon.specifications.weapon.cannon.combatFireRate}
                    mesure="выстр./мин."
                  />
                  <SpecLine
                    crit="Дульный тормоз"
                    val={weapon.specifications.weapon.cannon.muzzleBrake}
                  />
                  <SpecLine
                    crit="Тип спуска"
                    val={weapon.specifications.weapon.cannon.trigger}
                  />
                  <SpecLine
                    crit="Углы вертик. наведения"
                    val={weapon.specifications.weapon.verticalGA}
                  />
                  <SpecLine
                    crit="Углы горизон. наведения"
                    val={weapon.specifications.weapon.horizontalGA}
                  />
                  <SpecLine
                    crit="Прицелы"
                    val={weapon.specifications.weapon.sights}
                  />
                  <SpecLine
                    crit="Пулеметы"
                    val={weapon.specifications.weapon.machinegun}
                  />
                  <SpecLine
                    crit="Боекомплект пулеметов, выстр."
                    val={weapon.specifications.weapon.machinegunАmmunition}
                  />
                </SpecSection>
                <SpecSection title="Подвижность">
                  <SpecLine
                    crit="Марка двигателя"
                    val={weapon.specifications.mobility.engine.trademark}
                  />
                  <SpecLine
                    crit="Тип двигателя"
                    val={weapon.specifications.mobility.engine.type}
                  />
                  <SpecLine
                    crit="Конфигурация двигателя"
                    val={weapon.specifications.mobility.engine.config}
                  />
                  <SpecLine
                    crit="Мощность двигателя"
                    val={weapon.specifications.mobility.engine.power}
                  />
                  <SpecLine
                    crit="Объем двигателя"
                    val={weapon.specifications.mobility.engine.capacity}
                  />
                  <SpecLine
                    crit="Скорость по шоссе"
                    val={weapon.specifications.mobility.speed.road}
                  />
                  <SpecLine
                    crit="Скорость по пересечённой местности"
                    val={weapon.specifications.mobility.speed.roughTerrain}
                  />
                  <SpecLine
                    crit="Запас хода по шоссе"
                    val={weapon.specifications.mobility.powerReserve.road}
                  />
                  <SpecLine
                    crit="Запас хода по пересечённой местности"
                    val={
                      weapon.specifications.mobility.powerReserve.roughTerrain
                    }
                  />
                  <SpecLine
                    crit="Запас хода по пересечённой местности"
                    val={
                      weapon.specifications.mobility.powerReserve.roughTerrain
                    }
                  />
                  <SpecLine
                    crit="Удельная мощность"
                    val={weapon.specifications.mobility.specificPower}
                    mesure="л.с./т"
                  />
                  <SpecLine
                    crit="Тип подвески"
                    val={weapon.specifications.mobility.suspensionType}
                  />
                  <SpecLine
                    crit="Удельное давление на грунт"
                    val={weapon.specifications.mobility.specificPressure}
                    mesure="кг/см²"
                  />
                  <SpecLine
                    crit="Преодолеваемый подъем"
                    val={weapon.specifications.mobility.surmount.ascent + "°"}
                  />
                  <SpecLine
                    crit="Преодолеваемая стенка"
                    val={weapon.specifications.mobility.surmount.wall}
                    mesure="м"
                  />
                  <SpecLine
                    crit="Преодолеваемый ров"
                    val={weapon.specifications.mobility.surmount.moat}
                    mesure="м"
                  />
                  <SpecLine
                    crit="Преодолеваемый брод"
                    val={weapon.specifications.mobility.surmount.ford}
                    mesure="м"
                  />
                </SpecSection>
              </Spec>
            </TextBlock>
          ) : (
            <SpecialLogo type={SPECIAL_LOGO_TYPE.inDevelopment} />
          )}
          {weapon.JSXComponent}
          {/* {weapon.specifications && (
            <>
              <Subtitle>Смотрите также</Subtitle>

            </>
          )} */}
        </Container>
      </ContentWrapper>
    </div>
  );
}