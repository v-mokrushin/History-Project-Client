interface IEngine {
  trademark: string;
  type: string;
  power: number;
  capacity: number;
}

class Engines {
  private engines = ENGINES_DATA;

  constructor() {}

  get(trademark: string) {
    return this.engines.find((engine) => engine.trademark === trademark);
  }
}

const ENGINES_DATA: IEngine[] = [
  {
    trademark: "В-2ИС",
    type: "дизельный V-образный 12-цилиндровый",
    power: 520,
    capacity: 38.88,
  },
  {
    trademark: "В-2",
    type: "дизельный V-образный 12-цилиндровый",
    power: 500,
    capacity: 38.88,
  },
];

export const ENGINES = new Engines();
