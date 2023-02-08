import classNames from "classnames";
import React from "react";
import styles from "./Text.module.scss";

interface ITextProps {
  bold?: boolean;
  children: any;
  className?: string;
}

export default function Text({
  bold = false,
  children,
  className,
}: ITextProps) {
  return (
    <span className={classNames(styles.root, className, bold && styles.bold)}>
      {children}
    </span>
  );
}
