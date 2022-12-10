import { ARMORED_VEHICLES } from "./armored";
import { ARTILLERY_DATA } from "./artillery";
import { AVIATION_DATA } from "./aviation";
import { SMALL_ARMS_DATA } from "./smallArms";

export const WEAPONS_DATA = [
  ...ARMORED_VEHICLES,
  ...AVIATION_DATA,
  ...ARTILLERY_DATA,
  ...SMALL_ARMS_DATA,
];
