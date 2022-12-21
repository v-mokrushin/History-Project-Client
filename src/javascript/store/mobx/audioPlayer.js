import { action, makeObservable, observable } from "mobx";
import { shuffleTracks } from "../../utils/common";

let trackList = [
  "/audio/de-wolfe-intro.mp3",
  "/audio/liberation.mp3",
  "/audio/apocalypse.mp3",
  "/audio/dead-of-night.mp3",
  "/audio/farewell-to-peace.mp3",
  "/audio/mac-arthur.mp3",
  "/audio/the-trap.mp3",
  "/audio/head-theme.mp3",
  "/audio/neutral-theme.mp3",
  "/audio/pacific-attack.mp3",
  "/audio/rise-of-nazism.mp3",
  "/audio/dark-father.mp3",
];
shuffleTracks(trackList);

export class AudioPlayerStore {
  constructor() {
    this.status = false;
    this.currentTrack = trackList[0];
    this.currentTrackNumber = 0;
    this.trackList = trackList;

    makeObservable(this, {
      status: observable,
      currentTrackNumber: observable,
      trackList: observable,
      play: action,
      stop: action,
      toggle: action,
      next: action,
      previous: action,
    });
  }

  play() {
    this.status = true;
  }

  stop() {
    this.status = false;
  }

  toggle() {
    this.status = !this.status;
  }

  next() {
    if (this.currentTrackNumber === this.trackList.length - 1)
      this.currentTrackNumber = 0;
    else this.currentTrackNumber++;
    this.currentTrack = this.trackList[this.currentTrackNumber];
  }

  previous() {
    if (this.currentTrackNumber === 0)
      this.currentTrackNumber = this.trackList.length - 1;
    else this.currentTrackNumber--;
    this.currentTrack = this.trackList[this.currentTrackNumber];
  }
}

const audioPlayerStore = new AudioPlayerStore();
export default audioPlayerStore;
