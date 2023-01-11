interface IEngines {
  [key: string]: IEngine;
}

export interface IEngine {
  readonly trademark: string;
  readonly type: string;
  readonly power: number;
  readonly capacity: number;
}

export const ENGINES: IEngines = {
  ["В-2"]: {
    trademark: "В-2",
    type: "дизельный V-образный 12-цилиндровый",
    power: 500,
    capacity: 38.88,
  },
  ["В-2-34"]: {
    trademark: "В-2-34",
    type: "дизельный V-образный 12-цилиндровый",
    power: 500,
    capacity: 38.88,
  },
  ["В-2ИС"]: {
    trademark: "В-2ИС",
    type: "дизельный V-образный 12-цилиндровый",
    power: 520,
    capacity: 38.88,
  },
  ["Maybach HL 230"]: {
    trademark: "Maybach HL 230",
    type: "бензиновый V-образный 12-цилиндровый",
    power: 700,
    capacity: 23,
  },
};
