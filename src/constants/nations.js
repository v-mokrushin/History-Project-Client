const world = {
  name: {
    russian: "Весь мир",
    russianАccusative: "мира",
    english: "All world",
  },
  path: "world",
  flagImage: "/images/flags/flag-world.png",
};

const USSR = {
  name: {
    russian: "СССР",
    russianАccusative: "СССР",
    english: "USSR",
  },
  path: "soviet-union",
  flagImage: "/images/flags/flag-ussr.svg",
};

const germany = {
  name: {
    russian: "Германия",
    russianАccusative: "Германии",
    english: "germany",
  },
  path: "germany",
  flagImage: "/images/flags/flag-germany.svg",
};

const USA = {
  name: {
    russian: "США",
    russianАccusative: "США",
    english: "USA",
  },
  path: "usa",
  flagImage: "/images/flags/flag-us.svg",
};

const greatBritain = {
  name: {
    russian: "Великобритания",
    russianАccusative: "Великобритании",
    english: "Great Britain",
  },
  path: "great-britain",
  flagImage: "/images/flags/flag-uk.svg",
};

const japan = {
  name: {
    russian: "Япония",
    russianАccusative: "Японии",
    english: "Japan",
  },
  path: "japan",
  flagImage: "/images/flags/flag-japan.svg",
};

export const NATIONS = {
  world,
  USSR,
  germany,
  USA,
  greatBritain,
  japan,
};

export const NATIONS_METHODS = {
  getObjectByPath,
  getNationsAsArray,
};

function getObjectByPath(path) {
  for (let val in NATIONS) {
    if (NATIONS[val].path === path) {
      return NATIONS[val];
    }
  }
}

function getNationsAsArray() {
  return Object.values(NATIONS);
}
