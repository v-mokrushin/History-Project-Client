import React from "react";
import styles from "./ExternalLink.module.scss";
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
    <a href={link} target="_blank" className={classNames(styles.link)}>
      <Text className={styles.root}>{children}</Text>
    </a>
  );
}
