const audioPlayerModule = (state) => state.audioPlayer;

const audioPlayerStatus = () => (state) => audioPlayerModule(state).status;

const currentTrack = () => (state) => audioPlayerModule(state).currentTrack;

export const audioSelect = {
  audioPlayerStatus,
  currentTrack,
};
