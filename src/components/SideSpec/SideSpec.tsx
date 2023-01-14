import React from "react";
import styles from "./SideSpec.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { SpecificationsLayout } from "utils/specifications-layout";
import { IWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";

interface ISideSpecProps {
  weapon: IWeapon | undefined;
  loadingStatus: boolean;
  className?: string;
}

export default function SideSpec({
  weapon,
  loadingStatus,
  className,
}: ISideSpecProps) {
  if (!weapon) return <div></div>;
  if (!weapon.specifications) return <div></div>;
  if (loadingStatus) return <div></div>;

  return (
    <div className={classNames(styles.root, className)}>
      {SpecificationsLayout.getCommon(
        weapon.specifications,
        weapon.nation,
        weapon.type
      )}
      {WEAPONS_TYPE_METHODS.identity.isArmoredVehicle(weapon) && (
        <>
          {SpecificationsLayout.armored.getSizes(weapon.specifications)}
          {SpecificationsLayout.getCrew(weapon.specifications)}
          {SpecificationsLayout.armored.getWeapon(weapon.specifications)}
          {SpecificationsLayout.armored.getArmoring(weapon.specifications)}
          {SpecificationsLayout.armored.getMobility(weapon.specifications)}
        </>
      )}
      {WEAPONS_TYPE_METHODS.identity.isAviation(weapon) && (
        <>
          {SpecificationsLayout.avivation.getSizes(weapon.specifications)}
          {SpecificationsLayout.getCrew(weapon.specifications)}
          {SpecificationsLayout.avivation.getFlightCharacteristics(
            weapon.specifications
          )}
          {SpecificationsLayout.avivation.getPowerUnits(weapon.specifications)}
          {SpecificationsLayout.avivation.getWeapons(weapon.specifications)}
        </>
      )}
    </div>
  );
}
