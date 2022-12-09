import { ARMORED_VEHICLES } from "./armored";
import { ARTILLERY_DATA } from "./artillery";
import { AVIATION_DATA } from "./aviation";

export const WEAPONS_DATA = [
  ...ARMORED_VEHICLES,
  ...AVIATION_DATA,
  ...ARTILLERY_DATA,
];
