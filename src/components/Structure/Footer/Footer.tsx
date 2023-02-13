import Container from "components/Structure/Container/Container";
import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../Graphics/Logo/Logo";
import styles from "./Footer.module.scss";

const Footer: React.FC<{}> = observer(() => {
  const { t } = useTranslation();

  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.topWrapper}>
          <Logo />
          <section className={styles.sectionsBox}>
            <p className={styles.sectionsBox__sectionTitle}>
              {t("footer.about")}
            </p>
            <p className={styles.sectionsBox__sectionTitle}>
              {t("footer.team")}
            </p>
            <p className={styles.sectionsBox__sectionTitle}>
              {t("footer.feedback")}
            </p>
            <p className={styles.sectionsBox__sectionTitle}>
              {t("footer.privacy_policy")}
            </p>
          </section>
        </div>
        <div className={styles.bottomWrapper}>
          <p className={styles.bottomWrapper__text}>© 2022 Haze of War</p>
        </div>
      </Container>
    </footer>
  );
});

export default Footer;
