import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames";
import Input from "components/Input/Input";
import Filter from "components/Filter/Filter";

interface IFiltersProps {
  className?: string;
  weaponBranch: object;
}

const Filters = ({ className, weaponBranch }: IFiltersProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Filter weaponBranch={weaponBranch} />
      <Input />
    </div>
  );
};

export default Filters;
