import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

interface IParagraphProps {
  noMargin?: boolean;
  className?: string;
  children: JSX.Element | string;
}

export default function Paragraph({
  noMargin = false,
  className,
  children,
}: IParagraphProps) {
  return (
    <p
      className={classNames(
        styles.root,
        className,
        noMargin && styles.root_noMargin
      )}
    >
      {children}
    </p>
  );
}
