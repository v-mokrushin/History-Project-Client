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

  public updateInfo(
    name: string | undefined,
    surname: string | undefined,
    avatar: string | undefined
  ) {
    if (this.user) {
      this.user.name = name;
      this.user.surname = surname;
      this.user.avatar = avatar;
    }
  }

  public getEditableInfo() {
    const info = {
      name: this.user?.name,
      surname: this.user?.surname,
      avatar: this.user?.avatar,
    };
    return info;
  }
}

export const authorizationStore = new AuthorizationStore();
authorizationStore;
