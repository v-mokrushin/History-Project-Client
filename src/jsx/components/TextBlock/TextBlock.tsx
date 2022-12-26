import React from "react";
import styles from "./TextBlock.module.scss";

interface ITextBlockProps {
  children: JSX.Element;
}

export default function TextBlock({ children }: ITextBlockProps) {
  return <div className={styles.root}>{children}</div>;
}
