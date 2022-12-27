import classNames from "classnames";
import React from "react";
import styles from "./Text.module.scss";

interface ITextProps {
  bold?: boolean;
  className?: string;
  children: any;
}

export default function Text({
  className,
  bold = false,
  children,
}: ITextProps) {
  return (
    <span className={classNames(styles.root, className, bold && styles.bold)}>
      {children}
    </span>
  );
}
