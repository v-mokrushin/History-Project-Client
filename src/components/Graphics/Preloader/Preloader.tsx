import React from "react";
import styles from "./Preloader.module.scss";
import classNames from "classnames";

interface IPreloaderProps {
  color: string;
  overlapping?: boolean;
  dependsOnWidth?: boolean;
  className?: string;
}

const Preloader: React.FC<IPreloaderProps> = ({
  color = "",
  overlapping = false,
  dependsOnWidth,
  className,
}) => {
  return overlapping ? (
    <div className={styles.root}>
      <div
        className={classNames(
          styles.wrapper,
          styles.wrapper_overlapping,
          dependsOnWidth && styles.root_dependsOnWidth,
          styles[color],
          className
        )}
      ></div>
    </div>
  ) : (
    <div
      className={classNames(
        styles.wrapper,
        dependsOnWidth && styles.root_dependsOnWidth,
        styles[color],
        className
      )}
    ></div>
  );
};

export default Preloader;
