import React from "react";
import styles from "./PersonButton.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { NavLink, useNavigate } from "react-router-dom";
import burgerStore from "stores/mobx/burgerStore";
import actualSectionStore from "stores/mobx/actualSectionStore";
import { getBackgroundImageStyleObject } from "utils/common";
import { authorizationStore } from "stores/mobx/authorizationStore";

interface IPersonButtonProps {
  className?: string;
}

const PersonButton = observer(({ className }: IPersonButtonProps) => {
  const navigate = useNavigate();
  const avatar: string | undefined = authorizationStore.user?.avatar;

  return (
    <button
      style={avatar ? getBackgroundImageStyleObject(avatar) : {}}
      onClick={() => {
        navigate("/account");
        burgerStore.setClose();
        actualSectionStore.throw();
      }}
      className={classNames(styles.root, avatar && styles.root_test)}
    ></button>
  );
});

export default PersonButton;
