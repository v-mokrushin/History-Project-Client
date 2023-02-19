import classNames from "classnames";
import React from "react";
import styles from "./Title.module.scss";
import global_styles from "../../../assets/css/global.module.scss";
import { color } from "@mui/system";

interface ITitleProps {
  id?: string;
  color?: string;
  noMargin?: boolean;
  centered?: boolean;
  className?: string;
  children: any;
}

export default function Title({
  id,
  color = "",
  noMargin = false,
  centered = false,
  className,
  children,
}: ITitleProps) {
  return (
    <h2
      id={id}
      className={classNames(
        styles.title,
        global_styles[color],
        centered && styles.centered,
        noMargin && global_styles.noMargin,
        className
      )}
    >
      {children}
    </h2>
  );
}
