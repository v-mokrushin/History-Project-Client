import React from "react";
import styles from "./Comp.module.scss";
import classNames from "classnames";

interface ICompProps {
  className?: string;
}

const Comp: React.FC<ICompProps> = ({ className }) => {
  return <div className={classNames(styles.root, className)}></div>;
};

export default Comp;
