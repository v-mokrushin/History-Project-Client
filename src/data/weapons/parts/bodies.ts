export interface IBodies {
  [key: string]: IBodyArmoring;
}

export interface IBodyArmoring {
  readonly name: string;
  readonly forehead: IСomplicatedDetail;
  readonly board: IСomplicatedDetail;
  readonly stern: IСomplicatedDetail;
  readonly bottom: string;
  readonly roof: string;
}

interface IСomplicatedDetail {
  top: string;
  bottom: string;
}

export const BODIES: IBodies = {
  ["ИС"]: {
    name: "ИС",
    forehead: {
      top: "120 мм / 60°",
      bottom: "100 мм / −30°",
    },
    board: { top: "90 - 120 мм / 15°", bottom: "90 мм / 0°" },
    stern: { top: "60 мм / 49°", bottom: "60 мм / -49°" },
    bottom: "20 мм",
    roof: "30 мм",
  },
  ["Т-34"]: {
    name: "Т-34",
    forehead: {
      top: "45 мм / 60°",
      bottom: "45 мм / −53°",
    },
    board: { top: "45 мм / 40°", bottom: "45 мм / 0°" },
    stern: { top: "40 мм / 47°", bottom: "40 мм / -45°" },
    bottom: "20 мм",
    roof: "20 мм",
  },
  ["СУ-85"]: {
    name: "СУ-85",
    forehead: {
      top: "45 мм / 50°",
      bottom: "45 мм / −45°",
    },
    board: { top: "45 мм / 20°", bottom: "45 мм / 0°" },
    stern: { top: "40 мм / 48°", bottom: "40 мм / -45°" },
    bottom: "15 мм",
    roof: "20 мм",
  },
};
