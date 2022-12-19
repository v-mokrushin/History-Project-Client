import React from "react";
import classNames from "classnames";
import Beadcrumbs from "../Beadcrumbs/Beadcrumbs";
import styles from "./ContentWrapper.module.scss";
import Container from "../Container/Container";
import { ANIMATIONS } from "../../../javascript/constants/animation";

export default function ContentWrapper({ className, children }) {
  return (
    <div className={classNames(styles.root, className, ANIMATIONS.fadeIn)}>
      <Container>
        <Beadcrumbs />
      </Container>
      {children}
    </div>
  );
}
