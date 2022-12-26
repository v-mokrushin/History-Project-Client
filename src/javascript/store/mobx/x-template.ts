import { action, makeAutoObservable, observable } from "mobx";

export class XStore {
  public status: boolean;

  constructor() {
    this.status = false;

    makeAutoObservable(this);
  }

  play(): void {
    this.status = true;
  }
}

const xStore = new XStore();
export default xStore;
