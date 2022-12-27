import { action, makeObservable, observable } from "mobx";

export class BurgerStore {
  public open: boolean;

  constructor() {
    this.open = false;

    makeObservable(this, {
      open: observable,
      toggleOpen: action,
      setOpen: action,
      setClose: action,
    });
  }

  toggleOpen(): void {
    this.open = !this.open;
    this.open
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }

  setOpen(): void {
    this.open = true;
    document.body.style.overflow = "hidden";
  }

  setClose(): void {
    this.open = false;
    document.body.style.overflow = "auto";
  }
}

const burgerStore = new BurgerStore();
export default burgerStore;
