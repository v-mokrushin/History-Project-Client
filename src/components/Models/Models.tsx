import React from "react";
import styles from "./Models.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";
import { IModel } from "data/weapons/interfaces/common-weapon-interfaces";
import TextBlock from "components/TextBlock/TextBlock";
import Subtitle from "components/Subtitle/Subtitle";

interface IModelsProps {
  showTitle?: boolean;
  models: IModel[];
  className?: string;
}

const Models = ({ models, showTitle = true, className }: IModelsProps) => {
  if (!models) return <></>;

  return (
    <TextBlock>
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
    </TextBlock>
  );
};

export default Models;
