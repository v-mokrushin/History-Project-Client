import SpecLine from "components/SpecLine/SpecLine";
import SpecSection from "components/SpecSection/SpecSection";
import { INation } from "constants/nations";
import { IWeaponType, WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import { IArmoredVehiclesSpecifications } from "data/weapons/interfaces/armored-interfaces";
import { IAviationSpecifications } from "data/weapons/interfaces/aviation-interfaces";
import {
  TWeapon,
  TWeaponSpecification,
} from "data/weapons/interfaces/common-weapon-interfaces";

export const SpecificationsLayout = {
  getCommon(
    specifications: TWeaponSpecification,
    nation: INation | undefined,
    type: IWeaponType | undefined
  ) {
    if (!specifications.common) return;
    return (
      <SpecSection title="Общее">
        <SpecLine crit="Страна" val={nation?.name.russian} />
        <SpecLine crit="Тип" val={type?.name.russian} />
        <SpecLine
          crit="Разработчик"
          val={specifications.common.developer?.name.original}
        />
        <SpecLine
          crit="Главный конструктор"
          val={specifications.common.chiefDesigner?.name.russian}
        />
        <SpecLine
          crit="Производитель"
          val={specifications.common.manufacturer}
        />
        <SpecLine
          crit="Год разработки"
          val={specifications.common.developmentYear}
        />
        <SpecLine
          crit="Годы производства"
          val={specifications.common.productionPeriod}
        />
        <SpecLine
          crit="Поизведено"
          val={specifications.common.numberOfIssued}
          mesure="шт."
        />
        <SpecLine
          crit="Годы эксплуатации"
          val={specifications.common.exploitationYears}
        />
      </SpecSection>
    );
  },
  getCrew(specifications: TWeaponSpecification) {
    if (!specifications.crew) return;
    return (
      <SpecSection title="Экипаж">
        <SpecLine
          crit="Количество"
          val={specifications.crew.size}
          mesure="человек(а)"
        />
        <SpecLine crit="Состав" val={specifications.crew.structure} />
      </SpecSection>
    );
  },
  getAll(weapon: TWeapon) {
    if (WEAPONS_TYPE_METHODS.identity.isArmoredVehicle(weapon)) {
      return (
        <>
          {SpecificationsLayout.getCommon(
            weapon.specifications,
            weapon.nation,
            weapon.type
          )}
          {SpecificationsLayout.armored.getSizes(
            weapon.specifications as IArmoredVehiclesSpecifications
          )}
          {SpecificationsLayout.getCrew(
            weapon.specifications as IArmoredVehiclesSpecifications
          )}
          {SpecificationsLayout.armored.getWeapon(
            weapon.specifications as IArmoredVehiclesSpecifications
          )}
          {SpecificationsLayout.armored.getArmoring(
            weapon.specifications as IArmoredVehiclesSpecifications
          )}
          {SpecificationsLayout.armored.getMobility(
            weapon.specifications as IArmoredVehiclesSpecifications
          )}
        </>
      );
    }
    if (WEAPONS_TYPE_METHODS.identity.isAviation(weapon)) {
      return (
        <>
          {SpecificationsLayout.getCommon(
            weapon.specifications,
            weapon.nation,
            weapon.type
          )}
          {SpecificationsLayout.avivation.getSizes(
            weapon.specifications as IAviationSpecifications
          )}
          {SpecificationsLayout.getCrew(
            weapon.specifications as IAviationSpecifications
          )}
          {SpecificationsLayout.avivation.getFlightCharacteristics(
            weapon.specifications as IAviationSpecifications
          )}
          {SpecificationsLayout.avivation.getPowerUnits(
            weapon.specifications as IAviationSpecifications
          )}
          {SpecificationsLayout.avivation.getWeapons(
            weapon.specifications as IAviationSpecifications
          )}
        </>
      );
    }
  },
  armored: {
    getSizes(specifications: IArmoredVehiclesSpecifications) {
      if (!specifications.sizes) return;
      return (
        <SpecSection title="Размеры и масса">
          <SpecLine
            crit="Масса"
            val={specifications.sizes.weight}
            mesure="тонн"
          />
          <SpecLine crit="Длина" val={specifications.sizes.length} mesure="м" />
          <SpecLine crit="Ширина" val={specifications.sizes.width} mesure="м" />
          <SpecLine
            crit="Высота"
            val={specifications.sizes.height}
            mesure="м"
          />
          <SpecLine
            crit="Клиренс"
            val={specifications.sizes.clearance}
            mesure="м"
          />
        </SpecSection>
      );
    },
    getWeapon(specifications: IArmoredVehiclesSpecifications) {
      if (!specifications.weapon) return <></>;
      return (
        <SpecSection title="Вооружение">
          <SpecLine
            crit="Марка орудия"
            val={specifications.weapon.cannon.trademark}
          />
          <SpecLine
            crit="Калибр орудия"
            val={specifications.weapon.cannon.caliber}
            mesure="мм"
          />
          <SpecLine
            crit="Длина ствола"
            val={specifications.weapon.cannon.length}
            mesure=" калибров"
          />
          <SpecLine
            crit="Дульная скорость снаряда"
            val={specifications.weapon.cannon.muzzleVelocity}
            mesure="м/с"
          />
          <SpecLine crit="Тип орудия" val={specifications.weapon.cannon.type} />
          <SpecLine
            crit="Тип заряжания"
            val={specifications.weapon.cannon.chargingType}
          />
          <SpecLine
            crit="Боевая скорострельность"
            val={specifications.weapon.cannon.combatFireRate}
            mesure="выстр./мин."
          />
          <SpecLine
            crit="Дульный тормоз"
            val={specifications.weapon.cannon.muzzleBrake}
          />
          <SpecLine
            crit="Углы вертик. наведения"
            val={specifications.weapon.verticalGA}
          />
          <SpecLine
            crit="Углы горизон. наведения"
            val={specifications.weapon.horizontalGA}
          />
          <SpecLine crit="Пулеметы" val={specifications.weapon.machinegun} />
          <SpecLine
            crit="Боекомплект орудия"
            val={specifications.weapon.ammunition?.cannon}
            mesure="выстрелов"
          />
          <SpecLine
            crit="Боекомплект пулеметов"
            val={specifications.weapon.ammunition?.machinegun}
            mesure="выстрелов"
          />
        </SpecSection>
      );
    },
    getArmoring(specifications: IArmoredVehiclesSpecifications) {
      if (!specifications.armoring) return <></>;
      return (
        <SpecSection title="Бронирование">
          <SpecLine crit="Тип брони" val={specifications.armoring.type} />
          {specifications.armoring.body && (
            <>
              <SpecLine
                crit="Лоб корпуса (верх)"
                val={specifications.armoring.body.forehead.top}
              />
              <SpecLine
                crit="Лоб корпуса (низ)"
                val={specifications.armoring.body.forehead.bottom}
              />
              <SpecLine
                crit="Борт корпуса (верх)"
                val={specifications.armoring.body.board.top}
              />
              <SpecLine
                crit="Борт корпуса (низ)"
                val={specifications.armoring.body.board.bottom}
              />
              <SpecLine
                crit="Корма корпуса (верх)"
                val={specifications.armoring.body.stern.top}
              />
              <SpecLine
                crit="Корма корпуса (низ)"
                val={specifications.armoring.body.stern.bottom}
              />
              <SpecLine
                crit="Днище"
                val={specifications.armoring.body.bottom}
              />
              <SpecLine
                crit="Крыша корпуса"
                val={specifications.armoring.body.roof}
              />
            </>
          )}
          {specifications.armoring.tower && (
            <>
              <SpecLine
                crit="Лоб башни"
                val={specifications.armoring.tower.forehead}
              />
              <SpecLine
                crit="Маска орудия"
                val={specifications.armoring.tower.gunMask}
              />
              <SpecLine
                crit="Борт башни"
                val={specifications.armoring.tower.board}
              />
              <SpecLine
                crit="Корма башни"
                val={specifications.armoring.tower.stern}
              />
              <SpecLine
                crit="Крыша башни"
                val={specifications.armoring.tower.roof}
              />
            </>
          )}
        </SpecSection>
      );
    },
    getMobility(specifications: IArmoredVehiclesSpecifications) {
      if (!specifications.mobility) return <></>;
      return (
        <SpecSection title="Подвижность">
          <SpecLine
            crit="Марка двигателя"
            val={specifications.mobility.engine.trademark}
          />
          <SpecLine
            crit="Тип двигателя"
            val={specifications.mobility.engine.type}
          />
          <SpecLine
            crit="Конфигурация двигателя"
            val={specifications.mobility.engine.config}
          />
          <SpecLine
            crit="Мощность двигателя"
            val={specifications.mobility.engine.power}
            mesure="л.с."
          />
          <SpecLine
            crit="Объем двигателя"
            val={specifications.mobility.engine.capacity}
            mesure="л"
          />
          <SpecLine
            crit="Скорость по шоссе"
            val={specifications.mobility.speed?.road}
            mesure="км/ч"
          />
          <SpecLine
            crit="Скорость по пересечённой местности"
            val={specifications.mobility.speed?.roughTerrain}
            mesure="км/ч"
          />
          <SpecLine
            crit="Запас хода по шоссе"
            val={specifications.mobility.powerReserve?.road}
            mesure="км"
          />
          <SpecLine
            crit="Запас хода по пересечённой местности"
            val={specifications.mobility.powerReserve?.roughTerrain}
            mesure="км"
          />
          <SpecLine
            crit="Удельная мощность"
            val={specifications.mobility.specificPower}
            mesure="л.с./т"
          />
          <SpecLine
            crit="Тип подвески"
            val={specifications.mobility.suspensionType}
          />
          <SpecLine
            crit="Удельное давление на грунт"
            val={specifications.mobility.specificPressure}
            mesure="кг/см²"
          />
          <SpecLine
            crit="Преодолеваемый подъем"
            val={specifications.mobility.surmount?.ascent}
            mesure="°"
          />
          <SpecLine
            crit="Преодолеваемая стенка"
            val={specifications.mobility.surmount?.wall}
            mesure="м"
          />
          <SpecLine
            crit="Преодолеваемый ров"
            val={specifications.mobility.surmount?.moat}
            mesure="м"
          />
          <SpecLine
            crit="Преодолеваемый брод"
            val={specifications.mobility.surmount?.ford}
            mesure="м"
          />
        </SpecSection>
      );
    },
  },
  avivation: {
    getSizes(specifications: IAviationSpecifications) {
      if (!specifications.sizes) return;
      return (
        <SpecSection title="Размеры и масса">
          <SpecLine
            crit="Масса пустого"
            val={specifications.sizes.emptyWeight}
            mesure="кг"
          />
          <SpecLine
            crit="Масса снаряжённого"
            val={specifications.sizes.curbWeight}
            mesure="кг"
          />
          <SpecLine crit="Длина" val={specifications.sizes.length} mesure="м" />
          <SpecLine
            crit="Высота"
            val={specifications.sizes.height}
            mesure="м"
          />
          <SpecLine
            crit="Размах крыла"
            val={specifications.sizes.wingSpan}
            mesure="м"
          />
          <SpecLine
            crit="Площадь крыла"
            val={specifications.sizes.wingArea}
            mesure="м²"
          />
        </SpecSection>
      );
    },
    getFlightCharacteristics(specifications: IAviationSpecifications) {
      if (!specifications.flightCharacteristics) return;
      return (
        <SpecSection title="Летные характеристики">
          <SpecLine
            crit="Техническая дальность"
            val={specifications.flightCharacteristics.technicalRange}
            mesure="км"
          />
          <SpecLine
            crit="Практическая  дальность"
            val={specifications.flightCharacteristics.practicalRange}
            mesure="км"
          />
          <SpecLine
            crit="Максимальная скорость"
            val={specifications.flightCharacteristics.maximumSpeed}
            mesure="км/ч"
          />
          <SpecLine
            crit="Скороподъемность"
            val={specifications.flightCharacteristics.climbRate}
            mesure="м/c"
          />
        </SpecSection>
      );
    },
    getPowerUnits(specifications: IAviationSpecifications) {
      if (!specifications.powerUnits) return;
      return (
        <SpecSection title="Силовая установка">
          <SpecLine
            crit="Количество двигателей"
            val={specifications.powerUnits.enginesNumber}
          />
          <SpecLine
            crit="Марка двигателя"
            val={specifications.powerUnits.engine.trademark}
          />
          <SpecLine
            crit="Тип двигателя"
            val={specifications.powerUnits.engine.type}
          />
          <SpecLine
            crit="Объем  двигателя"
            val={specifications.powerUnits.engine.capacity}
            mesure="л"
          />
          <SpecLine
            crit="Взлетная мощность"
            val={specifications.powerUnits.engine.takeoffPower}
            mesure="л.с."
          />
          <SpecLine
            crit="Боевая мощность"
            val={specifications.powerUnits.engine.combatPower}
            mesure="л.с."
          />
          <SpecLine
            crit="Моторесурс"
            val={specifications.powerUnits.engine.motorResource}
            mesure="моточасов"
          />
        </SpecSection>
      );
    },
    getWeapons(specifications: IAviationSpecifications) {
      if (!specifications.weapons) return;
      return (
        <SpecSection title="Вооружение">
          <SpecLine
            crit="Комплект вооружения"
            val={specifications.weapons.weaponsSet}
          />
          <SpecLine crit="Боезапас" val={specifications.weapons.ammunition} />
          <SpecLine
            crit="Вес секундного залпа"
            val={specifications.weapons.secondSalvoWeight}
            mesure="кг/с"
          />
          <SpecLine
            crit="Бомбовое вооружение"
            val={specifications.weapons.bombWeapons}
          />
        </SpecSection>
      );
    },
  },
};
