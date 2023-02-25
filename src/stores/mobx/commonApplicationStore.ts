import { action, makeAutoObservable, observable } from "mobx";

export class CommonApplicationStore {
  public searchDialogVisibility: boolean = false;
  public rdinarHeaderVisibility: boolean = false;
  public logInDialogVisibility: boolean = false;
  public registrationDialogVisibility: boolean = false;
  public bannerVisibility: boolean = false;
  public bannerTitle: string = "";

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

  public showRegistrationDialog(): void {
    this.registrationDialogVisibility = true;
  }

  public hideRegistrationDialog(): void {
    this.registrationDialogVisibility = false;
  }

  public showBanner(title: string): void {
    this.bannerTitle = title;
    this.bannerVisibility = true;
  }

  public hideBanner(): void {
    this.bannerVisibility = false;
  }
}

const commonApplicationStore = new CommonApplicationStore();
export default commonApplicationStore;
