import { DocumentOverflow } from "./../../utils/document-overflow";
import { makeAutoObservable } from "mobx";

export class BurgerStore {
  public open: boolean;

  constructor() {
    this.open = false;

    makeAutoObservable(this);
  }

  toggleOpen(): void {
    this.open = !this.open;
    this.open ? DocumentOverflow.setHidden() : DocumentOverflow.setAuto();
  }

  setOpen(): void {
    this.open = true;
    DocumentOverflow.setHidden();
  }

  setClose(): void {
    this.open = false;
    DocumentOverflow.setAuto();
  }
}

const burgerStore = new BurgerStore();
export default burgerStore;
