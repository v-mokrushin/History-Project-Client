function appendBranch(object) {
  for (let [key, value] of Object.entries(object)) {
    if (key != "name") value.branch = object.name;
  }
}

let armoredVehicle = {
  name: {
    russian: "Бронетехника",
    english: "armored vehicles",
    path: "armored-vehicles",
  },
  tankette: {
    name: {
      russian: "Танкетка",
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

let aviation = {
  name: {
    russian: "Авиация",
    english: "aviation",
    path: "aviation",
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

let artillery = {
  name: {
    russian: "Артиллерия",
    english: "artillery",
    path: "artillery",
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

let smallArms = {
  name: {
    russian: "Стрелковое оружие",
    english: "small arms",
    path: "small-arms",
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
  machineGun: {
    name: {
      russian: "Пулемет",
    },
  },
  antiTankGun: {
    name: {
      russian: "Противотанковое ружье",
    },
  },
};

let grenadeLaunchers = {
  name: {
    russian: "Гранатометы",
    english: "Grenade Launchers",
    path: "grenade-launchers",
  },
  muzzle: {
    name: {
      russian: "Ствольный",
    },
  },
  // under: {
  //   name: {
  //     russian: "Подствольный",
  //   },
  // },
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

appendBranch(armoredVehicle);
appendBranch(aviation);
appendBranch(smallArms);
appendBranch(artillery);
appendBranch(grenadeLaunchers);

const allType = {
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

export const WEAPONS_TYPE_METHODS = {
  getByPath(path) {
    for (let key in WEAPONS_TYPE) {
      if (WEAPONS_TYPE[key].name.path === path) {
        return WEAPONS_TYPE[key];
      }
    }
  },
  getAllType() {
    return allType;
  },
  getTypesArrayWithAll(weaponBranch) {
    return [this.getAllType(), ...getTypesArray(weaponBranch)];
  },
  isAllType(type) {
    return this.getAllType() === type;
  },
};

function getTypesArray(weaponBranch) {
  const copy = {};
  Object.assign(copy, weaponBranch);
  delete copy.name;
  return Object.values(copy);
}
