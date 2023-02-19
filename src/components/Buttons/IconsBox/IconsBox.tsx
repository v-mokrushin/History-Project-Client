import React from "react";
import styles from "./IconsBox.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/SearchButton/SearchButton";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ToolButton from "components/Buttons/ToolButton/ToolButton";
import AccountButton from "../AccountButton/AccountButton";

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
      <AccountButton label="Войти" color="gold" />
    </div>
  );
};

export default IconsBox;
