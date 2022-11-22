import React from "react";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UpButton from "../UpButton/UpButton";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <UpButton />
      <Burger />
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer />
    </div>
  );
}
