import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PreviewWeaponCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { getBackgroundImageStyleObject } from "../../utils/common";
import { scrollTopInstantly, scrollToTop } from "../../utils/scroll";

export default function PreviewWeaponCard({ weapon }) {
  return (
    <NavLink
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    >
      <div
        className={styles.backgroundWrapper}
        style={getBackgroundImageStyleObject(weapon.gallery.icon)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{weapon?.name}</p>
        {/* <div className={styles.separator}></div> */}
        {/* <p className={styles.description}></p> */}
      </div>
    </NavLink>
  );
}
