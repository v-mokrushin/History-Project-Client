import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import { NAVIGATION_ACTUAL_SECTION } from "../../../jsx/components/Navigation/constants";

export class ActualSectionStore {
  private actualSection: string | null;

  constructor() {
    this.actualSection = null;

    makeAutoObservable(this);
  }

  set(path: string): void {
    if (path == "/") this.actualSection = NAVIGATION_ACTUAL_SECTION.home;
    if (path == "/weapons")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.weapons;
    if (path == "/articles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.articles;
    if (path == "/battles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.battles;
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
}

const actualSectionStore = new ActualSectionStore();
export default actualSectionStore;
