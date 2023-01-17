import { IPage } from "./pages";

export interface INation extends IPage {
  readonly flagImage: string;
}

function Nation(
  russianName: string,
  russianАccusativeName: string,
  englishName: string,
  path: string,
  flagImage: string
): INation {
  return {
    name: {
      russian: russianName,
      russianАccusative: russianАccusativeName,
      english: englishName,
    },
    path: path,
    flagImage: flagImage,
    introImage: "",
  } as INation;
}

export const NATIONS = {
  World: Nation(
    "Весь мир",
    "мира",
    "All world",
    "world",
    "/images/flags/flag-world.svg"
  ),
  USSR: Nation(
    "СССР",
    "СССР",
    "USSR",
    "soviet-union",
    "/images/flags/flag-ussr.webp"
  ),
  Germany: Nation(
    "Германия",
    "Германии",
    "germany",
    "germany",
    "/images/flags/flag-germany.svg"
  ),
  USA: Nation("США", "США", "USA", "usa", "/images/flags/flag-us.svg"),
  Canada: Nation("Канада", "Канады", "Canada", "canada", "/images/flags/flag-canada.svg"),
  greatBritain: Nation(
    "Британия",
    "Британии",
    "Great Britain",
    "great-britain",
    "/images/flags/flag-uk.svg"
  ),
  France: Nation(
    "Франция",
    "Франции",
    "France",
    "france",
    "/images/flags/flag-france.webp"
  ),
  Italy: Nation(
    "Италия",
    "Италии",
    "Italy",
    "italy",
    "/images/flags/flag-italy.svg"
  ),
  Czechoslovakia: Nation(
    "Чехословакия",
    "Чехословакии",
    "Czechoslovakia",
    "czechoslovakia",
    "/images/flags/flag-czechoslovakia.svg"
  ),
  Japan: Nation(
    "Япония",
    "Японии",
    "Japan",
    "japan",
    "/images/flags/flag-japan.svg"
  ),
  Finland: Nation(
    "Финляндия",
    "Финляндии",
    "Finland",
    "finland",
    "/images/flags/flag-finland.png"
  ),
  Sweden: Nation(
    "Швеция",
    "Швеции",
    "Sweden",
    "sweden",
    "/images/flags/flag-sweden.svg"
  ),
  lithuania: Nation(
    "Литва",
    "Литвы",
    "Lithuania",
    "lithuania",
    "/images/flags/flag-lithuania.svg"
  ),
  netherlands: Nation(
    "Нидерланды",
    "Нидерландов",
    "Netherlands",
    "netherlands",
    "/images/flags/flag-netherlands.svg"
  ),
  romania: Nation(
    "Румыния",
    "Румынии",
    "Romania",
    "romania",
    "/images/flags/flag-romania.svg"
  ),
  poland: Nation(
    "Польша",
    "Польши",
    "Poland",
    "poland",
    "/images/flags/flag-poland.svg"
  ),
  yugoslavia: Nation(
    "Югославия",
    "Югославии",
    "Yugoslavia",
    "yugoslavia",
    "/images/flags/flag-yugoslavia.svg"
  ),
  hungary: Nation(
    "Венгрия",
    "Венгрии",
    "Hungary",
    "hungary",
    "/images/flags/flag-hungary.png"
  ),
};

// -------------------------------------------------------------------------

export const NATIONS_METHODS = {
  getObjectByPath(path: string) {
    for (let nation of Object.values(NATIONS)) {
      if (nation.path === path) return nation;
    }
  },
  getNationsAsArray(): INation[] {
    return Object.values(NATIONS);
  },
  identity: {
    isWorld(nation: INation | undefined) {
      return nation == NATIONS.World;
    },
  },
};
