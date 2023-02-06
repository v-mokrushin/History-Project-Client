import React from "react";
import styles from "./Infographics.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import { ANIMATIONS } from "constants/animations";
import Text from "components/Text/Text";
import { getShortNumber } from "utils/common";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import settingsStore from "stores/mobx/settingsStore";

interface IInfographicsProps {
  weapons: TWeapon[];
  className?: string;
}

const Infographics: React.FC<IInfographicsProps> = observer(
  ({ weapons, className }) => {
    weapons = weapons
      .filter((item) => item.specifications.common.numberOfIssued)
      .sort((a, b) =>
        !settingsStore.sortInAscending
          ? (b.specifications.common.numberOfIssued! -
            a.specifications.common.numberOfIssued!)
          : (a.specifications.common.numberOfIssued! -
            b.specifications.common.numberOfIssued!)
      );

    const max = Math.max(
      ...weapons.map((item) => item.specifications.common.numberOfIssued!)
    );

    return (
      <div className={classNames(styles.root, className)} key={Math.random()}>
        <Subtitle noMargin>Произведено</Subtitle>
        <div className={classNames(styles.infographic, ANIMATIONS.fadeIn)}>
          <div className={styles.graphicWrapper}>
            {weapons.map((item) => (
              <NavLink
                key={item.id!}
                to={item.id!}
                className={styles.column}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={styles.body}
                  style={{
                    height:
                      (item.specifications.common.numberOfIssued! / max) * 100 +
                      "%",
                  }}
                >
                  <Text className={styles.value}>
                    {getShortNumber(item.specifications.common.numberOfIssued!)}
                  </Text>
                  <Text className={styles.name}>
                    {item.shortName ? item.shortName : item.name}
                  </Text>
                </div>
              </NavLink>
            ))}
          </div>
          {/* <div>
          <span>ss</span>
        </div> */}
        </div>
      </div>
    );
  }
);

export default Infographics;
