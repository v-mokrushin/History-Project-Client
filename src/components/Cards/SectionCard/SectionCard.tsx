import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SectionCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../../constants/animations";

import { getBackgroundImageStyleObject } from "../../../utils/common";
import { IPage } from "constants/pages";
import { Scroll } from "utils/scroll";
import Preloader from "components/Graphics/Preloader/Preloader";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import settingsStore from "stores/mobx/settingsStore";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

interface ISectionCardProps {
  information: IPage;
  className?: string;
}

const SectionCard: React.FC<ISectionCardProps> = observer(
  ({ information, className }: ISectionCardProps) => {
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
          <p className={styles.title}>
            {information.name[settingsStore.language]}
          </p>
        </div>
      </NavLink>
    );
  }
);

export default SectionCard;
