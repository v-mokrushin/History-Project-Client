import React from "react";
import styles from "./SpecSection.module.scss";
import classNames from "classnames";

interface ISpecSectionProps {
  title: string;
  className?: string;
  children: (JSX.Element | undefined)[];
}

export default function SpecSection({
  title,
  className,
  children,
}: ISpecSectionProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.infoBox}>{children}</div>
    </div>
  );
}
