import React from "react";
import styles from "./SideSpec.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { SpecificationsLayout } from "utils/specifications-layout";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";
import { IArmoredVehiclesSpecifications } from "data/weapons/interfaces/armored-interfaces";
import { IAviationSpecifications } from "data/weapons/interfaces/aviation-interfaces";

interface ISideSpecProps {
  weapon: TWeapon | undefined;
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
      {SpecificationsLayout.getAll(weapon)}
    </div>
  );
}
