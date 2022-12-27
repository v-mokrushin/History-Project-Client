import React from "react";
import styles from "./ExternalLink.module.sass";
import classNames from "classnames";
import Text from "../Text/Text";

interface IExternalLinkProps {
  link: string;
  children: string;
  className?: string;
}

export default function ExternalLink({
  link,
  children,
  className,
}: IExternalLinkProps) {
  return (
    <a href={link} className={classNames(styles.link)}>
      <Text className={styles.root}>{children}</Text>
    </a>
  );
}
