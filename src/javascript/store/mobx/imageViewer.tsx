import { action, makeObservable, observable, makeAutoObservable } from "mobx";

export class ImageViewerStore {
  public url: string | null;
  public open: boolean;

  constructor() {
    this.url = null;
    this.open = false;

    makeAutoObservable(this);
  }

  setOpen(url: string): void {
    this.url = url;
    this.open = true;
  }

  setClose(): void {
    this.open = false;
    this.url = null;
  }
}

const imageViewerStore = new ImageViewerStore();
export default imageViewerStore;
