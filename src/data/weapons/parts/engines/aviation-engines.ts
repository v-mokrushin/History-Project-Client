interface IAviationEngines {
  [key: string]: IAviationEngine;
}

export interface IAviationEngine {
  readonly trademark: string;
  readonly type: string;
  readonly takeoffPower: number;
  readonly combatPower: number;
  readonly capacity: number;
  readonly motorResource: number;
}

export const AVIATION_ENGINES: IAviationEngines = {
  ["ВК-105ПФ2"]: {
    trademark: "ВК-105ПФ2",
    type: "дизельный V-образный 12-цилиндровый",
    takeoffPower: 1290,
    combatPower: 1290,
    capacity: 35.08,
    motorResource: 100,
  },
};
