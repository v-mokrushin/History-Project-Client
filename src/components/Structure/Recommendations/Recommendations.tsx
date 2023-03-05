import React from "react";
import styles from "./Recommendations.module.scss";
import classNames from "classnames";
import WeaponCard from "components/Cards/WeaponCard/WeaponCard";
import { Weapons } from "data/weapons/weapons";
import { TWeapon } from "interfaces/weapons/common-weapon-interfaces";

interface IRecommendationsProps {
  weapon: TWeapon;
  className?: string;
}

const Recommendations = ({ className, weapon }: IRecommendationsProps) => {
  const collecion = Weapons.getRecommendation(weapon.branch?.path, weapon.id);

  return (
    <div className={classNames(styles.root, className)}>
      {collecion.map((weapon) => (
        <WeaponCard
          weapon={weapon}
          showFlag
          isAbsoluteLinkPath
          key={weapon.id}
        />
      ))}
    </div>
  );
};

export default Recommendations;
