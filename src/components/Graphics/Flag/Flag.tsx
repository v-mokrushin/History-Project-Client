import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Flag.module.scss";
import classNames from "classnames";

import { getBackgroundImageStyleObject } from "../../../utils/common";
import Paragraph from "../../Texts/Paragraph/Paragraph";
import { IPage } from "constants/pages";
import { INation } from "constants/nations";
import { Scroll } from "utils/scroll";
import Text from "components/Texts/Text/Text";

interface IFlagProps {
  nation: INation;
  showLabel?: boolean;
  isNavLink?: boolean;
  minimized?: boolean;
  forFilter?: boolean;
}

export default function Flag({
  nation,
  showLabel = false,
  isNavLink = true,
  minimized = false,
  forFilter = false,
}: IFlagProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => isNavLink && navigate(nation.path)}
      className={classNames(styles.root, {
        [styles.minimized]: minimized,
        [styles.forFilter]: forFilter,
      })}
    >
      <div
        className={classNames(styles.flag)}
        style={getBackgroundImageStyleObject(nation.flagImage)}
      ></div>
      {showLabel && (
        <Text className={classNames(styles.text)}>{nation.name.russian}</Text>
      )}
    </div>
  );
}
