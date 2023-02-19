import React from "react";
import styles from "./IconsBox.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/SearchButton/SearchButton";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ToolButton from "components/Buttons/ToolButton/ToolButton";
import AccountButton from "../AccountButton/AccountButton";
import commonApplicationStore from "stores/mobx/commonApplicationStore";

interface IIconsBoxProps {
  burgerType?: boolean;
  className?: string;
}

const IconsBox: React.FC<IIconsBoxProps> = ({ burgerType, className }) => {
  return (
    <div
      className={classNames(
        styles.root,
        burgerType && styles.root_forBurger,
        className
      )}
    >
      <ToolButton />
      <ButtonSearch />
      {/* <LanguageSwitcher /> */}
      <AccountButton label="Регистрация" color="grey" />
      <AccountButton
        label="Войти"
        color="gold"
        onClick={() => commonApplicationStore.showLogInDialog()}
      />
    </div>
  );
};

export default IconsBox;
