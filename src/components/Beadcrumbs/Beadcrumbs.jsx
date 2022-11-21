import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router-dom";
import { PAGES_DATA } from "../../pages/UniversalPage/pagesData";
import styles from "./Beadcrumbs.module.scss";

export default function Beadcrumbs() {
  const location = useLocation().pathname;
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    setArr(
      location.split("/").map((item) => PAGES_DATA.getTitleByEngTitle(item))
    );
  }, [location]);

  return (
    <div className={styles.root}>
      {arr.map((item, index, array) => (
        <>
          <div className={classNames(styles.breadcrumbItem)}>{item}</div>
          {index != array.length - 1 && (
            <span className={styles.breadcrumbItem}>{"/"}</span>
          )}
        </>
      ))}
    </div>
  );
}

//key={`beadcrumb-${index}`}
