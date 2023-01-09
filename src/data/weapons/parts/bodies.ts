interface IBody {
  name: string;
  forehead: IСomplicatedDetail;
  board: IСomplicatedDetail;
  stern: IСomplicatedDetail;
  bottom: string;
  roof: string;
}

interface IСomplicatedDetail {
  top: string;
  bottom: string;
}

class Bodies {
  private bodies = BODIES_DATA;

  get(name: string) {
    return this.bodies.find((body) => body.name === name);
  }
}

const BODIES_DATA: IBody[] = [
  {
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
  {
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
];

export const BODIES = new Bodies();
