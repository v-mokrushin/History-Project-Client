import { action, makeAutoObservable, observable } from "mobx";

export class CommonApplicationStore {
  public searchDialogVisibility: boolean = false;
  public rdinarHeaderVisibility: boolean = false;
  public logInDialogVisibility: boolean = false;
  public isUserAuthorized: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public setShowOrdinarHeader(value: boolean): void {
    this.rdinarHeaderVisibility = value;
  }

  public showSearchDialog(): void {
    this.searchDialogVisibility = true;
  }

  public hideSearchDialog(): void {
    this.searchDialogVisibility = false;
  }

  public showLogInDialog(): void {
    this.logInDialogVisibility = true;
  }

  public hideLogInDialog(): void {
    this.logInDialogVisibility = false;
  }

  public setIsUserAuthorized(value: boolean): void {
    this.isUserAuthorized = value;
    console.log('ss')
  }
}

const commonApplicationStore = new CommonApplicationStore();
export default commonApplicationStore;
