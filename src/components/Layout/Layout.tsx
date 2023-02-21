import SearchDialog from "components/Modals/SearchDialog/SearchDialog";
import React from "react";
import Burger from "../Structure/Burger/Burger";
import Footer from "../Structure/Footer/Footer";
import Header from "../Structure/Header/Header";
import ImageViewer from "../Graphics/ImageViewer/ImageViewer";
import UpButton from "../Buttons/UpButton/UpButton";
import styles from "./Layout.module.scss";
import LogInDialog from "../Modals/LogInDialog/LogInDialog";
import RegistrationDialog from "../Modals/RegistrationDialog/RegistrationDialog";

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
      <LogInDialog />
      <RegistrationDialog />
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer />
    </div>
  );
}
