import { action, makeObservable, observable } from "mobx";

export class ScrollMemoryStore {
  constructor() {
    this.value = 0;
    this.shouldRemember = false;

    makeObservable(this, {
      value: observable,
      setValue: action,
    });
  }

  setValue(val) {
    if (this.shouldRemember) this.value = val;
  }

  activate() {
    window.scrollTo(0, this.value);
  }
}

const scrollMemoryStore = new ScrollMemoryStore();
export default scrollMemoryStore;
