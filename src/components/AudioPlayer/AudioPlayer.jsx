import classNames from "classnames";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { audioPlayerSlice } from "../../store/audioPlayer";
import { audioMiddlewares } from "../../store/audioPlayer/playingMiddleware";
import { audioSelect } from "../../store/audioPlayer/selectors";
import styles from "./AudioPlayer.module.scss";

export default function AudioPlayer({ isMainPlayer = false }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(audioSelect.audioPlayerStatus());
  const currentTrack = useSelector(audioSelect.currentTrack());

  const audio = useRef(null);

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
  }, [isPlaying, currentTrack]);

  return (
    <div className={classNames(styles.root)}>
      {isMainPlayer && (
        <audio
          ref={audio}
          src={currentTrack}
          onEnded={() => dispatch(audioMiddlewares.switchNextTrack)}
        />
      )}
      <div className={classNames(styles.buttonBox)}>
        <button
          className={classNames(
            styles.previousButton,
            isPlaying && styles.scale1
          )}
          onClick={() => dispatch(audioMiddlewares.switchPrevTrack)}
        ></button>
        <button
          className={classNames(
            styles.playButton,
            isPlaying ? styles.displayNone : styles.displayBlock
          )}
          onClick={() => dispatch(audioMiddlewares.toggle)}
        ></button>
        <button
          className={classNames(
            styles.stopButton,
            isPlaying ? styles.displayBlock : styles.displayNone
          )}
          onClick={() => dispatch(audioMiddlewares.toggle)}
        ></button>
        <button
          className={classNames(styles.nextButton, isPlaying && styles.scale1)}
          onClick={() => dispatch(audioMiddlewares.switchNextTrack)}
        ></button>
      </div>
    </div>
  );
}
