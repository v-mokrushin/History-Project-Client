import classNames from "classnames";
import React from "react";
import styles from "./Text.module.scss";
import global_styles from "../../../assets/css/global.module.scss";

interface ITextProps {
  bold?: boolean;
  noMargin?: boolean;
  smallLineHeight?: boolean;
  color?: string;
  children: any;
  className?: string;
}

export default function Text({
  bold = false,
  noMargin = false,
  smallLineHeight = false,
  color = "",
  children,
  className,
}: ITextProps) {
  return (
    <span
      className={classNames(
        styles.root,
        noMargin && styles.noMargin,
        smallLineHeight && styles.smallLineHeight,
        bold && global_styles.bold,
        global_styles[color],
        className
      )}
    >
      {children}
    </span>
  );
}
