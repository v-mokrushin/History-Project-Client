interface ITower {
  name: string;
  forehead: string;
  gunMask: string;
  board: string;
  stern: string;
  roof: string;
}

class Towers {
  private towers = TOWERS_DATA;

  get(name: string) {
    return this.towers.find((tower) => tower.name === name);
  }
}

const TOWERS_DATA: ITower[] = [
  {
    name: "ИС",
    forehead: "100 мм",
    gunMask: "100 мм",
    board: "100 мм / 20°",
    stern: "100 мм / 30°",
    roof: "30 мм",
  },
  {
    name: "Т-34 обр. 40-41 г.",
    forehead: "45 мм",
    gunMask: "45 мм",
    board: "45 мм / 30°",
    stern: "45 мм / 30°",
    roof: "15 мм",
  },
  {
    name: "Т-34 обр. 42-43 г.",
    forehead: "53 мм / 30°",
    gunMask: "45 мм",
    board: "53 мм / 21°",
    stern: "53 мм / 18°",
    roof: "15 мм",
  },
];

export const TOWERS = new Towers();
