import { IPageData } from "./pages";

const world: IPageData = {
  name: {
    russian: "Весь мир",
    russianАccusative: "мира",
    english: "All world",
  },
  path: "world",
  flagImage: "/images/flags/flag-world.svg",
  introImage: "",
};

const USSR: IPageData = {
  name: {
    russian: "СССР",
    russianАccusative: "СССР",
    english: "USSR",
  },
  path: "soviet-union",
  flagImage: "/images/flags/flag-ussr.webp",
  introImage: "",
};

const germany: IPageData = {
  name: {
    russian: "Германия",
    russianАccusative: "Германии",
    english: "germany",
  },
  path: "germany",
  flagImage: "/images/flags/flag-germany.svg",
  introImage: "",
};

const USA: IPageData = {
  name: {
    russian: "США",
    russianАccusative: "США",
    english: "USA",
  },
  path: "usa",
  flagImage: "/images/flags/flag-us.svg",
  introImage: "",
};

const greatBritain: IPageData = {
  name: {
    russian: "Британия",
    russianАccusative: "Британии",
    english: "Great Britain",
  },
  path: "great-britain",
  flagImage: "/images/flags/flag-uk.svg",
  introImage: "",
};

const france: IPageData = {
  name: {
    russian: "Франция",
    russianАccusative: "Франции",
    english: "France",
  },
  path: "france",
  flagImage: "/images/flags/flag-france.webp",
  introImage: "",
};

const italy: IPageData = {
  name: {
    russian: "Италия",
    russianАccusative: "Италии",
    english: "Italy",
  },
  path: "italy",
  flagImage: "/images/flags/flag-italy.svg",
  introImage: "",
};

const czechoslovakia: IPageData = {
  name: {
    russian: "Чехословакия",
    russianАccusative: "Чехословакии",
    english: "Czechoslovakia",
  },
  path: "czechoslovakia",
  flagImage: "/images/flags/flag-czechoslovakia.svg",
  introImage: "",
};

const japan: IPageData = {
  name: {
    russian: "Япония",
    russianАccusative: "Японии",
    english: "Japan",
  },
  path: "japan",
  flagImage: "/images/flags/flag-japan.svg",
  introImage: "",
};

const finland: IPageData = {
  name: {
    russian: "Финляндия",
    russianАccusative: "Финляндии",
    english: "Finland",
  },
  path: "finland",
  flagImage: "/images/flags/flag-finland.png",
  introImage: "",
};

const sweden: IPageData = {
  name: {
    russian: "Швеция",
    russianАccusative: "Швеции",
    english: "Sweden",
  },
  path: "sweden",
  flagImage: "/images/flags/flag-sweden.svg",
  introImage: "",
};

const lithuania: IPageData = {
  name: {
    russian: "Литва",
    russianАccusative: "Литвы",
    english: "Lithuania",
  },
  path: "lithuania",
  flagImage: "/images/flags/flag-lithuania.svg",
  introImage: "",
};

const netherlands: IPageData = {
  name: {
    russian: "Нидерланды",
    russianАccusative: "Нидерландов",
    english: "Netherlands",
  },
  path: "netherlands",
  flagImage: "/images/flags/flag-netherlands.svg",
  introImage: "",
};

const romania: IPageData = {
  name: {
    russian: "Румыния",
    russianАccusative: "Румынии",
    english: "Romania",
  },
  path: "romania",
  flagImage: "/images/flags/flag-romania.svg",
  introImage: "",
};

const poland: IPageData = {
  name: {
    russian: "Польша",
    russianАccusative: "Польши",
    english: "Poland",
  },
  path: "poland",
  flagImage: "/images/flags/flag-poland.svg",
  introImage: "",
};

const yugoslavia: IPageData = {
  name: {
    russian: "Югославия",
    russianАccusative: "Югославии",
    english: "Yugoslavia",
  },
  path: "yugoslavia",
  flagImage: "/images/flags/flag-yugoslavia.svg",
  introImage: "",
};

const hungary: IPageData = {
  name: {
    russian: "Венгрия",
    russianАccusative: "Венгрии",
    english: "Hungary",
  },
  path: "hungary",
  flagImage: "/images/flags/flag-hungary.png",
  introImage: "",
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
  sweden,
  lithuania,
  netherlands,
  romania,
  poland,
  yugoslavia,
  hungary,
};

// -------------------------------------------------------------------------

export const NATIONS_METHODS = {
  getObjectByPath(path: string) {
    for (let nation of Object.values(NATIONS)) {
      if (nation.path === path) return nation;
    }
  },
  getNationsAsArray(): IPageData[] {
    return Object.values(NATIONS);
  },
  identity: {
    isWorld(nation: IPageData | undefined) {
      return nation == NATIONS.world;
    },
  },
};
