import classNames from "classnames";
import React from "react";
import styles from "./Subtitle.module.scss";

interface ISubtitleProps {
  noMargin?: boolean;
  id?: string;
  children: JSX.Element | string;
  className?: string;
}

export default function Subtitle({
  children,
  id,
  noMargin,
  className,
}: ISubtitleProps) {
  return (
    <h3
      id={id}
      className={classNames(
        styles.root,
        noMargin && styles.noMargin,
        className
      )}
    >
      {children}
    </h3>
  );
}
