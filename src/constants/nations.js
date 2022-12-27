import { IPageData } from "./pages";

// interface INation {
//   path: string;
//   flagImage: string;
// }

const world = {
  name: {
    russian: "Весь мир",
    russianАccusative: "мира",
    english: "All world",
  },
  path: "world",
  flagImage: "/images/flags/flag-world.svg",
};

const USSR = {
  name: {
    russian: "СССР",
    russianАccusative: "СССР",
    english: "USSR",
  },
  path: "soviet-union",
  flagImage: "/images/flags/flag-ussr.webp",
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

const france = {
  name: {
    russian: "Франция",
    russianАccusative: "Франции",
    english: "France",
  },
  path: "france",
  flagImage: "/images/flags/flag-france.webp",
};

const italy = {
  name: {
    russian: "Италия",
    russianАccusative: "Италии",
    english: "Italy",
  },
  path: "italy",
  flagImage: "/images/flags/flag-italy.svg",
};

const czechoslovakia = {
  name: {
    russian: "Чехословакия",
    russianАccusative: "Чехословакии",
    english: "Czechoslovakia",
  },
  path: "czechoslovakia",
  flagImage: "/images/flags/flag-czechoslovakia.svg",
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

const finland = {
  name: {
    russian: "Финляндия",
    russianАccusative: "Финляндии",
    english: "Finland",
  },
  path: "finland",
  flagImage: "/images/flags/flag-finland.png",
};

export const NATIONS = {
  world,
  USSR,
  germany,
  USA,
  greatBritain,
  france,
  italy,
  czechoslovakia,
  japan,
  finland,
};

// -------------------------------------------------------------------------

export const NATIONS_METHODS = {
  getObjectByPath(path) {
    for (let nation of Object.values(NATIONS)) {
      if (nation.path === path) return nation;
    }
  },
  getNationsAsArray() {
    return Object.values(NATIONS);
  },
};
