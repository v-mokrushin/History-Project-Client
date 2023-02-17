import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import settingsStore from "stores/mobx/settingsStore";
import { Pages } from "../../../constants/pages";
import actualSectionStore from "../../../stores/mobx/actualSectionStore";
import styles from "./Beadcrumbs.module.scss";

const Beadcrumbs = observer(() => {
  const locationPathname: string = useLocation().pathname;
  const labels: Array<string> = React.useMemo(
    () => Pages.getLabelsArray(locationPathname, settingsStore.language),
    [locationPathname, settingsStore.language]
  );

  const pathNames: Array<string> = React.useMemo(
    () => Pages.getPathnamesArray(locationPathname),
    [locationPathname]
  );

  React.useEffect(() => {
    actualSectionStore.set(pathNames[1], labels.length);
  }, [locationPathname]);

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
});

export default Beadcrumbs;
