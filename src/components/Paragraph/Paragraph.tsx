import classNames from "classnames";
import Text from "components/Text/Text";
import React from "react";
import styles from "./Paragraph.module.scss";

interface IParagraphProps {
  noMargin?: boolean;
  className?: string;
  children: any;
}

export default function Paragraph({
  noMargin = false,
  className,
  children,
}: IParagraphProps) {
  return (
    <p className={classNames(styles.root, noMargin && styles.root_noMargin)}>
      <Text className={className}>{children}</Text>
    </p>
  );
}
