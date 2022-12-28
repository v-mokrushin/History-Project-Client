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
  tankette: {
    name: {
      russian: "Танкетка",
    },
  },
  armoredCar: {
    name: {
      russian: "Бронеавтомобиль",
    },
  },
  zsu: {
    name: {
      russian: "ЗСУ",
    },
  },
};

let aviation = {
  name: {
    russian: "Авиация",
    english: "aviation",
    path: "aviation",
  },
  fighter: {
    name: {
      russian: "Истребитель",
    },
  },
  interceptor: {
    name: {
      russian: "Перехватчик",
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

appendBranch(armoredVehicle);
appendBranch(aviation);
appendBranch(smallArms);
appendBranch(artillery);

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
