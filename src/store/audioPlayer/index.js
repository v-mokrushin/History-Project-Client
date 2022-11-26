import { createSlice } from "@reduxjs/toolkit";

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
  // "/audio/dark-father.mp3",
];

// for (let i = 1; i < trackList.length; i++) {
//   trackList[]
// }

const initialState = {
  status: false,
  currentTrackNumber: 0,
  trackList,
  currentTrack: trackList[0],
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    play: (state) => {
      state.status = true;
    },
    stop: (state) => {
      state.status = false;
    },
    toggle: (state) => {
      state.status = !state.status;
    },
    next: (state) => {
      if (state.currentTrackNumber === state.trackList.length - 1)
        state.currentTrackNumber = 0;
      else state.currentTrackNumber++;
      state.currentTrack = state.trackList[state.currentTrackNumber];
      console.log(state.currentTrack);
    },
    previous: (state) => {
      if (state.currentTrackNumber === 0)
        state.currentTrackNumber = state.trackList.length - 1;
      else state.currentTrackNumber--;
      state.currentTrack = state.trackList[state.currentTrackNumber];
    },
  },
});

export const audioPlayerPlay = () => {
  audioPlayerSlice.actions.play();
};
