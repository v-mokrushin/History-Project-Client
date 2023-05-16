import React from "react";
import styles from "./AdminPanel.module.scss";
import classNames from "classnames";
import CustomButton from "components/Buttons/Button/Button";
import Title from "components/Texts/Title/Title";

interface IAdminPanelProps {
  className?: string;
}

const AdminPanel: React.FC<IAdminPanelProps> = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Title>Панель администратора</Title>
      <div className={styles.separator}></div>
      <div className={styles.sections}>
        <CustomButton color="black" textColor="gold" uppercase>
          Пользовательские статьи
        </CustomButton>
        <CustomButton color="black" uppercase>
          Пользователи
        </CustomButton>
        <CustomButton color="black" uppercase>
          Комментарии
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminPanel;
