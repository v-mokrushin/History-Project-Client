import { IUser } from "./../../testing-templates/user-accounts";
import { action, makeAutoObservable, observable } from "mobx";

export class AuthorizationStore {
  public isUserAuthorized: boolean = false;
  public authorizedUser: undefined | IUser;

  constructor() {
    makeAutoObservable(this);
  }

  public authorizeUser(user: IUser): void {
    this.isUserAuthorized = true;
    this.authorizedUser = user;
  }

  public unauthorizeUser(): void {
    this.isUserAuthorized = false;
    this.authorizedUser = undefined;
  }
}

const authorizationStore = new AuthorizationStore();
export default authorizationStore;
