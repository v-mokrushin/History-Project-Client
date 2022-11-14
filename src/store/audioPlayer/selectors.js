export const selectAudioPlayerModule = (state) => state.audioPlayer;

export const selectAudioPlayerStatus = (state) =>
  selectAudioPlayerModule(state).status;
