import React from "react";
import styles from "./Preloader.module.scss";
import classNames from "classnames";

interface IPreloaderProps {
  color: string;
  dependsOnWidth?: boolean;
  className?: string;
}

const Preloader: React.FC<IPreloaderProps> = ({
  color = "",
  dependsOnWidth,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.root,
        dependsOnWidth && styles.root_dependsOnWidth,
        styles[color],
        className
      )}
    ></div>
  );
};

export default Preloader;
