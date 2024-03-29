import classNames from "classnames";
import React from "react";
import styles from "./Subtitle.module.scss";
import global_styles from "../../../assets/css/global.module.scss";

interface ISubtitleProps {
  color?: string;
  noMargin?: boolean;
  id?: string;
  children: JSX.Element | string | null;
  className?: string;
}

export default function Subtitle({
  color = "",
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
        global_styles[color],
        noMargin && global_styles.noMargin,
        className
      )}
    >
      {children}
    </h3>
  );
}
