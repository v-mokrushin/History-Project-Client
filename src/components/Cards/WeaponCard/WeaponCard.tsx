import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./WeaponCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";
import { getBackgroundImageStyleObject } from "../../../utils/common";
import Flag from "../../Graphics/Flag/Flag";
import { observer } from "mobx-react";
import settingsStore from "stores/mobx/settingsStore";
import { TWeapon } from "interfaces/weapons/common-weapon-interfaces";
import Preloader from "components/Graphics/Preloader/Preloader";

interface IWeaponCardProps {
  weapon: TWeapon;
  showFlag?: boolean;
  isAbsoluteLinkPath?: boolean;
  className?: string;
}

const WeaponCard = observer(
  ({
    weapon,
    showFlag = false,
    isAbsoluteLinkPath = false,
    className,
  }: IWeaponCardProps) => {
    const colorized = settingsStore.colorized;

    return (
      <NavLink
        to={
          isAbsoluteLinkPath
            ? weapon.path!
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
        {/* <div
          className={styles.background}
          style={getBackgroundImageStyleObject(weapon.gallery?.icon)}
        ></div> */}
        {!weapon.isVideoIntro ? (
          <div
            className={styles.background}
            style={getBackgroundImageStyleObject(weapon.gallery?.icon)}
          ></div>
        ) : (
          <video
            className={classNames(styles.video)}
            autoPlay
            loop
            muted
            poster={weapon.gallery?.icon}
          >
            <source src={weapon.gallery?.intro} type="video/mp4" />
          </video>
        )}
        <Preloader color="white" />
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
