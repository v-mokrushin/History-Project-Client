import { action, makeAutoObservable, observable } from "mobx";

export interface IUserAccountInfo {
  id: string;
  username: string;
  avatar?: string;
  name?: string;
  surname?: string;
  registrationDate: Date;
}

export class AuthorizationStore {
  public isUserAuthorized: boolean = false;
  public user: undefined | IUserAccountInfo;

  constructor() {
    makeAutoObservable(this);
  }

  public authorizeUser(serverUserInformation: any): void {
    this.user = {
      ...serverUserInformation,
      registrationDate: new Date(
        Date.parse(serverUserInformation.registrationDate)
      ),
    };
    this.isUserAuthorized = true;
  }

  public unauthorizeUser(): void {
    this.isUserAuthorized = false;
    this.user = undefined;
  }
}

export const authorizationStore = new AuthorizationStore();
authorizationStore;
