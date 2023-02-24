import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import Text from "components/Texts/Text/Text";

interface IButtonProps {
  children: string;
  color?: "gold" | "blue" | "grey" | "red";
  textColor?: "white" | "black" | "gold" | "blue" | "grey" | "red";
  size?: "medium" | "large";
  type?: "button" | "submit" | "reset";
  outlined?: boolean;
  uppercase?: boolean;
  onClick?: Function;
  className?: string;
}

const CustomButton: React.FC<IButtonProps> = ({
  children,
  size = "medium",
  color = "",
  textColor = "white",
  onClick,
  type = "button",
  outlined = false,
  uppercase = false,
  className,
}) => {
  return (
    <button
      onClick={onClick && (() => onClick())}
      className={classNames(
        styles.root,
        styles[color],
        styles[size],
        outlined && styles.outlined,
        className
      )}
      type={type}
    >
      <Text color={textColor}>
        {uppercase ? children.toUpperCase() : children}
      </Text>
    </button>
  );
};

export default CustomButton;
