import React from "react";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Burger />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
