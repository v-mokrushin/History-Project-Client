import { audioPlayerSlice } from ".";

export const playAudio = (dispatch, detState) => {
  dispatch(audioPlayerSlice.actions.play());
};

export const stopAudio = (dispatch, detState) => {
  dispatch(audioPlayerSlice.actions.stop());
};
