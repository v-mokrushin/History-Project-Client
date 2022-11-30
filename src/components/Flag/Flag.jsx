import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Flag.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { scrollTopInstantly } from "../../utils/scroll";
import { NATIONS } from "../../constants/nations";
import { getBackgroundImageStyleObject } from "../../utils/common";
import Paragraph from "../Paragraph/Paragraph";

export default function Flag({ nation }) {
  return (
    <NavLink
      to={`${nation.path}`}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      style={getBackgroundImageStyleObject(nation.flagImage)}
      onClick={() => scrollTopInstantly()}
    >
      {/* <Paragraph>{nation.name.russian}</Paragraph> */}
    </NavLink>
  );
}
