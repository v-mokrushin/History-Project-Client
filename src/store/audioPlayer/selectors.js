const audioPlayerModule = (state) => state.audioPlayer;

const audioPlayerStatus = () => (state) => audioPlayerModule(state).status;

export const audioSelect = {
  audioPlayerStatus,
};
