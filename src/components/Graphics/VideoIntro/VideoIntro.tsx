import React, { useRef, useEffect } from "react";
import styles from "./VideoIntro.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";

export default function Intro() {
  return (
    <div className={styles.root}>
      <div className={styles.video}>
        <video
          className={classNames(styles.video__media, ANIMATIONS.fadeIn)}
          autoPlay
          loop
          muted
        >
          <source src={"/videos/intro.mp4"} type="video/mp4" />
        </video>
      </div>
      {/* <div className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.title}>Энциклопедия по</h2>
          <h2 className={styles.title}>Второй Мировой войне</h2>
        </div>
      </div> */}
    </div>
  );
}
