import { action, makeObservable, observable } from "mobx";

export class ImageViewerStore {
  constructor() {
    this.url = "";
    this.open = false;

    makeObservable(this, {
      url: observable,
      open: observable,
      setOpen: action,
      setClose: action,
    });
  }

  setOpen(url) {
    this.url = url;
    this.open = true;
  }

  setClose() {
    this.open = false;
  }
}
