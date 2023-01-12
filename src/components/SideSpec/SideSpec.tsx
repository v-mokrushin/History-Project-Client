import React from "react";
import styles from "./SideSpec.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { SpecificationsLayout } from "utils/specifications-layout";
import { IWeapon } from "data/weapons/weapons";

interface ISideSpecProps {
  weapon: IWeapon | undefined;
  className?: string;
}

export default function SideSpec({ weapon, className }: ISideSpecProps) {
  if (!weapon) return <div></div>;
  if (!weapon.specifications) return <div></div>;

  return (
    <div className={classNames(styles.root, className)}>
      {SpecificationsLayout.armored.getCommon(weapon)}
      {SpecificationsLayout.armored.getSizes(weapon)}
      {SpecificationsLayout.armored.getCrew(weapon)}
      {SpecificationsLayout.armored.getWeapon(weapon)}
      {SpecificationsLayout.armored.getArmoring(weapon)}
      {SpecificationsLayout.armored.getMobility(weapon)}
    </div>
  );
}
