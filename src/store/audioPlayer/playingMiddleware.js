import { audioPlayerSlice } from ".";

const play = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.play());
};

const stop = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.stop());
};

const toggle = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.toggle());
};

export const audioMiddlewares = {
  play,
  stop,
  toggle,
};
