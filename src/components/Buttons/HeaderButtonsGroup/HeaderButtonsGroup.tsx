import React from "react";
import styles from "./HeaderButtonsGroup.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/SearchButton/SearchButton";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ToolButton from "components/Buttons/ToolButton/ToolButton";
import AccountButton from "../AccountButton/AccountButton";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { useNavigate } from "react-router";
import actualSectionStore from "stores/mobx/actualSectionStore";
import PersonButton from "../PersonButton/PersonButton";
import { observer } from "mobx-react-lite";

interface IHeaderButtonsGroupProps {
  burgerType?: boolean;
  className?: string;
}

const HeaderButtonsGroup: React.FC<IHeaderButtonsGroupProps> = observer(
  ({ burgerType, className }) => {
    const navigation = useNavigate();

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
        <LanguageSwitcher />
        {!commonApplicationStore.isUserAuthorized ? (
          <>
            <AccountButton
              label="Регистрация"
              color="grey"
              onClick={() => {
                commonApplicationStore.showRegistrationDialog();
              }}
            />
            <AccountButton
              label="Войти"
              color="gold"
              onClick={() => commonApplicationStore.showLogInDialog()}
            />
          </>
        ) : (
          <PersonButton />
        )}
      </div>
    );
  }
);

export default HeaderButtonsGroup;
