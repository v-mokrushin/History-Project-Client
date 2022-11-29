import React from "react";
import styles from "./DesktopContentList.module.scss";
import classNames from "classnames";

export default function DesktopContentList({ list, className }) {
  React.useEffect(() => {
    setTimeout(() => {
      console.log(
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        )
      );
    }, 1);
  }, []);

  return (
    list && (
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
                  .getElementById(item)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    )
  );
}
