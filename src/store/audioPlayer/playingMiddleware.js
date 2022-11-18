import { audioPlayerSlice } from ".";

export const playAudio = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.play());
};

export const stopAudio = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.stop());
};

export const toggleAudio = (dispatch, getState) => {
  console.log("toggle");
  dispatch(audioPlayerSlice.actions.toggle());
};
