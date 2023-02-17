const logo = "HoF";

export const DocumentTitle = {
  setHomePage(): void {
    document.title = `${logo} | Энциклопедия ВМВ`;
  },
  setArticlesPage(): void {
    document.title = `${logo} | Статьи`;
  },
  setWeaponsPage(): void {
    document.title = `${logo} | Вооружения`;
  },
  setWarningPage(): void {
    document.title = `${logo}`;
  },
  set(title: string): void {
    document.title = `${logo} | ${title}`;
  },
  addRoute(route: string): void {
    document.title += ` | ${route}`;
  },
};
