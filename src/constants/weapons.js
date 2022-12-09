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
  armoredCar: {
    name: {
      russian: "Бронеавтомобиль",
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

let smallArms = {
  name: {
    russian: "Стрелковое оружие",
    english: "small arms",
    path: "small-arms",
  },
};

let artillery = {
  name: {
    russian: "Артиллерия",
    english: "artillery",
    path: "artillery",
  },
  division: {
    name: {
      russian: "Дивизионная",
    },
  },
  antitank: {
    name: {
      russian: "Противотанковая",
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
  antiaircraft: {
    name: {
      russian: "Зенитная",
    },
  },
};

appendBaseType(armoredVehicle);
appendBaseType(aviation);
appendBaseType(smallArms);
appendBaseType(artillery);

export const WEAPONS_TYPE = {
  armoredVehicle,
  aviation,
  smallArms,
  artillery,
  getObjectByPath: getByPath,
  getTypesArray,
  getTypesArrayWithAll,
  getAllType,
  isAllType,
};

const allType = {
  name: {
    russian: "Все",
  },
};

function getByPath(path) {
  for (let key in WEAPONS_TYPE) {
    if (WEAPONS_TYPE[key].name.path === path) {
      return WEAPONS_TYPE[key];
    }
  }
}

function appendBaseType(object) {
  for (let [key, value] of Object.entries(object)) {
    if (key != "name") value.baseType = object.name;
  }
}

function getAllType() {
  return allType;
}

function getTypesArray(weaponBranch) {
  const copy = {};
  Object.assign(copy, weaponBranch);
  delete copy.name;
  return Object.values(copy);
}

function isAllType(type) {
  return getAllType() === type;
}

function getTypesArrayWithAll(weaponBranch) {
  return [getAllType(), ...getTypesArray(weaponBranch)];
}
