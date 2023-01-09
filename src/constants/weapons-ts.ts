const armoredVehicle = {
  path: "armored-vehicles",
  name: {
    russian: "Бронетехника",
    english: "armored vehicles",
  },
  tankette: {
    name: {
      russian: "Танкетка",
    },
  },
  smallTank: {
    name: {
      russian: "Малый танк",
    },
  },
  lightTank: {
    name: {
      russian: "Лёгкий танк",
    },
  },
  mediumTank: {
    name: {
      russian: "Средний танк",
    },
  },
  heavyTank: {
    name: {
      russian: "Тяжелый танк",
    },
  },
  sau: {
    name: {
      russian: "САУ",
    },
  },
  ptsau: {
    name: {
      russian: "ПТ-САУ",
    },
  },
  zsu: {
    name: {
      russian: "ЗСУ",
    },
  },
  armoredCar: {
    name: {
      russian: "Бронеавтомобиль",
    },
  },
  armoredСarrier: {
    name: {
      russian: "Бронетранспортер",
    },
  },
};

const aviation = {
  path: "aviation",
  name: {
    russian: "Авиация",
    english: "aviation",
  },
  scout: {
    name: {
      russian: "Разведчик",
    },
  },
  interceptor: {
    name: {
      russian: "Перехватчик",
    },
  },
  fighter: {
    name: {
      russian: "Истребитель",
    },
  },
  attackАircraft: {
    name: {
      russian: "Штурмовик",
    },
  },
  bomber: {
    name: {
      russian: "Бомбардировщик",
    },
  },
  torpedoBomber: {
    name: {
      russian: "Торпедоносец",
    },
  },
  lightBomber: {
    name: {
      russian: "Легкий бомбардировщик",
    },
  },
  frontlineBomber: {
    name: {
      russian: "Фронтовой бомбардировщик",
    },
  },
  strategicBomber: {
    name: {
      russian: "Дальний бомбардировщик",
    },
  },
  multipurpose: {
    name: {
      russian: "Многоцелевой",
    },
  },
  militaryTransport: {
    name: {
      russian: "Военно-транспортный",
    },
  },
  training: {
    name: {
      russian: "Учебно-тренировочный",
    },
  },
};

const artillery = {
  path: "artillery",
  name: {
    russian: "Артиллерия",
    english: "artillery",
  },
  company: {
    name: {
      russian: "Ротная",
    },
  },
  battalion: {
    name: {
      russian: "Батальонная",
    },
  },
  regimental: {
    name: {
      russian: "Полковая",
    },
  },
  division: {
    name: {
      russian: "Дивизионная",
    },
  },
  armyAndCorps: {
    name: {
      russian: "Корпусная/армейская",
    },
  },
  specialPower: {
    name: {
      russian: "Большой и особой мощности",
    },
  },
  antitank: {
    name: {
      russian: "Противотанковая",
    },
  },
  antiaircraft: {
    name: {
      russian: "Зенитная",
    },
  },
  reactive: {
    name: {
      russian: "Реактивная",
    },
  },
  cruiseMissile: {
    name: {
      russian: "Крылатая ракета",
    },
  },
  ballisticMissile: {
    name: {
      russian: "Баллистическая ракета",
    },
  },
};

const smallArms = {
  path: "small-arms",
  name: {
    russian: "Стрелковое оружие",
    english: "small arms",
  },
  revolver: {
    name: {
      russian: "Револьвер",
    },
  },
  gun: {
    name: {
      russian: "Пистолет",
    },
  },
  submachineGun: {
    name: {
      russian: "Пистолет-пулемет",
    },
  },
  rifle: {
    name: {
      russian: "Винтовка и карабин",
    },
  },
  selfLoadingRifle: {
    name: {
      russian: "Самозарядная  винтовка",
    },
  },
  assaultRifle: {
    name: {
      russian: "Штурмовая винтовка",
    },
  },
  shotgun: {
    name: {
      russian: "Дробовик",
    },
  },
  machinegun: {
    name: {
      russian: "Ручной пулемет",
    },
  },
  generalPurposeMachinegun: {
    name: {
      russian: "Eдиный пулемет",
    },
  },
  heavyMachinegun: {
    name: {
      russian: "Станковый пулемет",
    },
  },
  antiTankGun: {
    name: {
      russian: "Противотанковое ружье",
    },
  },
};

const grenadeLaunchers = {
  path: "grenade-launchers",
  name: {
    russian: "Гранатометы",
    english: "Grenade Launchers",
  },
  muzzle: {
    name: {
      russian: "Ствольный",
    },
  },
  manual: {
    name: {
      russian: "Ручной",
    },
  },
  heavy: {
    name: {
      russian: "Станковый",
    },
  },
  hybrid: {
    name: {
      russian: "Гибридный",
    },
  },
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

// ------------------------------------

interface IWeaponBranch {
  path: string;
  name: IWeaponName;
}

interface IWeaponType {
  name: IWeaponName;
}

interface IWeaponName {
  russian: string;
  english?: string;
}

export const WEAPONS_TYPE_METHODS = {
  getByPath(path: string) {
    // for (const key in WEAPONS_TYPE) {
    //   if (WEAPONS_TYPE[key].path === path) {
    //     return WEAPONS_TYPE[key];
    //   }
    // }
    const arr = Object.values(WEAPONS_TYPE);
    for (let val of arr) {
      if (val.path === path) return val;
    }
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
};

function getTypesArray(weaponBranch: any) {
  const copy: any = {};
  Object.assign(copy, weaponBranch);
  delete copy.name;
  delete copy.path;
  return Object.values(copy);
}
