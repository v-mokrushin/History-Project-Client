import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Flag.module.scss";
import classNames from "classnames";

import { getBackgroundImageStyleObject } from "../../utils/common";
import Paragraph from "../Paragraph/Paragraph";
import { IPage } from "constants/pages";
import { INation } from "constants/nations";
import { Scroll } from "utils/scroll";

interface IFlagProps {
  nation: INation;
  isNavLink?: boolean;
  minimized?: boolean;
}

export default function Flag({
  nation,
  isNavLink = true,
  minimized = false,
}: IFlagProps) {
  function getContent() {
    return (
      <>
        <div
          className={classNames(styles.flag)}
          style={getBackgroundImageStyleObject(nation.flagImage)}
        ></div>
        {!minimized && (
          <Paragraph className={classNames(styles.text)}>
            {nation.name.russian}
          </Paragraph>
        )}
      </>
    );
  }

  return isNavLink ? (
    <NavLink
      to={nation.path}
      className={classNames(styles.root, minimized && styles.minimized)}
      onClick={Scroll.toTopInstantly}
    >
      {getContent()}
    </NavLink>
  ) : (
    <div className={classNames(styles.root, minimized && styles.minimized)}>
      {getContent()}
    </div>
  );
}
