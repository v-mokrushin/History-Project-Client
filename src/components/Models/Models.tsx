import React from "react";
import styles from "./Models.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";
import { IModel } from "data/weapons/interfaces/common-weapon-interfaces";

interface IModelsProps {
  className?: string;
  models: IModel[];
}

const Models = ({ className, models }: IModelsProps) => {
  if (!models) return <></>;

  return (
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
  );
};

export default Models;
