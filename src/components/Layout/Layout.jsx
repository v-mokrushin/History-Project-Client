import React from "react";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UpButton from "../UpButton/UpButton";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <UpButton />
      <Burger />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
