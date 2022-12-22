import React, { Children } from "react";
import styles from "./ExternalLink.module.scss";
import classNames from "classnames";

export default function ExternalLink({ link, children, className }) {
  return (
    <a href={link} className={classNames(styles.root, className)}>
      {children}
    </a>
  );
}
