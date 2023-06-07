import React from "react";
import styles from "./HeaderButtonsGroup.module.scss";
import classNames from "classnames";
import ButtonSearch from "components/Buttons/SearchButton/SearchButton";
import LanguageSwitcher from "components/Buttons/LanguageSwitcher/LanguageSwitcher";
import ToolButton from "components/Buttons/ToolButton/ToolButton";
import CustomButton from "../Button/Button";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { useNavigate } from "react-router";
import actualSectionStore from "stores/mobx/actualSectionStore";
import PersonButton from "../PersonButton/PersonButton";
import { observer } from "mobx-react-lite";
import { accountStore } from "stores/mobx/authorizationStore";
import { INCLUDE_SERVER_INTERACTIONS } from "config/settings";

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
        <ButtonSearch />
        {accountStore.isUserAuthorized && <ToolButton />}
        {/* <ToolButton /> */}
        {/* <LanguageSwitcher /> */}
        {INCLUDE_SERVER_INTERACTIONS && (
          <>
            !accountStore.isUserAuthorized ? (
            <>
              <CustomButton
                color="gold"
                uppercase
                onClick={() => {
                  commonApplicationStore.showRegistrationDialog();
                }}
              >
                Регистрация
              </CustomButton>
              <CustomButton
                uppercase
                color="blue"
                onClick={() => commonApplicationStore.showLogInDialog()}
              >
                Войти
              </CustomButton>
            </>
            ) : (
            <PersonButton />){" "}
          </>
        )}
      </div>
    );
  }
);

export default HeaderButtonsGroup;
