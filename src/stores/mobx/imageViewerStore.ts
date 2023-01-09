import { action, makeObservable, observable, makeAutoObservable } from "mobx";

export class ImageViewerStore {
  public url: string | undefined;
  public open: boolean;

  constructor() {
    this.url = undefined;
    this.open = false;

    makeAutoObservable(this);
  }

  setOpen(url: string): void {
    this.url = url;
    this.open = true;
  }

  setClose(): void {
    this.open = false;
    this.url = undefined;
  }
}

const imageViewerStore = new ImageViewerStore();
export default imageViewerStore;
