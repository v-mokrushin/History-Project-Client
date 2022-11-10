import React from "react";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Burger />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
