interface ICannon {
  trademark: string;
  caliber: number;
  length: number;
  type: string;
  chargingType: string;
  muzzleBrake: string;
  trigger?: string;
}

const CANNONS_DATA: ICannon[] = [
  {
    trademark: "Д-25T",
    caliber: 122,
    length: 48,
    type: "нарезное",
    chargingType: "раздельное",
    muzzleBrake: "двухкамерный",
    trigger: "механический, электрический",
  },
  {
    trademark: "Ф-34",
    caliber: 76,
    length: 41.5,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "нет",
  },
];

class Cannons {
  private cannons = CANNONS_DATA;

  constructor() {}

  get(trademark: string) {
    return this.cannons.find((cannon) => cannon.trademark === trademark);
  }
}

export const CANNONS = new Cannons();
