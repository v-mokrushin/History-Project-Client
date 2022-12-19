import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { ImageViewerContext } from "./context";

export default function ImageViewer({}) {
  const context = React.useContext(ImageViewerContext);
  if (context.value.open) document.body.style.overflow = "hidden";
  if (!context.value.open) document.body.style.overflow = "auto";

  function close() {
    context.setValue({ open: false });
  }

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });
  }, []);

  return (
    <div
      onClick={close}
      className={classNames(
        styles.root,
        context.value.open && styles.root_open
      )}
    >
      <img
        id="image-viewer-image"
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
