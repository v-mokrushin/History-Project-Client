import React from "react";
import styles from "./SideSpec.module.scss";
import classNames from "classnames";
import { SpecificationsLayout } from "utils/specifications-layout";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";

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
  if (!weapon.isReady) return <div></div>;
  if (loadingStatus) return <div></div>;

  console.log(weapon);

  return (
    <aside className={classNames(styles.root, className)}>
      {SpecificationsLayout.getAll(weapon)}
    </aside>
  );
}
