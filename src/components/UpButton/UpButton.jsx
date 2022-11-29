import React from "react";
import { scrollToTop } from "../../utils/scroll";
import styles from "./UpButton.module.scss";
import classNames from "classnames";

export default function UpButton() {
  const [toShow, setToShow] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 && window.scrollY < scrollPosition
        ? setToShow(true)
        : setToShow(false);

      window.scrollY > 300 && setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  return (
    <button
      className={classNames(styles.root, toShow && styles.visible)}
      onClick={scrollToTop}
    ></button>
  );
}
