import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.topWrapper}>
          <Logo />
          <div className={styles.sectionsBox}>
            <p className={styles.sectionsBoxText}>О проекте</p>
            <p className={styles.sectionsBoxText}>Команда</p>
            <p className={styles.sectionsBoxText}>Обратная связь</p>
            <p className={styles.sectionsBoxText}>Политика конфиденциальности</p>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <p className={styles.bottomWrapperText}>© 2022 Haze of War</p>
        </div>
      </div>
    </footer>
  );
}
