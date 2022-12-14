import classNames from "classnames";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PAGES_DATA } from "../../constants/pages";
import actualSectionStore from "../../stores/mobx/actualSectionStore";
import styles from "./Beadcrumbs.module.scss";

export default function Beadcrumbs() {
  const locationPathname: string = useLocation().pathname;
  const labels: Array<string> = React.useMemo(
    () => PAGES_DATA.getLabelsArray(locationPathname),
    [locationPathname]
  );

  const pathNames: Array<string> = React.useMemo(
    () => PAGES_DATA.getPathnamesArray(locationPathname),
    [locationPathname]
  );

  React.useEffect(() => {
    actualSectionStore.set(pathNames[1], labels.length);
  }, [locationPathname]);

  // console.log(labels);

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
