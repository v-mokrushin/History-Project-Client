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
