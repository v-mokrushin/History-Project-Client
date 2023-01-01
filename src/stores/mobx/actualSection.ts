import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import { NAVIGATION_ACTUAL_SECTION } from "../../components/Navigation/constants";

export class ActualSectionStore {
  public actualSection: string | null;
  private length: number | undefined;

  constructor() {
    this.actualSection = null;
    this.length = 0;

    makeAutoObservable(this);
  }

  set(path: string, length?: number): void {
    if (path == "/") this.actualSection = NAVIGATION_ACTUAL_SECTION.home;
    if (path == "/weapons")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.weapons;
    if (path == "/articles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.articles;
    if (path == "/battles")
      this.actualSection = NAVIGATION_ACTUAL_SECTION.battles;

    this.length = length;
  }

  isHome(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.home;
  }

  isWeapons(): boolean {
    return this.actualSection === NAVIGATION_ACTUAL_SECTION.weapons;
  }

  isWeaponsPreview(): boolean {
    return (
      this.actualSection === NAVIGATION_ACTUAL_SECTION.weapons &&
      this.length === 4
    );
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
