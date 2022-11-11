import classNames from "classnames";
import React, { useState, useRef } from "react";
import styles from "./AudioPlayer.module.scss";

export default function AudioPlayer({ forHeader, children }) {
  const audio = useRef(null);
  const playBox = useRef(null);
  const stopBox = useRef(null);
  const [player, setPlayer] = useState("stopped");

  const playerOnPlay = () => {
    audio.current.play();
    playBox.current.style.display = "none";
    stopBox.current.style.display = "block";
    // playBox.current.classList.add("playButton_hidden");
    // stopBox.current.classList.remove("stopButton_hidden");
    // playBox.current.style.transform = "translateY(30px)";
    // stopBox.current.style.transform = "translateY(0)";
  };

  const playerOnStop = () => {
    audio.current.pause();
    stopBox.current.style.display = "none";
    playBox.current.style.display = "block";
    // stopBox.current.classList.toggle("stopButton_hidden");
    // playBox.current.classList.toggle("playButton_hidden");
    // stopBox.current.style.transform = "translateY(-40px)";
    // playBox.current.style.transform = "translateY(0)";
  };

  return (
    <div
      className={classNames(
        styles.root,
        forHeader && styles.root_typeForHeader
      )}
    >
      <audio ref={audio} src="audio/apocalypse.mp3" loop />
      {children}
      <div
        ref={playBox}
        className={styles.playButton}
        onClick={playerOnPlay}
      ></div>
      <div
        ref={stopBox}
        className={classNames(styles.stopButton)}
        onClick={playerOnStop}
      ></div>
    </div>
  );
}
