import classNames from "classnames";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PAGES_DATA } from "../../../javascript/constants/pages";
import styles from "./Beadcrumbs.module.scss";

export default function Beadcrumbs() {
  const locationPathname = useLocation().pathname;
  const [labels, setLabels] = React.useState([]);
  const [pathNames, setPathNames] = React.useState([]);

  React.useEffect(() => {
    setLabels(getLabelsArray(locationPathname));
    setPathNames(getPathnamesArray(locationPathname));
  }, [locationPathname]);

  function getLabelsArray(locationPathname) {
    return locationPathname === "/"
      ? ["главная"]
      : locationPathname
          .split("/")
          .map((item) => PAGES_DATA.getRussianName(item) || item);
  }

  function getPathnamesArray(locationPathname) {
    const pathNamesArray = [];
    let previousPosition = -1;
    let curentPosition = -1;

    while (locationPathname.indexOf("/", curentPosition + 1) != -1) {
      previousPosition = curentPosition + 1;
      curentPosition = locationPathname.indexOf("/", curentPosition + 1);
      pathNamesArray.push(locationPathname.slice(0, curentPosition));
    }

    pathNamesArray.push(locationPathname.slice(0));
    pathNamesArray[0] = "/";

    return pathNamesArray;
  }

  return (
    <div className={styles.root}>
      {labels.length > 1 &&
        labels.map(
          (item, index, array) =>
            index != array.length - 1 && (
              <div className={styles.box} key={index}>
                <NavLink
                  to={pathNames[index]}
                  className={classNames(styles.label)}
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
