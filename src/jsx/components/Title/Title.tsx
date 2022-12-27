import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../../constants/animation";
import styles from "./Title.module.scss";

interface ITitleProps {
  id?: string;
  noMargin?: boolean;
  centered?: boolean;
  className?: string;
  children?: string | string[];
}

export default function Title({
  id,
  noMargin = false,
  centered = false,
  className,
  children,
}: ITitleProps) {
  return (
    <h1
      id={id}
      className={classNames(
        className,
        styles.title,
        centered && styles.centered,
        noMargin && styles.noMargin
      )}
    >
      {children}
    </h1>
  );
}
