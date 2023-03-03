import classNames from "classnames";
import React from "react";
import { CONTAINER_TYPES } from "./constants";
import styles from "./Container.module.scss";

interface IContainerProps {
  type?: CONTAINER_TYPES;
  className?: string;
  children: any;
}

export default function Container({
  type = CONTAINER_TYPES.default,
  children,
  className,
}: IContainerProps) {
  return (
    <div
      className={classNames(className, {
        [styles.default]: type === CONTAINER_TYPES.default,
        [styles.wide]: type === CONTAINER_TYPES.wide,
        [styles.aside]: type === CONTAINER_TYPES.aside,
      })}
    >
      {children}
    </div>
  );
}
