import classNames from "classnames";
import React from "react";
import styles from "./Text.module.scss";

interface ITextProps {
  bold?: boolean;
  noMargin?: boolean;
  color?: string;
  children: any;
  className?: string;
}

export default function Text({
  bold = false,
  noMargin = false,
  color = "",
  children,
  className,
}: ITextProps) {
  return (
    <span
      className={classNames(
        styles.root,
        noMargin && styles.noMargin,
        bold && styles.bold,
        styles[color],
        className
      )}
    >
      {children}
    </span>
  );
}
