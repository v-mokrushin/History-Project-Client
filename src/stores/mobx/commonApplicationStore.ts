import { action, makeAutoObservable, observable } from "mobx";

export class CommonApplicationStore {
  public searchDialogVisibility: boolean = false;

  constructor() {
    makeAutoObservable(this);
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
