import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import { DocumentTitle } from "utils/document-title";
import { NAVIGATION_ACTUAL_SECTION } from "../../components/Structure/Navigation/constants";

export class ActualSectionStore {
  public actualSection: NAVIGATION_ACTUAL_SECTION | null;

  constructor() {
    this.actualSection = null;
    makeAutoObservable(this);
  }

  set(path: string, length?: number): void {
    if (path == "/") {
      this.actualSection = NAVIGATION_ACTUAL_SECTION.home;
      DocumentTitle.setHomePage();
    }
    if (path == "/weapons") {
      this.actualSection = NAVIGATION_ACTUAL_SECTION.weapons;
      DocumentTitle.setWeaponsPage();
    }
    if (path == "/articles") {
      this.actualSection = NAVIGATION_ACTUAL_SECTION.articles;
      DocumentTitle.setArticlesPage();
    }
    if (path == "/battles") {
      this.actualSection = NAVIGATION_ACTUAL_SECTION.battles;
    }

    if (path == "/gallery") {
      this.actualSection = NAVIGATION_ACTUAL_SECTION.gallery;
      DocumentTitle.set("Галерея");
    }
  }

  throw(): void {
    this.actualSection = null;
  }

  isHome(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.home;
  }

  isWeapons(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.weapons;
  }

  isArticles(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.articles;
  }

  isBattles(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.battles;
  }

  isGallery(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.gallery;
  }
}

const actualSectionStore = new ActualSectionStore();
export default actualSectionStore;
