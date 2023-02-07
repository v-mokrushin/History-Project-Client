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
import WeaponsPreviewPage from "pages/WeaponsPreviewPage/WeaponsPreviewPage";
import WeaponCard from "components/WeaponCard/WeaponCard";

interface IInfographicsProps {
  weapons: TWeapon[];
  setPreview: Function;
  className?: string;
}

const Infographics: React.FC<IInfographicsProps> = observer(
  ({ weapons, setPreview, className }) => {
    weapons = weapons
      .filter((item) => item.specifications.common.numberOfIssued)
      .sort((a, b) =>
        !settingsStore.sortInAscending
          ? b.specifications.common.numberOfIssued! -
            a.specifications.common.numberOfIssued!
          : a.specifications.common.numberOfIssued! -
            b.specifications.common.numberOfIssued!
      );

    const max = Math.max(
      ...weapons.map((item) => item.specifications.common.numberOfIssued!)
    );

    return (
      <div className={classNames(styles.root, className)} key={Math.random()}>
        <Subtitle noMargin>Произведено</Subtitle>
        <div className={classNames(styles.infographic, ANIMATIONS.fadeIn)}>
          <div className={styles.graphicWrapper}>
            {weapons.map((weapon) => (
              <NavLink
                key={weapon.id!}
                to={weapon.id!}
                className={styles.column}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={styles.body}
                  style={{
                    height:
                      (weapon.specifications.common.numberOfIssued! / max) *
                        100 +
                      "%",
                  }}
                  onMouseEnter={(event) => {
                    setPreview({
                      weapon: weapon,
                      toShow: true,
                      element: event.currentTarget,
                    });
                  }}
                  onMouseLeave={() =>
                    setPreview({
                      toShow: false,
                    })
                  }
                >
                  <Text className={styles.value}>
                    {getShortNumber(
                      weapon.specifications.common.numberOfIssued!
                    )}
                  </Text>
                  <Text className={styles.name}>
                    {weapon.shortName ? weapon.shortName : weapon.name}
                  </Text>
                  <div className={styles.continuation}></div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default Infographics;
