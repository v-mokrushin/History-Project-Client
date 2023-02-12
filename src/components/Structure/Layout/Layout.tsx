import SearchDialog from "components/Structure/SearchDialog/SearchDialog";
import React from "react";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ImageViewer from "../../Graphics/ImageViewer/ImageViewer";
import UpButton from "../../Buttons/UpButton/UpButton";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.root}>
      <UpButton />
      <Burger />
      <ImageViewer />
      <SearchDialog />
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer />
    </div>
  );
}
