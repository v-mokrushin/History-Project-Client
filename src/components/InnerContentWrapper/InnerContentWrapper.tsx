import React from "react";
import styles from "./InnerContentWrapper.module.scss";

interface IInnerContentWrapperProps {
  children: (JSX.Element | string)[];
}

export default function InnerContentWrapper({
  children,
}: IInnerContentWrapperProps) {
  return <div className={styles.root}>{children}</div>;
}
