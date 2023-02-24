import { action, makeAutoObservable, observable } from "mobx";

export class AuthorizationStore {
  public isUserAuthorized: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public setIsUserAuthorized(value: boolean): void {
    this.isUserAuthorized = value;
    console.log("ss");
  }
}

const authorizationStore = new AuthorizationStore();
export default authorizationStore;
