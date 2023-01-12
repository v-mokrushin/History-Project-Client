import React from "react";
import styles from "./Spec.module.scss";
import classNames from "classnames";
import Subtitle from "components/Subtitle/Subtitle";
import { SpecificationsLayout } from "utils/specifications-layout";
import { IWeapon } from "data/weapons/weapons";

interface ISpecProps {
  weapon: IWeapon | undefined;
  className?: string;
}

export default function Spec({ weapon, className }: ISpecProps) {
  const [open, setOpen] = React.useState(false);
  const body = React.useRef(null);

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
        <button
          className={classNames(
            styles.buttonScrollLeft,
            open && styles.buttonScrollLeft_active
          )}
          onClick={scrollLeft}
        ></button>
        <button
          className={classNames(
            styles.buttonScrollRight,
            open && styles.buttonScrollRight_active
          )}
          onClick={scrollRight}
        ></button>
        <div
          onClick={() => setOpen(true)}
          id="spec-body"
          ref={body}
          className={classNames(styles.body, open && styles.body_open)}
        >
          <>
            <div className={styles.box}>
              {SpecificationsLayout.armored.getCommon(weapon)}
              {SpecificationsLayout.armored.getSizes(weapon)}
              {SpecificationsLayout.armored.getCrew(weapon)}
            </div>
            {SpecificationsLayout.armored.getWeapon(weapon)}
            {SpecificationsLayout.armored.getArmoring(weapon)}
            {SpecificationsLayout.armored.getMobility(weapon)}
          </>
        </div>
      </div>
    </div>
  );
}
