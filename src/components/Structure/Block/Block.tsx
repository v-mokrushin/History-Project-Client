import classNames from "classnames";
import React from "react";
import styles from "./Block.module.sass";

interface IBlockProps {
  children: JSX.Element[] | JSX.Element | string;
  formatAsSection?: boolean;
  className?: string;
}

export default function Block({
  formatAsSection = false,
  children,
  className,
}: IBlockProps) {
  return formatAsSection ? (
    <section className={classNames(styles.root, className)}>{children}</section>
  ) : (
    <div className={classNames(styles.root, className)}>{children}</div>
  );
}
