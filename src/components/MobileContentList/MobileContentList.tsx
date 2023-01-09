import React from "react";
import styles from "./MobileContentList.module.scss";
import classNames from "classnames";

interface IMobileContentListProps {
  list: string[] | undefined;
  className?: string;
}

export default function MobileContentList({
  list,
  className,
}: IMobileContentListProps) {
  const [open, setOpen] = React.useState(false);

  if (!list) return <></>;

  return (
    <div
      className={classNames(styles.root, className)}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <p
        className={styles.title}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Содержание
      </p>
      <div className={classNames(styles.separator)}></div>
      <div
        className={classNames(styles.linksBox, open && styles.linksBox_open)}
      >
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
  );
}
