import React from "react";
import styles from "./Recommendations.module.scss";
import classNames from "classnames";
import PreviewWeaponCard from "components/PreviewWeaponCard/PreviewWeaponCard";
import { IWeapon, WEAPONS_DATA } from "data/weapons/weapons";

interface IRecommendationsProps {
  className?: string;
  weapon: IWeapon;
}

const Recommendations = ({ className, weapon }: IRecommendationsProps) => {
  const collecion = WEAPONS_DATA.getRecommendation(
    weapon.branch.path,
    weapon.id
  );

  return (
    <div className={classNames(styles.root, className)}>
      {collecion.map((weapon) => (
        <PreviewWeaponCard
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
