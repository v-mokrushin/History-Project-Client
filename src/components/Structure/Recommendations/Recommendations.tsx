import React from "react";
import styles from "./Recommendations.module.scss";
import classNames from "classnames";
import WeaponCard from "components/Cards/WeaponCard/WeaponCard";
import { WEAPONS } from "data/weapons/weapons";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

interface IRecommendationsProps {
  weapon: TWeapon;
  className?: string;
}

const Recommendations = ({ className, weapon }: IRecommendationsProps) => {
  const collecion = WEAPONS.getRecommendation(weapon.branch?.path, weapon.id);

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
