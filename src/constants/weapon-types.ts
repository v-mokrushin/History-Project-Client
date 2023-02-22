import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

export type IWaponBranch =
  | IArmoredVehiclesBranch
  | IAviationBranch
  | IArtilleryBranch
  | ISmallArmsBranch
  | IGrenadeLaunchersBranch;

interface IBaseWeaponBranch {
  readonly path: string;
  readonly name: IWeaponName;
}

interface IArmoredVehiclesBranch extends IBaseWeaponBranch {
  readonly tankette: IWeaponType;
  readonly smallTank: IWeaponType;
  readonly lightTank: IWeaponType;
  readonly mediumTank: IWeaponType;
  readonly heavyTank: IWeaponType;
  readonly sau: IWeaponType;
  readonly ptsau: IWeaponType;
  readonly zsu: IWeaponType;
  readonly armoredCar: IWeaponType;
  readonly armoredСarrier: IWeaponType;
}

interface IAviationBranch extends IBaseWeaponBranch {
  readonly scout: IWeaponType;
  readonly interceptor: IWeaponType;
  readonly fighter: IWeaponType;
  readonly attackАircraft: IWeaponType;
  readonly bomber: IWeaponType;
  readonly torpedoBomber: IWeaponType;
  readonly lightBomber: IWeaponType;
  readonly frontlineBomber: IWeaponType;
  readonly strategicBomber: IWeaponType;
  readonly multipurpose: IWeaponType;
  readonly militaryTransport: IWeaponType;
  readonly training: IWeaponType;
}

interface IArtilleryBranch extends IBaseWeaponBranch {
  readonly company: IWeaponType;
  readonly battalion: IWeaponType;
  readonly regimental: IWeaponType;
  readonly division: IWeaponType;
  readonly armyAndCorps: IWeaponType;
  readonly specialPower: IWeaponType;
  readonly antitank: IWeaponType;
  readonly antiaircraft: IWeaponType;
  readonly reactive: IWeaponType;
  readonly cruiseMissile: IWeaponType;
  readonly ballisticMissile: IWeaponType;
}

interface ISmallArmsBranch extends IBaseWeaponBranch {
  readonly revolver: IWeaponType;
  readonly gun: IWeaponType;
  readonly submachineGun: IWeaponType;
  readonly rifle: IWeaponType;
  // readonly сarbine: IWeaponType;
  readonly selfLoadingCarbine: IWeaponType;
  readonly selfLoadingRifle: IWeaponType;
  readonly assaultRifle: IWeaponType;
  readonly shotgun: IWeaponType;
  readonly machinegun: IWeaponType;
  readonly generalPurposeMachinegun: IWeaponType;
  readonly heavyMachinegun: IWeaponType;
  readonly antiTankGun: IWeaponType;
}

interface IGrenadeLaunchersBranch extends IBaseWeaponBranch {
  readonly muzzle: IWeaponType;
  readonly manual: IWeaponType;
  readonly heavy: IWeaponType;
  readonly hybrid: IWeaponType;
}

export interface IWeaponType {
  readonly name: IWeaponName;
}

interface IWeaponName {
  readonly russian: string;
  readonly english?: string;
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
  // сarbine: WeaponType("Карабин"),
  selfLoadingRifle: WeaponType("Самозарядная винтовка"),
  selfLoadingCarbine: WeaponType("Самозарядный карабин"),
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

export const WeaponClassification = {
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

export const WeaponClassificationMethods = {
  getByPath(path: string | undefined): IWeaponType | undefined {
    for (let val of Object.values(WeaponClassification)) {
      if (val.path === path) return val;
    }
    return undefined;
  },
  getByName(name: string | undefined): IWeaponType {
    for (let val of Object.values(WeaponClassification.armoredVehicle)) {
      if (val.name?.russian === name) return val;
    }
    return WeaponClassification.armoredVehicle.armoredCar;
  },
  getAllType(): IWeaponType {
    return ALL_TYPE;
  },
  getTypesArrayWithAll(weaponBranch: IWaponBranch): string[] {
    return [
      this.getAllType().name.russian,
      ...this.getTypesArray(weaponBranch),
    ];
  },
  getTypesArray(weaponBranch: IWaponBranch): string[] {
    return Object.values(weaponBranch)
      .map((item) => item.name?.russian)
      .filter((item) => item != undefined);
  },
  isAllType(type: IWeaponType): boolean {
    return this.getAllType() === type;
  },
  identity: {
    isArmoredVehicle(weapon: TWeapon): boolean {
      if (
        weapon.branch?.name.russian ===
        WeaponClassification.armoredVehicle.name.russian
      )
        return true;
      return weapon.branch == WeaponClassification.armoredVehicle;
    },
    isAviation(weapon: TWeapon): boolean {
      return weapon.branch == WeaponClassification.aviation;
    },
    isSmallArms(weapon: TWeapon): boolean {
      return weapon.branch == WeaponClassification.smallArms;
    },
    isArtillery(weapon: TWeapon): boolean {
      return weapon.branch == WeaponClassification.artillery;
    },
    isGrenadeLaunchers(weapon: TWeapon): boolean {
      return weapon.branch == WeaponClassification.grenadeLaunchers;
    },
  },
};
