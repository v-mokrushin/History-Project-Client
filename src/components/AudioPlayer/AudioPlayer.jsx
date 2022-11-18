import classNames from "classnames";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { audioMiddlewares } from "../../store/audioPlayer/playingMiddleware";
import { audioSelect } from "../../store/audioPlayer/selectors";
import styles from "./AudioPlayer.module.scss";

export default function AudioPlayer({ isMainPlayer = false, children }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(audioSelect.audioPlayerStatus());

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

  const togglePlaying = React.useCallback(() => {
    dispatch(audioMiddlewares.toggle);
  }, []);

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
          onClick={togglePlaying}
        ></div>
        <div
          ref={stopBox}
          className={classNames(
            styles.stopButton,
            isPlaying ? styles.displayBlock : styles.displayNone
          )}
          onClick={togglePlaying}
        ></div>
      </div>
    </div>
  );
}
