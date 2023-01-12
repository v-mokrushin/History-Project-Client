interface ICannons {
  [key: string]: ICannon;
}

export interface ICannon {
  readonly trademark: string;
  readonly caliber: number;
  readonly length: number;
  readonly muzzleVelocity: number;
  readonly type: string;
  readonly chargingType: string;
  readonly muzzleBrake: string;
  readonly trigger?: string;
}

export const CANNONS: ICannons = {
  ["Д-25T"]: {
    trademark: "Д-25T",
    caliber: 122,
    length: 48,
    muzzleVelocity: 800,
    type: "нарезное",
    chargingType: "раздельное",
    muzzleBrake: "двухкамерный",
    trigger: "механический, электрический",
  },
  ["Ф-34"]: {
    trademark: "Ф-34",
    caliber: 76,
    length: 41.5,
    muzzleVelocity: 655,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "нет",
  },
  ["8,8 cm KwK 36"]: {
    trademark: "8,8 cm KwK 36",
    caliber: 88,
    length: 56,
    muzzleVelocity: 810,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "да",
  },
  ["7,5 cm KwK 42"]: {
    trademark: "7,5 cm KwK 42",
    caliber: 75,
    length: 70,
    muzzleVelocity: 935,
    type: "нарезное",
    chargingType: "унитарное",
    muzzleBrake: "да",
  },
};
