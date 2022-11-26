import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Flag.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { scrollTopInstantly } from "../../utils/scroll";
import { NATIONS } from "../../constants/nations";

export default function Flag({ nation }) {
  const info = getInfo();

  function getInfo() {
    let flag;
    if (nation == NATIONS.USSR) flag = styles.root_ussr;
    if (nation == NATIONS.germany) flag = styles.root_germany;
    if (nation == NATIONS.USA) flag = styles.root_usa;
    if (nation == NATIONS.greatBritain) flag = styles.root_uk;
    if (nation == NATIONS.japan) flag = styles.root_japan;
    return { flag };
  }

  return (
    <NavLink
      to={`${nation.path}`}
      className={classNames(styles.root, info.flag, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    ></NavLink>
  );
}
