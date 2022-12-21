import { action, makeObservable, observable } from "mobx";

export class XStore {
  constructor() {
    this.status = false;

    makeObservable(this, {
      status: observable,
      play: action,
    });
  }

  play() {
    this.status = true;
  }
}

const xStore = new AudioPlayerStore();
export default xStore;
