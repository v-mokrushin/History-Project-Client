import { action, makeAutoObservable, observable } from "mobx";

export class CommonApplicationStore {
  public searchDialogVisibility: boolean = false;
  public showOrdinarHeader: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public setShowOrdinarHeader(value: boolean): void {
    this.showOrdinarHeader = value;
  }

  public showSearchDialog(): void {
    this.searchDialogVisibility = true;
  }

  public hideSearchDialog(): void {
    this.searchDialogVisibility = false;
  }
}

const commonApplicationStore = new CommonApplicationStore();
export default commonApplicationStore;
