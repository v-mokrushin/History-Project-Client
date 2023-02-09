import Container from "components/Container/Container";
import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.topWrapper}>
          <Logo />
          <section className={styles.sectionsBox}>
            <p className={styles.sectionsBox__sectionTitle}>О проекте</p>
            <p className={styles.sectionsBox__sectionTitle}>Команда</p>
            <p className={styles.sectionsBox__sectionTitle}>Обратная связь</p>
            <p className={styles.sectionsBox__sectionTitle}>
              Политика конфиденциальности
            </p>
          </section>
        </div>
        <div className={styles.bottomWrapper}>
          <p className={styles.bottomWrapper__text}>© 2022 Haze of War</p>
        </div>
      </Container>
    </footer>
  );
}
