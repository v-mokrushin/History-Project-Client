const USSR = {
  name: {
    russian: "СССР",
    russianАccusative: "СССР",
    english: "Soviet Union",
  },
  path: "soviet-union",
};

const germany = {
  name: {
    russian: "Германия",
    russianАccusative: "Германии",
    english: "Germany",
  },
  path: "germany",
};

const USA = {
  name: {
    russian: "США",
    russianАccusative: "США",
    english: "USA",
  },
  path: "usa",
};

const greatBritain = {
  name: {
    russian: "Великобритания",
    russianАccusative: "Великобритании",
    english: "Great Britain",
  },
  path: "great-britain",
};

const japan = {
  name: {
    russian: "Япония",
    russianАccusative: "Японии",
    english: "Japan",
  },
  path: "japan",
};

export const NATIONS = {
  USSR,
  germany,
  USA,
  greatBritain,
  japan,
  getObjectByPath,
};

function getObjectByPath(path) {
  for (let val in NATIONS) {
    if (NATIONS[val].path === path) {
      return NATIONS[val];
    }
  }
}
