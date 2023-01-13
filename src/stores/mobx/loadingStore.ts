import { action, makeAutoObservable, observable, runInAction } from "mobx";

export class LoadingStore {
  private status: boolean;
  private loadedIds: string[];

  constructor() {
    this.status = true;
    this.loadedIds = [];

    makeAutoObservable(this);
  }

  getStatus(): boolean {
    return this.status;
  }

  checkLoading(weaponId: string | undefined): void {
    if (!weaponId) return;
    if (!this.loadedIds.includes(weaponId)) {
      this.loadedIds.push(weaponId);
      this.status = true;

      setTimeout(() => {
        runInAction(() => {
          this.status = false;
        });
      }, 700);
    } else {
      this.status = false;
    }
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
