import React from "react";
import styles from "./Preloader.module.scss";
import classNames from "classnames";

interface IPreloaderProps {
  color: string;
  className?: string;
}

const Preloader: React.FC<IPreloaderProps> = ({ color = "", className }) => {
  return (
    <div className={classNames(styles.root, styles[color], className)}></div>
  );
};

export default Preloader;
