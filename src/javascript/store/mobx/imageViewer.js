import { action, makeObservable, observable, makeAutoObservable } from "mobx";

export class ImageViewerStore {
  constructor() {
    this.url = "";
    this.open = false;

    makeAutoObservable(this);
  }

  setOpen(url) {
    this.url = url;
    this.open = true;
  }

  setClose() {
    this.open = false;
  }
}

const imageViewerStore = new ImageViewerStore();
export default imageViewerStore;
