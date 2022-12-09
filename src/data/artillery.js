import { WEAPONS_TYPE } from "../constants/weapons";
import { NATIONS } from "../constants/nations";

let USSR = [
  {
    name: "203-мм гаубица Б-4",
    type: WEAPONS_TYPE.artillery.specialPower,
    adoptedIntoServiceDate: 1931,
    icon: "icon.jpg",
  },
  {
    name: "152-мм гаубица МЛ-20",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
  {
    name: "152-мм гаубица Д-1",
    type: WEAPONS_TYPE.artillery.armyAndCorps,
    adoptedIntoServiceDate: 1943,
    icon: "icon.jpg",
  },
  {
    name: "122-мм гаубица M-30",
    type: WEAPONS_TYPE.artillery.division,
    adoptedIntoServiceDate: 1938,
    icon: "icon.jpeg",
  },
  {
    name: "76-мм пушка ЗИС-3",
    type: WEAPONS_TYPE.artillery.division,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "57-мм пушка ЗИС-2",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1941,
    icon: "icon.jpg",
  },
  {
    name: "45-мм пушка M-42",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1942,
    icon: "icon.jpg",
  },
  {
    name: "45-мм пушка 53-К",
    type: WEAPONS_TYPE.artillery.antitank,
    adoptedIntoServiceDate: 1937,
    icon: "icon.jpg",
  },
];
USSR = USSR.map((item) => ({
  ...item,
  nation: NATIONS.USSR,
}));

export const ARTILLERY_DATA = [...USSR];

ARTILLERY_DATA.forEach((item) => {
  let name = item.name;
  if (name.at(-1) === ".") name = name.slice(0, -1);

  Object.defineProperty(item, "id", {
    get: function () {
      return this.name.replaceAll(" ", "-");
    },
  });

  item.gallery = {
    icon:
      `/images/weapons/artillery/` +
      item.nation.path +
      "/" +
      name.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "") +
      "/" +
      item.icon,
  };
  delete item.icon;
});
