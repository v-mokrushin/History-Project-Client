import React from "react";
import styles from "./YTFrame.module.scss";
import classNames from "classnames";

export default function YTFrame({ className, links }) {
  return (
    <div className={styles.frameBox}>
      {links?.map((item, index) => (
        <iframe
          className={styles.video}
          src={item}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
