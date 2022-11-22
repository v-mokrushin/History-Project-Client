import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Flag.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { scrollTopInstantly } from "../../utils/scroll";
import { FLAG_COUNTRY } from "./constants";

export default function Flag({ country }) {
  const info = getInfo();

  function getInfo() {
    let flag;
    if (country == FLAG_COUNTRY.USSR) flag = styles.root_ussr;
    if (country == FLAG_COUNTRY.germany) flag = styles.root_germany;
    if (country == FLAG_COUNTRY.USA) flag = styles.root_usa;
    if (country == FLAG_COUNTRY.unitedKindom) flag = styles.root_uk;
    if (country == FLAG_COUNTRY.japan) flag = styles.root_japan;
    return { flag };
  }

  return (
    <NavLink
      to={`${country}`}
      className={classNames(styles.root, info.flag, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    ></NavLink>
  );
}
