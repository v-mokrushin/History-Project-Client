import React from "react";
import classNames from "classnames";
import Beadcrumbs from "../Beadcrumbs/Beadcrumbs";
import styles from "./ContentWrapper.module.scss";
import Container from "../Container/Container";
import { ANIMATIONS } from "../../../constants/animations";
import { CONTAINER_TYPES } from "../Container/constants";

interface IContentWrapperProps {
  containerType?: CONTAINER_TYPES;
  showBreadcrumbs?: boolean;
  className?: string;
  children: JSX.Element;
}

export default function ContentWrapper({
  containerType = CONTAINER_TYPES.default,
  showBreadcrumbs = true,
  className,
  children,
}: IContentWrapperProps) {
  return (
    <div className={classNames(styles.root, className, ANIMATIONS.fadeIn)}>
      <Container type={containerType}>
        {showBreadcrumbs && <Beadcrumbs />}
      </Container>
      {children}
    </div>
  );
}
