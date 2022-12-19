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

const switchNextTrack = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.next());
};

const switchPrevTrack = (dispatch, getState) => {
  dispatch(audioPlayerSlice.actions.previous());
};

export const audioMiddlewares = {
  play,
  stop,
  toggle,
  switchNextTrack,
  switchPrevTrack,
};
