import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SectionCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";

import { getBackgroundImageStyleObject } from "../../../utils/common";
import { IPage } from "constants/pages";
import { Scroll } from "utils/scroll";
import Preloader from "components/Graphics/Preloader/Preloader";

interface ISectionCardProps {
  information: IPage;
  className?: string;
}

export default function SectionCard({
  information,
  className,
}: ISectionCardProps) {
  return (
    <NavLink
      to={information.path}
      className={classNames(styles.root, className, ANIMATIONS.fadeIn)}
      onClick={Scroll.toTopInstantly}
    >
      <Preloader color="white" />
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
