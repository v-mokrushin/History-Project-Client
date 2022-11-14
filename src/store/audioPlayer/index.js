import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
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
  },
});

export const audioPlayerPlay = () => {
  audioPlayerSlice.actions.play();
};
