import React, { useRef, useEffect } from "react";
import styles from "./VideoIntro.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";
import Preloader from "../Preloader/Preloader";

interface IVideoIntroProps {
  size?: "maximized" | "half";
  path?: string;
  poster?: string;
}

export default function VideoIntro({
  size = "maximized",
  path = "/videos/intro.mp4",
  poster = "",
}: IVideoIntroProps) {
  return (
    <div className={classNames(styles.root)}>
      <div
        className={classNames(
          styles.video,
          size === "half" && styles.video_half
        )}
      >
        {/* <Preloader color="white" /> */}
        <video
          className={classNames(
            styles.video__media,

            ANIMATIONS.fadeIn
          )}
          autoPlay
          loop
          muted
          preload="auto"
          poster={poster}
        >
          <source src={path} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
