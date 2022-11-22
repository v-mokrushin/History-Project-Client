import React from "react";
import Beadcrumbs from "../Beadcrumbs/Beadcrumbs";
import styles from "./ContentWrapper.module.scss";
import Container from "../Container/Container";

export default function ContentWrapper({ children }) {
  return (
    <div className={styles.root}>
      <Container>
        <Beadcrumbs />
      </Container>
      {children}
    </div>
  );
}
