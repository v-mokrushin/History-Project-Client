import React from "react";
import styles from "./CloseButton.module.scss";
import classNames from "classnames";

interface ICloseButtonProps {
  onClick?: Function;
  className?: string;
}

const CloseButton: React.FC<ICloseButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={classNames(styles.root, className)}
    ></button>
  );
};

export default CloseButton;
