import { action, makeObservable, observable } from "mobx";
import { NAVIGATION_ACTUAL_SECTION } from "../../../jsx/components/Navigation/constants";

export class ActualSectionStore {
  constructor() {
    this.actualSection = null;

    makeObservable(this, {
      actualSection: observable,
      set: action,
      isHome: action,
      isWeapons: action,
      isArticles: action,
      isBattles: action,
    });
  }

  set(path) {
    if (path == "/") this.actualSection = NAVIGATION_ACTUAL_SECTION.home;
    if (path == "/weapons")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.weapons;
    if (path == "/articles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.articles;
    if (path == "/battles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.battles;
  }

  isHome() {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.home;
  }

  isWeapons() {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.weapons;
  }

  isArticles() {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.articles;
  }

  isBattles() {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.battles;
  }
}

const actualSectionStore = new ActualSectionStore();
export default actualSectionStore;
