import React from "react";
import styles from "./Spec.module.scss";
import classNames from "classnames";

export default function Spec({ title, children, className }) {
  const [open, setOpen] = React.useState(false);
  const body = React.useRef(null);

  function toggleOpen() {
    setOpen(!open);
  }

  function scrollLeft() {
    open &&
      document
        .querySelector("#spec-body")
        .scrollBy({ left: -500, behavior: "smooth" });
  }

  function scrollRight() {
    open &&
      document
        .querySelector("#spec-body")
        .scrollBy({ left: 500, behavior: "smooth" });
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={classNames(styles.header)}>
        {title}
        <button
          className={classNames(styles.arrow, open && styles.arrow_open)}
          onClick={toggleOpen}
        ></button>
      </div>
      <div className={classNames(styles.content)}>
        <button
          className={classNames(
            styles.buttonScrollLeft,
            open && styles.buttonScrollLeft_active
          )}
          onClick={scrollLeft}
        ></button>
        <button
          className={classNames(
            styles.buttonScrollRight,
            open && styles.buttonScrollRight_active
          )}
          onClick={scrollRight}
        ></button>
        <div
          onClick={() => setOpen(true)}
          id="spec-body"
          ref={body}
          className={classNames(styles.body, open && styles.body_open)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

{
  /* <div
          className={classNames(styles.arrowBox, open && styles.arrowBox_open)}
        >
          <button
            className={classNames(styles.arrow, open && styles.arrow_open)}
          ></button>
        </div> */
}
