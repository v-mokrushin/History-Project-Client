import React from "react";
import styles from "./ReadingProgressBar.module.scss";
import classNames from "classnames";

export default function ReadingProgressBar({ className }) {
  const bar = React.useRef(null);
  const [parent, setParent] = React.useState(null);
  const [scroll, setScroll] = React.useState(null);

  React.useEffect(() => {
    setParent(bar.current.parentElement);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div
      ref={bar}
      style={{
        width:
          (scroll /
            (parent?.clientHeight - document.documentElement.clientHeight)) *
            100 +
          "%",
      }}
      className={classNames(styles.root, className)}
    ></div>
  );
}
