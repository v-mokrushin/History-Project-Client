import React from "react";
import styles_desktop from "./DesktopContentList.module.scss";
import styles_mobile from "./MobileContentList.module.scss";
import classNames from "classnames";
import { CONTENT_LIST_TYPE } from "./constants";

interface IContentListProps {
  list: string[] | undefined;
  loadingStatus: boolean;
  type: CONTENT_LIST_TYPE;
  className?: string;
}

export default function ContentList({
  list,
  loadingStatus,
  type,
  className,
}: IContentListProps) {
  const [open, setOpen] = React.useState(false);

  if (loadingStatus) return <div></div>;
  if (!list) return <div></div>;

  if (type == CONTENT_LIST_TYPE.desktop)
    return (
      <div className={classNames(styles_desktop.root, className)}>
        <p className={styles_desktop.title}>Содержание</p>
        <div className={classNames(styles_desktop.separator)}></div>
        <div className={classNames(styles_desktop.linksBox)}>
          {list.map((item, index) => (
            <a
              key={index}
              className={styles_desktop.link}
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

  if (type == CONTENT_LIST_TYPE.mobile)
    return (
      <div
        className={classNames(styles_mobile.root, className)}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p
          className={styles_mobile.title}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Содержание
        </p>
        <div className={classNames(styles_mobile.separator)}></div>
        <div
          className={classNames(
            styles_mobile.linksBox,
            open && styles_mobile.linksBox_open
          )}
        >
          {list.map((item, index) => (
            <a
              key={index}
              className={styles_mobile.link}
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

  return <></>;
}
