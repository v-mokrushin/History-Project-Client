import {
  action,
  makeObservable,
  observable,
  toJS,
  makeAutoObservable,
} from "mobx";
import { shuffleArray } from "../../utils/common";

let trackList: string[] = [
  "/audio/de-wolfe-intro.mp3",
  "/audio/liberation.mp3",
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
shuffleArray(trackList);
trackList.unshift("/audio/apocalypse.mp3");

export class AudioPlayerStore {
  public status: boolean;
  public currentTrack: string;
  private currentTrackNumber: number;
  private trackList: string[];

  constructor() {
    this.status = false;
    this.currentTrack = trackList[0];
    this.currentTrackNumber = 0;
    this.trackList = trackList;

    makeAutoObservable(this);
  }

  play(): void {
    this.status = true;
  }

  stop(): void {
    this.status = false;
  }

  toggle(): void {
    this.status = !this.status;
  }

  next(): void {
    if (this.currentTrackNumber === this.trackList.length - 1)
      this.currentTrackNumber = 0;
    else this.currentTrackNumber++;
    this.currentTrack = this.trackList[this.currentTrackNumber];
  }

  previous(): void {
    if (this.currentTrackNumber === 0)
      this.currentTrackNumber = this.trackList.length - 1;
    else this.currentTrackNumber--;
    this.currentTrack = this.trackList[this.currentTrackNumber];
  }
}

const audioPlayerStore = new AudioPlayerStore();
export default audioPlayerStore;
