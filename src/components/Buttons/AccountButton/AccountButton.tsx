import React from "react";
import styles from "./AccountButton.module.scss";
import classNames from "classnames";
import Text from "components/Texts/Text/Text";

interface IAccountButtonProps {
  label: string;
  color: string;
  className?: string;
}

const AccountButton: React.FC<IAccountButtonProps> = ({
  label,
  color,
  className,
}) => {
  return (
    <button className={classNames(styles.root, styles[color], className)}>
      {/* <Text color="white">Войти</Text> */}
      <Text color="white">{label}</Text>
    </button>
  );
};

export default AccountButton;
