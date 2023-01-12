import SpecLine from "components/SpecLine/SpecLine";
import SpecSection from "components/SpecSection/SpecSection";
import { IWeapon } from "data/weapons/weapons";

export const SpecificationsLayout = {
  armored: {
    getCommon,
    getSizes,
    getCrew,
    getWeapon,
    getArmoring,
    getMobility,
  },
};

function getCommon(weapon: IWeapon) {
  if (!weapon.specifications.common) return;
  return (
    <SpecSection title="Общее">
      <SpecLine crit="Страна" val={weapon.nation!.name.russian} />
      <SpecLine crit="Тип" val={weapon.type.name.russian.toLowerCase()} />
      <SpecLine
        crit="Разработчик"
        val={weapon.specifications.common.developer?.name.original}
      />
      <SpecLine
        crit="Главный конструктор"
        val={weapon.specifications.common.chiefDesigner}
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
        val={weapon.specifications.common.productionPeriod}
      />
      <SpecLine
        crit="Поизведено"
        val={weapon.specifications.common.numberOfIssued}
        mesure="шт."
      />
      <SpecLine
        crit="Годы эксплуатации"
        val={weapon.specifications.common.exploitationYears}
      />
    </SpecSection>
  );
}

function getSizes(weapon: IWeapon) {
  if (!weapon.specifications.sizes) return;
  return (
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
  );
}

function getCrew(weapon: IWeapon) {
  if (!weapon.specifications.crew) return;
  return (
    <SpecSection title="Экипаж">
      <SpecLine
        crit="Количество"
        val={weapon.specifications.crew.size}
        mesure="человек(а)"
      />
      <SpecLine crit="Состав" val={weapon.specifications.crew.structure} />
    </SpecSection>
  );
}

function getWeapon(weapon: IWeapon) {
  if (!weapon.specifications.weapon) return <></>;
  return (
    <SpecSection title="Вооружение">
      <SpecLine
        crit="Марка орудия"
        val={weapon.specifications.weapon.cannon.trademark}
      />
      <SpecLine
        crit="Калибр орудия"
        val={weapon.specifications.weapon.cannon.caliber}
        mesure="мм"
      />
      <SpecLine
        crit="Длина ствола"
        val={weapon.specifications.weapon.cannon.length}
        mesure=" калибров"
      />
      <SpecLine
        crit="Дульная скорость снаряда"
        val={weapon.specifications.weapon.cannon.muzzleVelocity}
        mesure="м/с"
      />
      <SpecLine
        crit="Тип орудия"
        val={weapon.specifications.weapon.cannon.type}
      />
      {/* <SpecLine
                crit="Боеприпасы"
                val={weapon.specifications.weapon.cannon.ammunition}
              /> */}
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
      {/* <SpecLine
                crit="Тип спуска"
                val={weapon.specifications.weapon.cannon.trigger}
              /> */}
      <SpecLine
        crit="Углы вертик. наведения"
        val={weapon.specifications.weapon.verticalGA}
      />
      <SpecLine
        crit="Углы горизон. наведения"
        val={weapon.specifications.weapon.horizontalGA}
      />
      {/* <SpecLine
                crit="Прицелы"
                val={weapon.specifications.weapon.sights}
              /> */}
      <SpecLine crit="Пулеметы" val={weapon.specifications.weapon.machinegun} />
      <SpecLine
        crit="Боекомплект орудия"
        val={weapon.specifications.weapon.ammunition?.cannon}
        mesure="выстрелов"
      />
      <SpecLine
        crit="Боекомплект пулеметов"
        val={weapon.specifications.weapon.ammunition?.machinegun}
        mesure="выстрелов"
      />
    </SpecSection>
  );
}

function getArmoring(weapon: IWeapon) {
  if (!weapon.specifications.armoring) return <></>;
  return (
    <SpecSection title="Бронирование">
      <SpecLine crit="Тип брони" val={weapon.specifications.armoring.type} />
      {weapon.specifications.armoring.body && (
        <>
          <SpecLine
            crit="Лоб корпуса (верх)"
            val={weapon.specifications.armoring.body.forehead.top}
          />
          <SpecLine
            crit="Лоб корпуса (низ)"
            val={weapon.specifications.armoring.body.forehead.bottom}
          />
          <SpecLine
            crit="Борт корпуса (верх)"
            val={weapon.specifications.armoring.body.board.top}
          />
          <SpecLine
            crit="Борт корпуса (низ)"
            val={weapon.specifications.armoring.body.board.bottom}
          />
          <SpecLine
            crit="Корма корпуса (верх)"
            val={weapon.specifications.armoring.body.stern.top}
          />
          <SpecLine
            crit="Корма корпуса (низ)"
            val={weapon.specifications.armoring.body.stern.bottom}
          />
          <SpecLine
            crit="Днище"
            val={weapon.specifications.armoring.body.bottom}
          />
          <SpecLine
            crit="Крыша корпуса"
            val={weapon.specifications.armoring.body.roof}
          />
        </>
      )}
      {weapon.specifications.armoring.tower && (
        <>
          <SpecLine
            crit="Лоб башни"
            val={weapon.specifications.armoring.tower.forehead}
          />
          <SpecLine
            crit="Маска орудия"
            val={weapon.specifications.armoring.tower.gunMask}
          />
          <SpecLine
            crit="Борт башни"
            val={weapon.specifications.armoring.tower.board}
          />
          <SpecLine
            crit="Корма башни"
            val={weapon.specifications.armoring.tower.stern}
          />
          <SpecLine
            crit="Крыша башни"
            val={weapon.specifications.armoring.tower.roof}
          />
        </>
      )}
    </SpecSection>
  );
}

function getMobility(weapon: IWeapon) {
  if (!weapon.specifications.mobility) return <></>;
  return (
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
        mesure="л.с."
      />
      <SpecLine
        crit="Объем двигателя"
        val={weapon.specifications.mobility.engine.capacity}
        mesure="л"
      />
      <SpecLine
        crit="Скорость по шоссе"
        val={weapon.specifications.mobility.speed?.road}
        mesure="км/ч"
      />
      <SpecLine
        crit="Скорость по пересечённой местности"
        val={weapon.specifications.mobility.speed?.roughTerrain}
        mesure="км/ч"
      />
      <SpecLine
        crit="Запас хода по шоссе"
        val={weapon.specifications.mobility.powerReserve?.road}
        mesure="км"
      />
      <SpecLine
        crit="Запас хода по пересечённой местности"
        val={weapon.specifications.mobility.powerReserve?.roughTerrain}
        mesure="км"
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
        val={weapon.specifications.mobility.surmount?.ascent}
        mesure="°"
      />
      <SpecLine
        crit="Преодолеваемая стенка"
        val={weapon.specifications.mobility.surmount?.wall}
        mesure="м"
      />
      <SpecLine
        crit="Преодолеваемый ров"
        val={weapon.specifications.mobility.surmount?.moat}
        mesure="м"
      />
      <SpecLine
        crit="Преодолеваемый брод"
        val={weapon.specifications.mobility.surmount?.ford}
        mesure="м"
      />
    </SpecSection>
  );
}
