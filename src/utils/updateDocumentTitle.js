export const documentTitle = {
  setHomePage() {
    document.title = `${logo} | Энциклопедия ВМВ`;
  },
  setArticlesPage() {
    document.title = `${logo} | Статьи`;
  },
  setWeaponsPage() {
    document.title = `${logo} | Вооружения`;
  },
  setWarningPage() {
    document.title = `${logo}`;
  },
  addRoute(route) {
    document.title += ` | ${route}`;
  },
};

const logo = "HoF";
