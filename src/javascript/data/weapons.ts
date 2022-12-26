import { NATIONS } from "../constants/nations";
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

WEAPONS_DATA.forEach((item) => {
  let name = item.name;
  if (name.at(-1) === ".") name = name.slice(0, -1);

  Object.defineProperty(item, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-").replaceAll("/", "-");
    },
  });

  item.gallery = {
    icon:
      `/images/weapons/${item.type.branch.path}/` +
      item.nation.path +
      "/" +
      name
        .replaceAll(" ", "-")
        .replaceAll("/", "-")
        .replaceAll("«", "")
        .replaceAll("»", "")
        .replaceAll("(", "")
        .replaceAll(")", "") +
      "/" +
      item.icon,
  };

  delete item.icon;
});

// --------------------------------------------------------------------------------

export const WEAPONS_DATA_METHODS = {
  getUniqueDates(collection: any[]): number[] {
    let dates = collection.map((item) => item.adoptedIntoServiceDate);
    dates = Array.from(new Set(dates)).sort((a, b) => b - a);
    return dates;
  },
  selectWeapons(
    weaponsBranchPath: string | undefined,
    nationPath: string | undefined
  ): any[] {
    return WEAPONS_DATA.filter(
      (item) => item.type.branch.path === weaponsBranchPath
    ).filter(
      (item) =>
        nationPath === NATIONS.world.path || item.nation.path === nationPath
    );
  },
  filterWeapons(selectedWeapons: any[], isEmpty: boolean, filters: any) {
    if (isEmpty) {
      return selectedWeapons;
    } else {
      return selectedWeapons.filter(
        (item) => item.type.name.russian === filters.type.name.russian
      );
    }
  },
};