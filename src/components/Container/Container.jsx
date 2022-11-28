import classNames from "classnames";
import React from "react";
import { CONTAINER_TYPES } from "./constants";
import styles from "./Container.module.scss";

export default function Container({
  type = CONTAINER_TYPES.default,
  className,
  children,
}) {
  return (
    <div
      className={classNames({
        className,
        [styles.default]: type === CONTAINER_TYPES.default,
        [styles.article]: type === CONTAINER_TYPES.article,
      })}
    >
      {children}
    </div>
  );
}
