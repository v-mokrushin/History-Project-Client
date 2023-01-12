import { WEAPONS } from "../../data/weapons/weapons";
import { makeAutoObservable } from "mobx";

export class SettingsStore {
  public colorized: boolean;
  public sortInAscending: boolean;

  constructor() {
    this.colorized = false;
    this.sortInAscending = false;

    makeAutoObservable(this);
  }

  toggleSortInAscending(): void {
    this.sortInAscending = !this.sortInAscending;
  }

  changeColorized(): void {
    WEAPONS.changeColorized();
    this.colorized = !this.colorized;
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
