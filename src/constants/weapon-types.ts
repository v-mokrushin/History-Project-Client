import { type } from "os";
import { IWeapon } from "data/weapons/weapons";

const armoredVehicle = {
  path: "armored-vehicles",
  name: {
    russian: "Бронетехника",
  },
  tankette: WeaponType("Танкетка"),
  smallTank: WeaponType("Малый танк"),
  lightTank: WeaponType("Лёгкий танк"),
  mediumTank: WeaponType("Средний танк"),
  heavyTank: WeaponType("Тяжелый танк"),
  sau: WeaponType("САУ"),
  ptsau: WeaponType("ПТ-САУ"),
  zsu: WeaponType("ЗСУ"),
  armoredCar: WeaponType("Бронеавтомобиль"),
  armoredСarrier: WeaponType("Бронетранспортер"),
};

const aviation = {
  path: "aviation",
  name: {
    russian: "Авиация",
  },
  scout: WeaponType("Разведчик"),
  interceptor: WeaponType("Перехватчик"),
  fighter: WeaponType("Истребитель"),
  attackАircraft: WeaponType("Штурмовик"),
  bomber: WeaponType("Бомбардировщик"),
  torpedoBomber: WeaponType("Торпедоносец"),
  lightBomber: WeaponType("Легкий бомбардировщик"),
  frontlineBomber: WeaponType("Фронтовой бомбардировщик"),
  strategicBomber: WeaponType("Дальний бомбардировщик"),
  multipurpose: WeaponType("Многоцелевой"),
  militaryTransport: WeaponType("Военно-транспортный"),
  training: WeaponType("Учебно-тренировочный"),
};

const artillery = {
  path: "artillery",
  name: {
    russian: "Артиллерия",
  },
  company: WeaponType("Ротная"),
  battalion: WeaponType("Батальонная"),
  regimental: WeaponType("Полковая"),
  division: WeaponType("Дивизионная"),
  armyAndCorps: WeaponType("Корпусная/армейская"),
  specialPower: WeaponType("Большой и особой мощности"),
  antitank: WeaponType("Противотанковая"),
  antiaircraft: WeaponType("Зенитная"),
  reactive: WeaponType("Реактивная"),
  cruiseMissile: WeaponType("Крылатая ракета"),
  ballisticMissile: WeaponType("Баллистическая ракета"),
};

const smallArms = {
  path: "small-arms",
  name: {
    russian: "Стрелковое оружие",
  },
  revolver: WeaponType("Револьвер"),
  gun: WeaponType("Пистолет"),
  submachineGun: WeaponType("Пистолет-пулемет"),
  rifle: WeaponType("Винтовка/карабин"),
  selfLoadingRifle: WeaponType("Самозарядная винтовка"),
  assaultRifle: WeaponType("Штурмовая винтовка"),
  shotgun: WeaponType("Дробовик"),
  machinegun: WeaponType("Ручной пулемет"),
  generalPurposeMachinegun: WeaponType("Eдиный пулемет"),
  heavyMachinegun: WeaponType("Станковый пулемет"),
  antiTankGun: WeaponType("Противотанковое ружье"),
};

const grenadeLaunchers = {
  path: "grenade-launchers",
  name: {
    russian: "Гранатометы",
  },
  muzzle: WeaponType("Ствольный"),
  manual: WeaponType("Ручной"),
  heavy: WeaponType("Станковый"),
  hybrid: WeaponType("Гибридный"),
};

const allType: IWeaponType = {
  name: {
    russian: "Все",
  },
};

export const WEAPONS_TYPE = {
  armoredVehicle,
  aviation,
  smallArms,
  artillery,
  grenadeLaunchers,
};

function WeaponType(russianName: string): IWeaponType {
  return { name: { russian: russianName } };
}

// ------------------------------------

interface IWeaponBranch {
  path: string;
  name: IWeaponName;
}

// interface IArmoredBranch {}

// interface IWeaponBranch {}

// interface IBranch {}

export interface IWeaponType {
  name: IWeaponName;
}

interface IWeaponName {
  russian: string;
  english?: string;
}

export const WEAPONS_TYPE_METHODS = {
  getByPath(path: string | undefined) {
    for (let val of Object.values(WEAPONS_TYPE)) {
      if (val.path === path) return val;
    }
    return allType;
  },
  getAllType() {
    return allType;
  },
  getTypesArrayWithAll(weaponBranch: any) {
    return [this.getAllType(), ...getTypesArray(weaponBranch)];
  },
  isAllType(type: IWeaponType) {
    return this.getAllType() === type;
  },
  identity: {
    isArmoredVehicle(weapon: IWeapon) {
      return weapon.branch == WEAPONS_TYPE.armoredVehicle;
    },
    isAviation(weapon: IWeapon) {
      return weapon.branch == WEAPONS_TYPE.aviation;
    },
    isSmallArms(weapon: IWeapon) {
      return weapon.branch == WEAPONS_TYPE.smallArms;
    },
    isArtillery(weapon: IWeapon) {
      return weapon.branch == WEAPONS_TYPE.artillery;
    },
    isGrenadeLaunchers(weapon: IWeapon) {
      return weapon.branch == WEAPONS_TYPE.grenadeLaunchers;
    },
  },
};

function getTypesArray(weaponBranch: any) {
  const copy: any = {};
  Object.assign(copy, weaponBranch);
  delete copy.name;
  delete copy.path;
  return Object.values(copy);
}
