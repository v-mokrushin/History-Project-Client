import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import { imageViewerStore } from "../../../javascript/store/mobx";

const ImageViewer = observer(() => {
  // if (context.value.open) document.body.style.overflow = "hidden";
  // if (!context.value.open) document.body.style.overflow = "auto";

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        imageViewerStore.setClose();
      }
    });
  }, []);

  return (
    <div
      onClick={() => imageViewerStore.setClose()}
      className={classNames(
        styles.root,
        imageViewerStore.open && styles.root_open
      )}
    >
      <img
        id="image-viewer-image"
        className={classNames(
          styles.image,
          imageViewerStore.open && styles.image_open
        )}
        src={imageViewerStore.url}
        alt=""
      />
    </div>
  );
});

export default ImageViewer;
