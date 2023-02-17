import React from "react";
import styles from "./IconsBox.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/ButtonSearch/ButtonSearch";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ButtonTool from "components/Buttons/ButtonTool/ButtonTool";

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
      <ButtonTool />
      <ButtonSearch />
      <LanguageSwitcher />
    </div>
  );
};

export default IconsBox;
