import { action, makeObservable, observable } from "mobx";

export class ScrollMemoryStore {
  public value: number;
  public shouldRemember: boolean;

  constructor() {
    this.value = 0;
    this.shouldRemember = false;

    makeObservable(this, {
      value: observable,
      setValue: action,
      cencel: action,
    });
  }

  setValue(val: number): void {
    if (this.shouldRemember) this.value = val;
  }

  activate(): void {
    window.scrollTo(0, this.value);
  }

  cencel(): void {
    this.value = 0;
  }
}

const scrollMemoryStore = new ScrollMemoryStore();
export default scrollMemoryStore;
