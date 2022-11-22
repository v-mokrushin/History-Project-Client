import classNames from "classnames";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";
import styles from "./Beadcrumbs.module.scss";

export default function Beadcrumbs() {
  const location = useLocation().pathname;
  const [arr, setArr] = React.useState([]);

  React.useEffect(() => {
    setArr(
      location === "/"
        ? ["главная"]
        : location
            .split("/")
            .map((item) =>
              PAGES_DATA.getTitleByEngTitle(item)
                ? PAGES_DATA.getTitleByEngTitle(item)
                : item
            )
    );
  }, [location]);

  return (
    <div className={styles.root}>
      {arr.length > 1 &&
        arr.map(
          (item, index, array) =>
            index != array.length - 1 && (
              <div className={styles.box} key={index}>
                <NavLink
                  to={PAGES_DATA.getPathByTitle(item)}
                  className={classNames(styles.item)}
                >
                  {item}
                </NavLink>
                {index != array.length - 1 && (
                  <span className={styles.separator}>{"/"}</span>
                )}
              </div>
            )
        )}
    </div>
  );
}
