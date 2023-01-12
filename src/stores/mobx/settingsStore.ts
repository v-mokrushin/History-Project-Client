import { WEAPONS } from "../../data/weapons/weapons";
import { makeAutoObservable } from "mobx";

export class SettingsStore {
  public colorized: boolean;
  public sortInAscending: boolean;
  public displaySize: boolean;

  constructor() {
    this.colorized = false;
    this.sortInAscending = false;
    this.displaySize = false;

    makeAutoObservable(this);
  }

  toggleSortInAscending(): void {
    this.sortInAscending = !this.sortInAscending;
  }

  changeColorized(): void {
    WEAPONS.changeColorized();
    this.colorized = !this.colorized;
  }

  changeDisplaySize(): void {
    this.displaySize = !this.displaySize;
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
