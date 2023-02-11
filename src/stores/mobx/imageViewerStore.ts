import { action, makeObservable, observable, makeAutoObservable } from "mobx";

export class ImageViewerStore {
  public url: string | undefined;
  public open: boolean;
  public isCollection: boolean = false;
  public collection: string[] = [];
  private currentPhoto: number = 0;

  constructor() {
    this.url = undefined;
    this.open = false;

    makeAutoObservable(this);
  }

  public openPhoto(url: string): void {
    this.isCollection = false;
    this.url = url;
    this.open = true;
  }

  public openPhotoCollection(collection: string[], currentPhoto: number): void {
    this.isCollection = true;
    this.collection = collection;
    this.currentPhoto = currentPhoto;
    this.updateURL();
    this.open = true;
  }

  public switchPhoto(direction: boolean): void {
    if (!this.isCollection) return;
    if (direction && this.currentPhoto < this.collection.length - 1) {
      this.currentPhoto++;
      this.updateURL();
    } else if (!direction && this.currentPhoto > 0) {
      this.currentPhoto--;
      this.updateURL();
    }
  }

  private updateURL() {
    this.url = this.collection[this.currentPhoto];
  }

  public get counter(): string {
    return `${this.currentPhoto + 1} / ${this.collection.length}`;
  }

  public get isFarLeft(): boolean {
    return this.currentPhoto === 0;
  }

  public get isFarRight(): boolean {
    return this.currentPhoto === this.collection.length - 1;
  }

  public close(): void {
    if (this.open) {
      this.open = false;
      this.url = undefined;
    }
  }
}

const imageViewerStore = new ImageViewerStore();
export default imageViewerStore;
