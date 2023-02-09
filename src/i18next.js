import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        "navigation.main": "главная",
        "navigation.articles": "статьи",
        "navigation.weapons": "вооружения",
        "navigation.battles": "сражения",
        "navigation.music": "музыка",
        "filters.input": "Название",
        "filters.country": "Страна",
      },
    },
    en: {
      translation: {
        "navigation.main": "main",
        "navigation.articles": "articles",
        "navigation.weapons": "weapons",
        "navigation.battles": "battles",
        "navigation.music": "music",
        "filters.input": "Name",
        "filters.country": "Сountry",
      },
    },
  },
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
