import React from "react";
import classNames from "classnames";
import Beadcrumbs from "../Beadcrumbs/Beadcrumbs";
import styles from "./ContentWrapper.module.sass";
import Container from "../Container/Container";
import { ANIMATIONS } from "../../../constants/animations";

interface IContentWrapperProps {
  className?: string;
  children: JSX.Element;
}

export default function ContentWrapper({
  className,
  children,
}: IContentWrapperProps) {
  return (
    <div className={classNames(styles.root, className, ANIMATIONS.fadeIn)}>
      <Container>
        <Beadcrumbs />
      </Container>
      {children}
    </div>
  );
}
