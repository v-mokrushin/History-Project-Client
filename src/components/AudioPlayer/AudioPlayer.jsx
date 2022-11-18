import classNames from "classnames";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playAudio,
  stopAudio,
} from "../../store/audioPlayer/playingMiddleware";
import { selectAudioPlayerStatus } from "../../store/audioPlayer/selectors";
import styles from "./AudioPlayer.module.scss";

export default function AudioPlayer({ isMainPlayer = false, children }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => selectAudioPlayerStatus(state));

  const audio = useRef(null);
  const playBox = useRef(null);
  const stopBox = useRef(null);

  React.useEffect(() => {
    if (isMainPlayer) {
      if (isPlaying) {
        audio.current.play();
        return;
      }
      if (!isPlaying) {
        audio.current.pause();
        return;
      }
    }
  }, [isPlaying]);

  const playerOnPlay = () => {
    dispatch(playAudio);
  };

  const playerOnStop = () => {
    dispatch(stopAudio);
  };

  const togglePlaying = () => {
    if (!isPlaying) playerOnPlay();
    if (isPlaying) playerOnStop();
  };

  return (
    <div className={classNames(styles.root)}>
      <audio ref={audio} src="audio/apocalypse.mp3" loop />
      <span onClick={() => togglePlaying()}>{children}</span>
      <div className={classNames(styles.buttonBox)}>
        <div
          ref={playBox}
          className={classNames(
            styles.playButton,
            isPlaying ? styles.displayNone : styles.displayBlock
          )}
          onClick={playerOnPlay}
        ></div>
        <div
          ref={stopBox}
          className={classNames(
            styles.stopButton,
            isPlaying ? styles.displayBlock : styles.displayNone
          )}
          onClick={playerOnStop}
        ></div>
      </div>
    </div>
  );
}
