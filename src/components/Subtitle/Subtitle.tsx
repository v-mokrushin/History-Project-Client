import classNames from "classnames";
import React from "react";
import styles from "./Subtitle.module.scss";

interface ISubtitleProps {
  noMargin?: boolean;
  id?: string;
  children: JSX.Element | string;
}

export default function Subtitle({ children, id, noMargin }: ISubtitleProps) {
  return (
    <p id={id} className={classNames(styles.root, noMargin && styles.noMargin)}>
      {children}
    </p>
  );
}
