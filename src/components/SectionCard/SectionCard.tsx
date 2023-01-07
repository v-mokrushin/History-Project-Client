import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SectionCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { scrollTopInstantly } from "../../utils/scroll";
import { ISectionCard, SECTION_CARD_TYPE } from "./constants";
import { getBackgroundImageStyleObject } from "../../utils/common";

interface ISectionCardProps {
  type: ISectionCard;
}

export default function SectionCard({ type }: ISectionCardProps) {
  return (
    <NavLink
      to={type.path}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    >
      <div
        className={classNames(styles.backgroundWrapper)}
        style={getBackgroundImageStyleObject(type.backgroundImage)}
      ></div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{type.name}</p>
      </div>
    </NavLink>
  );
}
