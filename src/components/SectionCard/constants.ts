export interface ISectionCard {
  name: string;
  path: string;
  backgroundImage: string;
}

export const SECTION_CARD_TYPE = {
  articles: {
    name: "Статьи",
    path: "articles",
    backgroundImage: "/images/backgrounds/articles.jpg",
  },
  weapons: {
    name: "Вооружения",
    path: "weapons",
    backgroundImage: "/images/backgrounds/weapons.jpg",
  },
  battles: {
    name: "Сражения",
    path: "battles",
    backgroundImage: "/images/backgrounds/battles.jpg",
  },

  pages: {
    weapons: {
      aviation: {
        name: "Авиация",
        path: "aviation",
        backgroundImage: "/images/backgrounds/weapons/aviation.jpg",
      },
      armored: {
        name: "Бронетехника",
        path: "armored-vehicles",
        backgroundImage: "/images/backgrounds/weapons/armored.jpg",
      },
      smallArms: {
        name: "Стрелковое оружие",
        path: "small-arms",
        backgroundImage: "/images/backgrounds/weapons/gun.jpg",
      },
      artillery: {
        name: "Артиллерия",
        path: "artillery",
        backgroundImage: "/images/backgrounds/weapons/artillery.jpg",
      },
      grenadeLaunchers: {
        name: "Гранатометы",
        path: "grenade-launchers",
        backgroundImage: "/images/backgrounds/weapons/grenade-launchers.jpg",
      },
    },
  },
};
