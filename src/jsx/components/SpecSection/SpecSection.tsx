import React from "react";
import styles from "./SpecSection.module.scss";
import classNames from "classnames";

interface ISpecSectionProps {
  title: string;
  className: string;
  children: React.ReactNode;
}

export default function SpecSection({
  title,
  className,
  children,
}: ISpecSectionProps) {
  return (
    <div className={classNames(styles.root, className)}>
      <p className={styles.title}>{title}</p>
      <div className={styles.infoBox}>{children}</div>
    </div>
  );
}
