import React from "react";
import styles from "./HightlitingText.module.scss";
import classNames from "classnames";
import Paragraph from "../Paragraph/Paragraph";

export default function HightlitingText({ children, className }) {
  return (
    <div className={classNames(styles.root, className)}>
      <Paragraph>{children}</Paragraph>
    </div>
  );
}
