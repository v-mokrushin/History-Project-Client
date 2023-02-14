import { Weapons } from "../../data/weapons/weapons";
import { makeAutoObservable } from "mobx";
import { translateToBool as translateLocalstorageToBool } from "utils/common";

export enum DisplayOnPreview {
  weapons = "вооружения",
  ingraphic = "инфографику",
}

export class SettingsStore {
  public colorized: boolean;
  public sortInAscending: boolean;
  public displaySize: boolean;
  public displayOnPreview: string;
  public language: string;

  constructor() {
    this.colorized = translateLocalstorageToBool(
      localStorage.getItem("colorized")
    );
    this.sortInAscending = translateLocalstorageToBool(
      localStorage.getItem("sortInAscending")
    );
    this.displaySize = translateLocalstorageToBool(
      localStorage.getItem("displaySize")
    );
    this.displayOnPreview = DisplayOnPreview.weapons;
    this.language = "russian";

    makeAutoObservable(this);
  }

  // getLang(): string {
  //   if(this.language==='ru') return 
  // }

  toggleSortInAscending(): void {
    this.sortInAscending = !this.sortInAscending;
    localStorage.setItem("sortInAscending", String(this.sortInAscending));
  }

  toggleColorized(): void {
    Weapons.changeColorized();
    this.colorized = !this.colorized;
    localStorage.setItem("colorized", String(this.colorized));
  }

  toggleDisplaySize(): void {
    this.displaySize = !this.displaySize;
    localStorage.setItem("displaySize", String(this.displaySize));
  }

  toggleDisplayOnPreview(): void {
    if (this.displayOnPreview === DisplayOnPreview.weapons) {
      this.displayOnPreview = DisplayOnPreview.ingraphic;
    } else {
      this.displayOnPreview = DisplayOnPreview.weapons;
    }
  }

  toggleLanguage(): string {
    if (this.language === "russian") this.language = "english";
    else this.language = "russian";
    return this.language;
  }

  resetDisplayOnPreview(): void {
    this.displayOnPreview = DisplayOnPreview.weapons;
  }
}

const settingsStore = new SettingsStore();
export default settingsStore;
