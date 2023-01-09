interface ICannon {
  trademark: string;
  caliber: number;
  length: number;
  muzzleVelocity: number;
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
    muzzleVelocity: 800,
    type: "нарезное",
    chargingType: "раздельное",
    muzzleBrake: "двухкамерный",
    trigger: "механический, электрический",
  },
  {
    trademark: "Ф-34",
    caliber: 76,
    length: 41.5,
    muzzleVelocity: 655,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "нет",
  },
  {
    trademark: "8,8 cm KwK 36",
    caliber: 88,
    length: 56,
    muzzleVelocity: 810,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "да",
  },
  {
    trademark: "7,5 cm KwK 42",
    caliber: 75,
    length: 70,
    muzzleVelocity: 935,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "да",
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
