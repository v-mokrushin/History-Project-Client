import React from "react";
import styles from "./ArticleInfo.module.scss";
import classNames from "classnames";
import Text from "components/Text/Text";

interface IArticleInfoProps {
  author: string;
  origin?: string;
  className?: string;
}

const ArticleInfo: React.FC<IArticleInfoProps> = ({
  author,
  origin,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.string}>
        <div className={styles.string__titleBox}>
          <Text bold>Авторы</Text>
        </div>
        <Text>{author}</Text>
      </div>
      {origin && (
        <div className={styles.string}>
          <div className={styles.string__titleBox}>
            <Text bold>Источник</Text>
          </div>
          <Text>{origin}</Text>
        </div>
      )}
    </div>
  );
};

export default ArticleInfo;
