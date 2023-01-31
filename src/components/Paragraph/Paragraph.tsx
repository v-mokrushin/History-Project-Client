import classNames from "classnames";
import Text from "components/Text/Text";
import React from "react";
import styles from "./Paragraph.module.scss";
import styles_text from "../Text/Text.module.scss";

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
    <p
      className={classNames(
        styles_text.root,
        styles.root,
        noMargin && styles.root_noMargin
      )}
    >
      {children}
    </p>
  );
}
