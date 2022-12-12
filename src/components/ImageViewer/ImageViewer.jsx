import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { ImageViewerContext } from "./context";

export default function ImageViewer({}) {
  const context = React.useContext(ImageViewerContext);
  if (context.value.open) document.body.style.overflow = "hidden";
  if (!context.value.open) document.body.style.overflow = "auto";

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      // console.log(event.key);
      if (event.key === "Escape") {
        context.setValue({ open: false });
      }
    });
  }, []);

  return (
    <div
      onClick={() => {
        context.setValue({ open: false });
      }}
      className={classNames(
        styles.root,
        context.value.open && styles.root_open
      )}
    >
      <img
        className={classNames(
          styles.image,
          context.value.open && styles.image_open
        )}
        src={context.value.url}
        alt=""
      />
    </div>
  );
}
