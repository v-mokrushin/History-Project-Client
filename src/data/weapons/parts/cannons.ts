interface ICannon {
  trademark: string;
  caliber: number;
  length: number;
  type: string;
  chargingType: string;
  muzzleBrake: string;
  trigger?: string;
}

export const D25T: ICannon = {
  trademark: "Д-25T",
  caliber: 122,
  length: 48,
  type: "нарезное",
  chargingType: "раздельное",
  // combatFireRate: "< 3",
  muzzleBrake: "двухкамерный",
  trigger: "механический, электрический",
};

export const F34: ICannon = {
  trademark: "Ф-34",
  caliber: 76,
  length: 41.5,
  type: "нарезное",
  chargingType: "унитарное",
  muzzleBrake: "нет",
};
