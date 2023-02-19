import classNames from "classnames";
import React from "react";
import styles from "./Title.module.scss";
import global_styles from "../../../assets/css/global.module.scss";

interface ITitleProps {
  id?: string;
  noMargin?: boolean;
  centered?: boolean;
  className?: string;
  children: any;
}

export default function Title({
  id,
  noMargin = false,
  centered = false,
  className,
  children,
}: ITitleProps) {
  return (
    <h2
      id={id}
      className={classNames(
        className,
        styles.title,
        centered && styles.centered,
        noMargin && global_styles.noMargin
      )}
    >
      {children}
    </h2>
  );
}
