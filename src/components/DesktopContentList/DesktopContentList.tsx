import React from "react";
import styles from "./DesktopContentList.module.scss";
import classNames from "classnames";

interface IDesktopContentListProps {
  list: string[] | undefined;
  loadingStatus: boolean;
  className?: string;
}

export default function DesktopContentList({
  list,
  loadingStatus,
  className,
}: IDesktopContentListProps) {
  if (loadingStatus) return <div></div>;

  return list ? (
    <div className={classNames(styles.root, className)}>
      <p className={styles.title}>Содержание</p>
      <div className={classNames(styles.separator)}></div>
      <div className={classNames(styles.linksBox)}>
        {list.map((item, index) => (
          <a
            key={index}
            className={styles.link}
            href={`#${item}`}
            onClick={(e) => {
              e.preventDefault();
              document
                ?.getElementById(item)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
