export interface ITowers {
  [key: string]: ITowerArmoring;
}

export interface ITowerArmoring {
  readonly name: string;
  readonly forehead: string;
  readonly gunMask: string;
  readonly board: string;
  readonly stern: string;
  readonly roof: string;
}

export const TOWERS: ITowers = {
  ["ИС"]: {
    name: "ИС",
    forehead: "100 мм",
    gunMask: "100 мм",
    board: "100 мм / 20°",
    stern: "100 мм / 30°",
    roof: "30 мм",
  },
  ["Т-34 обр. 40-41 г."]: {
    name: "Т-34 обр. 40-41 г.",
    forehead: "45 мм",
    gunMask: "45 мм",
    board: "45 мм / 30°",
    stern: "45 мм / 30°",
    roof: "15 мм",
  },
  ["Т-34 обр. 42/43 г."]: {
    name: "Т-34 обр. 42/43 г.",
    forehead: "53 мм / 30°",
    gunMask: "45 мм",
    board: "53 мм / 21°",
    stern: "53 мм / 18°",
    roof: "15 мм",
  },
};
