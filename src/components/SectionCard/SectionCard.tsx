import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SectionCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animations";
import { scrollTopInstantly } from "../../utils/scroll";

import { getBackgroundImageStyleObject } from "../../utils/common";
import { IPage } from "constants/pages";

interface ISectionCardProps {
  information: IPage;
}

export default function SectionCard({ information }: ISectionCardProps) {
  return (
    <NavLink
      to={information.path}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    >
      <div
        className={classNames(styles.backgroundWrapper)}
        style={getBackgroundImageStyleObject(information.introImage)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{information.name.russian}</p>
      </div>
    </NavLink>
  );
}
