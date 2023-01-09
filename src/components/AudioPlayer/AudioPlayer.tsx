import classNames from "classnames";
import React, { useRef } from "react";
import styles from "./AudioPlayer.module.scss";
import { observer } from "mobx-react";
import audioPlayerStore from "../../stores/mobx/audioPlayerStore";

interface IAudioPlayerProps {
  isMainPlayer?: boolean;
}

const AudioPlayer = observer(({ isMainPlayer = false }: IAudioPlayerProps) => {
  const audio = useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (isMainPlayer) {
      if (audioPlayerStore.status) {
        if (audio && audio.current) audio.current.play();
        return;
      }
      if (!audioPlayerStore.status) {
        if (audio && audio.current) audio.current.pause();
        return;
      }
    }
  }, [audioPlayerStore.status, audioPlayerStore.currentTrack]);

  return (
    <div className={classNames(styles.root)}>
      {isMainPlayer && (
        <audio
          ref={audio}
          src={audioPlayerStore.currentTrack}
          onEnded={() => audioPlayerStore.next()}
        />
      )}
      <div className={classNames(styles.buttonBox)}>
        <button
          className={classNames(
            styles.previousButton,
            audioPlayerStore.status && styles.scale1
          )}
          onClick={() => audioPlayerStore.previous()}
        ></button>
        <button
          className={classNames(
            styles.playButton,
            audioPlayerStore.status ? styles.displayNone : styles.displayBlock
          )}
          onClick={() => audioPlayerStore.toggle()}
        ></button>
        <button
          className={classNames(
            styles.stopButton,
            audioPlayerStore.status ? styles.displayBlock : styles.displayNone
          )}
          onClick={() => audioPlayerStore.toggle()}
        ></button>
        <button
          className={classNames(
            styles.nextButton,
            audioPlayerStore.status && styles.scale1
          )}
          onClick={() => audioPlayerStore.next()}
        ></button>
      </div>
    </div>
  );
});

export default AudioPlayer;
