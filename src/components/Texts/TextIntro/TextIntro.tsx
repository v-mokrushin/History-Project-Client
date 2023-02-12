import React from "react";
import styles from "./TextIntro.module.scss";
import classNames from "classnames";
import { TWeapon } from "data/weapons/interfaces/common-weapon-interfaces";
import Paragraph from "components/Texts/Paragraph/Paragraph";
import Block from "components/Structure/Block/Block";

interface ITextIntroProps {
  weapon: TWeapon;
  className?: string;
}

const TextIntro: React.FC<ITextIntroProps> = ({ weapon, className }) => {
  if (!weapon) return <></>;
  if (!weapon.intro) return <></>;

  return (
    <Block formatAsSection className={classNames(styles.root, className)}>
      {weapon.intro.map((item, index) => (
        <Paragraph key={`${weapon.id}-intro-${index}`}>{item}</Paragraph>
      ))}
    </Block>
  );
};

export default TextIntro;
