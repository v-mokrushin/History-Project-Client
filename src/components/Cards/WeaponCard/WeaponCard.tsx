import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./WeaponCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";
import { getBackgroundImageStyleObject } from "../../../utils/common";
import Flag from "../../Graphics/Flag/Flag";
import { observer } from "mobx-react";
import settingsStore from "stores/mobx/settingsStore";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import Preloader from "components/Graphics/Preloader/Preloader";

interface IWeaponCardProps {
  weapon: TWeapon;
  showFlag?: boolean;
  isAbsoluteLinkPath?: boolean;
  variantForInfographic?: boolean;
  className?: string;
}

const WeaponCard = observer(
  ({
    weapon,
    showFlag = false,
    isAbsoluteLinkPath = false,
    variantForInfographic = false,
    className,
  }: IWeaponCardProps) => {
    const colorized = settingsStore.colorized;

    return (
      <NavLink
        to={
          isAbsoluteLinkPath
            ? `/weapons/${weapon.branch?.path}/world/${weapon.id}`
            : weapon.id!
        }
        className={classNames(
          styles.root,
          settingsStore.displaySize && styles.root_large,
          ANIMATIONS.fadeIn,
          className
        )}
        key={Math.random()}
      >
        <div
          className={styles.background}
          style={getBackgroundImageStyleObject(weapon.gallery?.icon)}
        ></div>
        <Preloader color="white" />
        {/* <div className={styles.preloader}>
          <div className={styles.circlesWrapper}>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
            <span className={styles.circle}></span>
          </div>
        </div> */}
        {showFlag && weapon.nation && (
          <Flag nation={weapon.nation} minimized isNavLink={false} />
        )}
        <div className={styles.contentWrapper}>
          <p className={styles.title}>{weapon?.name}</p>
          <p className={styles.description}>{weapon?.type.name.russian}</p>
        </div>
      </NavLink>
    );
  }
);

export default WeaponCard;
