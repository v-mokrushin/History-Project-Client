import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

export type IWaponBranch =
  | IArmoredVehiclesBranch
  | IAviationBranch
  | IArtilleryBranch
  | ISmallArmsBranch
  | IGrenadeLaunchersBranch;

interface IBaseWeaponBranch {
  path: string;
  name: IWeaponName;
}

interface IArmoredVehiclesBranch extends IBaseWeaponBranch {
  tankette: IWeaponType;
  smallTank: IWeaponType;
  lightTank: IWeaponType;
  mediumTank: IWeaponType;
  heavyTank: IWeaponType;
  sau: IWeaponType;
  ptsau: IWeaponType;
  zsu: IWeaponType;
  armoredCar: IWeaponType;
  armoredСarrier: IWeaponType;
}

interface IAviationBranch extends IBaseWeaponBranch {
  scout: IWeaponType;
  interceptor: IWeaponType;
  fighter: IWeaponType;
  attackАircraft: IWeaponType;
  bomber: IWeaponType;
  torpedoBomber: IWeaponType;
  lightBomber: IWeaponType;
  frontlineBomber: IWeaponType;
  strategicBomber: IWeaponType;
  multipurpose: IWeaponType;
  militaryTransport: IWeaponType;
  training: IWeaponType;
}

interface IArtilleryBranch extends IBaseWeaponBranch {
  company: IWeaponType;
  battalion: IWeaponType;
  regimental: IWeaponType;
  division: IWeaponType;
  armyAndCorps: IWeaponType;
  specialPower: IWeaponType;
  antitank: IWeaponType;
  antiaircraft: IWeaponType;
  reactive: IWeaponType;
  cruiseMissile: IWeaponType;
  ballisticMissile: IWeaponType;
}

interface ISmallArmsBranch extends IBaseWeaponBranch {
  revolver: IWeaponType;
  gun: IWeaponType;
  submachineGun: IWeaponType;
  rifle: IWeaponType;
  selfLoadingRifle: IWeaponType;
  assaultRifle: IWeaponType;
  shotgun: IWeaponType;
  machinegun: IWeaponType;
  generalPurposeMachinegun: IWeaponType;
  heavyMachinegun: IWeaponType;
  antiTankGun: IWeaponType;
}

interface IGrenadeLaunchersBranch extends IBaseWeaponBranch {
  muzzle: IWeaponType;
  manual: IWeaponType;
  heavy: IWeaponType;
  hybrid: IWeaponType;
}

export interface IWeaponType {
  name: IWeaponName;
}

interface IWeaponName {
  russian: string;
  english?: string;
}

// ----------------------------------------------------------------------------

const armoredVehicle: IArmoredVehiclesBranch = {
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

const aviation: IAviationBranch = {
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

const artillery: IArtilleryBranch = {
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

const smallArms: ISmallArmsBranch = {
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

const grenadeLaunchers: IGrenadeLaunchersBranch = {
  path: "grenade-launchers",
  name: {
    russian: "Гранатометы",
  },
  muzzle: WeaponType("Ствольный"),
  manual: WeaponType("Ручной"),
  heavy: WeaponType("Станковый"),
  hybrid: WeaponType("Гибридный"),
};

const ALL_TYPE: IWeaponType = {
  name: {
    russian: "Все",
  },
};

export const WEAPONS_CLASSIFICATION = {
  armoredVehicle,
  aviation,
  smallArms,
  artillery,
  grenadeLaunchers,
};

function WeaponType(russianName: string): IWeaponType {
  return { name: { russian: russianName } };
}

// ----------------------------------------------------------------------------

export const WEAPONS_TYPE_METHODS = {
  getByPath(path: string | undefined): IWeaponType | undefined {
    for (let val of Object.values(WEAPONS_CLASSIFICATION)) {
      if (val.path === path) return val;
    }
    return undefined;
  },
  getAllType(): IWeaponType {
    return ALL_TYPE;
  },
  getTypesArrayWithAll(weaponBranch: IWaponBranch): string[] {
    return [this.getAllType().name.russian, ...getTypesArray(weaponBranch)];
  },
  isAllType(type: IWeaponType): boolean {
    return this.getAllType() === type;
  },
  identity: {
    isArmoredVehicle(weapon: TWeapon): boolean {
      return weapon.branch == WEAPONS_CLASSIFICATION.armoredVehicle;
    },
    isAviation(weapon: TWeapon): boolean {
      return weapon.branch == WEAPONS_CLASSIFICATION.aviation;
    },
    isSmallArms(weapon: TWeapon): boolean {
      return weapon.branch == WEAPONS_CLASSIFICATION.smallArms;
    },
    isArtillery(weapon: TWeapon): boolean {
      return weapon.branch == WEAPONS_CLASSIFICATION.artillery;
    },
    isGrenadeLaunchers(weapon: TWeapon): boolean {
      return weapon.branch == WEAPONS_CLASSIFICATION.grenadeLaunchers;
    },
  },
};

function getTypesArray(weaponBranch: IWaponBranch): string[] {
  return Object.values(weaponBranch)
    .map((item) => item.name?.russian)
    .filter((item) => item != undefined);
}
