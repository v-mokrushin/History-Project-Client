import React from "react";
import styles from "./IconsBox.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/ButtonSearch/ButtonSearch";
import LanguageSwitcher from "components/Controls/LanguageSwitcher/LanguageSwitcher";

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
      <ButtonSearch />
      <LanguageSwitcher />
    </div>
  );
};

export default IconsBox;
