import classNames from "classnames";
import React from "react";
import { ANIMATIONS } from "../../constants/animations";
import { WARNING_PAGE_TYPE } from "./constants";
import styles from "./WarningPage.module.scss";

interface IWarningPageProps {
  pageType: string;
}

export default function WarningPage({ pageType }: IWarningPageProps) {
  React.useEffect(() => {
    // documentTitle.setWarningPage();
  }, []);

  function getBackground() {
    if (pageType == WARNING_PAGE_TYPE.notFound)
      return styles.backgroundNotFound;
    if (pageType == WARNING_PAGE_TYPE.workInProgress)
      return styles.backgroundWorkInProgress;
  }

  function getTitle() {
    if (pageType == WARNING_PAGE_TYPE.notFound)
      return "404 Страница не найдена";
    if (pageType == WARNING_PAGE_TYPE.workInProgress)
      return "Страница в разработке";
  }

  function getKey() {
    if (pageType == WARNING_PAGE_TYPE.notFound) return 404;
    if (pageType == WARNING_PAGE_TYPE.workInProgress) return 500;
  }

  return (
    <div
      className={classNames(styles.root, {
        [styles.root_typeNoFound]: pageType == WARNING_PAGE_TYPE.notFound,
      })}
      key={getKey()}
    >
      <div className={classNames(styles.background, getBackground())}></div>
      <p className={classNames(styles.title, ANIMATIONS.fadeInDown)}>
        {getTitle()}
      </p>
    </div>
  );
}
