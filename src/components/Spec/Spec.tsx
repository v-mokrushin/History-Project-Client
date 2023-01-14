import React from "react";
import styles from "./Spec.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { SpecificationsLayout } from "utils/specifications-layout";
import { IWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import { WEAPONS_TYPE_METHODS } from "constants/weapon-types";

interface ISpecProps {
  weapon: IWeapon | undefined;
  className?: string;
}

export default function Spec({ weapon, className }: ISpecProps) {
  const [open, setOpen] = React.useState(false);
  const body = React.useRef<HTMLHeadingElement>(null);
  const [toShowScrollButtons, setTohowScrollButtons] = React.useState(true);

  React.useEffect(() => {
    body.current?.clientWidth === body.current?.scrollWidth
      ? setTohowScrollButtons(false)
      : setTohowScrollButtons(true);
  }, []);

  if (!weapon) return <></>;

  function toggleOpen() {
    setOpen(!open);
  }

  function scrollLeft() {
    open &&
      document
        .querySelector("#spec-body")
        ?.scrollBy({ left: -500, behavior: "smooth" });
  }

  function scrollRight() {
    open &&
      document
        .querySelector("#spec-body")
        ?.scrollBy({ left: 500, behavior: "smooth" });
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={classNames(styles.header)}>
        <Subtitle id="Характеристики" noMargin>
          Характеристики
        </Subtitle>
        <button
          className={classNames(styles.arrow, open && styles.arrow_open)}
          onClick={toggleOpen}
        ></button>
      </div>
      <div className={classNames(styles.content)}>
        {toShowScrollButtons && (
          <button
            className={classNames(
              styles.buttonScrollLeft,
              open && styles.buttonScrollLeft_active
            )}
            onClick={scrollLeft}
          ></button>
        )}
        {toShowScrollButtons && (
          <button
            className={classNames(
              styles.buttonScrollRight,
              open && styles.buttonScrollRight_active
            )}
            onClick={scrollRight}
          ></button>
        )}
        <div
          onClick={() => setOpen(true)}
          id="spec-body"
          ref={body}
          className={classNames(styles.body, open && styles.body_open)}
        >
          <>
            {WEAPONS_TYPE_METHODS.identity.isArmoredVehicle(weapon) && (
              <>
                <div className={styles.box}>
                  {SpecificationsLayout.getCommon(
                    weapon.specifications,
                    weapon.nation,
                    weapon.type
                  )}
                  {SpecificationsLayout.armored.getSizes(weapon.specifications)}
                  {SpecificationsLayout.getCrew(weapon.specifications)}
                </div>
                {SpecificationsLayout.armored.getWeapon(weapon.specifications)}
                {SpecificationsLayout.armored.getArmoring(
                  weapon.specifications
                )}
                {SpecificationsLayout.armored.getMobility(
                  weapon.specifications
                )}
              </>
            )}
            {WEAPONS_TYPE_METHODS.identity.isAviation(weapon) && (
              <>
                <div className={styles.box}>
                  {SpecificationsLayout.getCommon(
                    weapon.specifications,
                    weapon.nation,
                    weapon.type
                  )}
                  {SpecificationsLayout.avivation.getSizes(
                    weapon.specifications
                  )}
                </div>
                <div className={styles.box}>
                  {SpecificationsLayout.avivation.getFlightCharacteristics(
                    weapon.specifications
                  )}
                  {SpecificationsLayout.avivation.getPowerUnits(
                    weapon.specifications
                  )}
                </div>
                <div className={styles.box}>
                  {SpecificationsLayout.getCrew(weapon.specifications)}
                  {SpecificationsLayout.avivation.getWeapons(
                    weapon.specifications
                  )}
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}
