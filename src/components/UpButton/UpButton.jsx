import React from "react";
import { scrollToTop } from "../../utils/scroll";
import styles from "./UpButton.module.scss";
import classNames from "classnames";

export default function UpButton() {
  const [toShow, setToShow] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [test, setTest] = React.useState(true);
  // console.log("render");
  // console.log(scrollPosition);
  // console.log(Math.abs(window.scrollY - scrollPosition));

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      // setTest(!test);
      if (document.documentElement.clientWidth > 991.98) {
        window.scrollY > 300 && window.scrollY < scrollPosition
          ? setToShow(true)
          : setToShow(false);
        if (
          window.scrollY > 300 &&
          Math.abs(window.scrollY - scrollPosition) > 10
        ) {
          setScrollPosition(window.scrollY);
        }
      }
    });
  }, [scrollPosition]);

  return (
    <button
      className={classNames(styles.root, toShow && styles.visible)}
      onClick={scrollToTop}
    ></button>
  );
}
