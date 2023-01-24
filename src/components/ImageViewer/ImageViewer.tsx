import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import imageViewerStore from "../../stores/mobx/imageViewerStore";
import { DocumentOverflow } from "utils/document-overflow";

const ImageViewer = observer(() => {
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        imageViewerStore.setClose();
      }
    });
  }, []);

  React.useEffect(() => {
    imageViewerStore.open
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [imageViewerStore.open]);

  return (
    <div
      onClick={() => {
        // imageViewerStore.setClose();
      }}
      className={classNames(
        styles.root,
        imageViewerStore.open && styles.root_open
      )}
    >
      <img
        onClick={(event) => {
          // event.stopPropagation();
        }}
        id="image-viewer-image"
        className={classNames(
          styles.image,
          imageViewerStore.open && styles.image_open
        )}
        src={imageViewerStore.url}
        alt=""
      />
      <button
        className={styles.closeButton}
        onClick={() => imageViewerStore.setClose()}
      >
        <div className={styles.closeButton_icon}></div>
      </button>
    </div>
  );
});

export default ImageViewer;
