import React from "react";
import styles from "./Models.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";
import { IModel } from "data/weapons/interfaces/common-weapon-interfaces";
import Block from "components/Block/Block";
import Subtitle from "components/Subtitle/Subtitle";

interface IModelsProps {
  showTitle?: boolean;
  models: IModel[];
  className?: string;
}

const Models = ({ models, showTitle = true, className }: IModelsProps) => {
  if (!models) return <></>;

  return (
    <Block formatAsSection>
      {showTitle ? <Subtitle id="Модели">Модели</Subtitle> : <></>}
      <div className={classNames(styles.root, className)}>
        {models.map((model) => (
          <a
            href={model.link}
            className={styles.link}
            target="_blank"
            key={model.link}
          >
            <div className={styles.model}>
              <img className={styles.photo} src={model.photo} alt="" />
              <Text className={styles.title}>{model.title}</Text>
            </div>
          </a>
        ))}
      </div>
    </Block>
  );
};

export default Models;
