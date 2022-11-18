import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SectionCard.module.scss";
import classNames from "classnames";
import { ANIMATIONS } from "../../constants/animation";
import { scrollTopInstantly } from "../../utils/scroll";
import { SECTION_CARD_TYPE } from "./constants";

export default function SectionCard({ type }) {
  function getLink() {
    if (type === SECTION_CARD_TYPE.articles) return "/articles";
    if (type === SECTION_CARD_TYPE.weapons) return "/weapons";
    if (type === SECTION_CARD_TYPE.battles) return "/battles";

    if (type === SECTION_CARD_TYPE.pages.weapons.aviation)
      return "/weapons/aviation";
    if (type === SECTION_CARD_TYPE.pages.weapons.armored)
      return "/weapons/armored";
    if (type === SECTION_CARD_TYPE.pages.weapons.smallArms)
      return "/weapons/small-arms";
    if (type === SECTION_CARD_TYPE.pages.weapons.artillery)
      return "/weapons/artillery";
  }

  function getBackround() {
    if (type === SECTION_CARD_TYPE.articles)
      return styles.backgroundWrapper_articles;
    if (type === SECTION_CARD_TYPE.weapons)
      return styles.backgroundWrapper_weapons;
    if (type === SECTION_CARD_TYPE.battles)
      return styles.backgroundWrapper_battles;

    if (type === SECTION_CARD_TYPE.pages.weapons.aviation)
      return styles.backgroundWrapper_aviation;
    if (type === SECTION_CARD_TYPE.pages.weapons.armored)
      return styles.backgroundWrapper_armored;
    if (type === SECTION_CARD_TYPE.pages.weapons.smallArms)
      return styles.backgroundWrapper_smallArms;
    if (type === SECTION_CARD_TYPE.pages.weapons.artillery)
      return styles.backgroundWrapper_artillery;
  }

  function getTitle() {
    if (type === SECTION_CARD_TYPE.articles) return "Статьи";
    if (type === SECTION_CARD_TYPE.weapons) return "Вооружения";
    if (type === SECTION_CARD_TYPE.battles) return "Сражения";

    if (type === SECTION_CARD_TYPE.pages.weapons.aviation) return "Авиация";
    if (type === SECTION_CARD_TYPE.pages.weapons.armored) return "Бронетехника";
    if (type === SECTION_CARD_TYPE.pages.weapons.smallArms)
      return "Стрелковое оружие";
    if (type === SECTION_CARD_TYPE.pages.weapons.artillery) return "Артиллерия";
  }

  return (
    <NavLink
      to={getLink()}
      className={classNames(styles.root, ANIMATIONS.fadeIn)}
      onClick={() => scrollTopInstantly()}
    >
      <div
        className={classNames(styles.backgroundWrapper, getBackround())}
      ></div>
      <div className={styles.contentWrapper}>
        {/* <div className={styles.separator}></div> */}
        <p className={styles.title}>{getTitle()}</p>
      </div>
    </NavLink>
  );
}
