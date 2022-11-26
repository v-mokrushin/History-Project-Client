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
      russian: "бронеавтомобиль",
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
    russian: "Артлиллерия",
    english: "artillery",
    path: "artillery",
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
