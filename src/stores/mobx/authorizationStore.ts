import axios from "axios";
import { Server } from "config/server";
import { IUserAccountInfo } from "interfaces/account";
import { action, makeAutoObservable, observable } from "mobx";

export class AuthorizationStore {
  public isUserAuthorized: boolean = false;
  public user: undefined | IUserAccountInfo;

  constructor() {
    makeAutoObservable(this);
  }

  public authorizeUser(serverUserInformation: any): void {
    console.log(serverUserInformation);
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

  public addViewsHistory(articleId: string) {
    if (this.isUserAuthorized) {
      const viewsHistory = this.user?.viewsHistory;

      if (viewsHistory) {
        const index = viewsHistory?.indexOf(articleId);

        if (index == -1) {
          viewsHistory.unshift(articleId);
        } else {
          viewsHistory.splice(index, 1);
          viewsHistory.unshift(articleId);
        }
      }

      axios
        .post(Server.path("/users/set-views-history"), {
          userId: this.user?.id,
          viewsHistory: this.user?.viewsHistory,
        })
        .then((response) => {})
        .catch((error) => {});
    }
  }
}

export const authorizationStore = new AuthorizationStore();
