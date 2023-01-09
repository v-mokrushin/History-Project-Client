import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PreviewWeaponCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animations";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { scrollTopInstantly, scrollToTop } from "../../utils/scroll";
import Flag from "../Flag/Flag";
import { IWeapon } from "data/weapons/weapons";
import { observer } from "mobx-react";
import settingsStore from "stores/mobx/settingsStore";

interface IPreviewWeaponCardProps {
  weapon: IWeapon;
  showFlag?: boolean;
  isAbsoluteLinkPath?: boolean;
}

const PreviewWeaponCard = observer(
  ({
    weapon,
    showFlag = false,
    isAbsoluteLinkPath = false,
  }: IPreviewWeaponCardProps) => {
    const colorized = settingsStore.colorized;

    return (
      <NavLink
        to={
          isAbsoluteLinkPath
            ? `/weapons/${weapon.branch.path}/world/${weapon.id}`
            : weapon.id!
        }
        className={classNames(styles.root, ANIMATIONS.fadeIn)}
        onClick={() => {
          scrollTopInstantly();
        }}
      >
        <div
          className={styles.backgroundWrapper}
          style={getBackgroundImageStyleObject(weapon.gallery?.icon)}
        ></div>
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

export default PreviewWeaponCard;
