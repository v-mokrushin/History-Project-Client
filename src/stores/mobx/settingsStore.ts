import { WEAPONS } from "../../data/weapons/weapons";
import { makeAutoObservable } from "mobx";
import { translateToBool as translateLocalstorageToBool } from "utils/common";

export class SettingsStore {
  public colorized: boolean;
  public sortInAscending: boolean;
  public displaySize: boolean;

  constructor() {
    this.colorized = translateLocalstorageToBool(localStorage.getItem("colorized"));
    this.sortInAscending = translateLocalstorageToBool(
      localStorage.getItem("sortInAscending")
    );
    this.displaySize = translateLocalstorageToBool(localStorage.getItem("displaySize"));

    makeAutoObservable(this);
  }

  toggleSortInAscending(): void {
    this.sortInAscending = !this.sortInAscending;
    localStorage.setItem("sortInAscending", String(this.sortInAscending));
  }

  changeColorized(): void {
    WEAPONS.changeColorized();
    this.colorized = !this.colorized;
    localStorage.setItem("colorized", String(this.colorized));
  }

  changeDisplaySize(): void {
    this.displaySize = !this.displaySize;
    localStorage.setItem("displaySize", String(this.displaySize));
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
