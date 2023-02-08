import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import imageViewerStore from "../../stores/mobx/imageViewerStore";
import { DocumentOverflow } from "utils/document-overflow";
import Text from "components/Text/Text";

const ImageViewer = observer(() => {
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        imageViewerStore.close();
      }
      if (event.key === "ArrowLeft") {
        imageViewerStore.switchPhoto(false);
      }
      if (event.key === "ArrowRight") {
        imageViewerStore.switchPhoto(true);
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
      {imageViewerStore.isCollection && (
        <Text bold className={styles.counter}>
          {imageViewerStore.counter}
        </Text>
      )}
      <button
        className={styles.closeButton}
        onClick={() => imageViewerStore.close()}
      >
        <div className={styles.closeButton_icon}></div>
      </button>
      {imageViewerStore.isCollection && (
        <>
          {imageViewerStore.isFarLeft || (
            <button
              className={classNames(styles.switchButton_left)}
              onClick={() => imageViewerStore.switchPhoto(false)}
            >
              <div className={styles.switchButton_arrow}></div>
            </button>
          )}
          {(imageViewerStore.isCollection && imageViewerStore.isFarRight) || (
            <button
              className={styles.switchButton_right}
              onClick={() => imageViewerStore.switchPhoto(true)}
            >
              <div className={styles.switchButton_arrow}></div>
            </button>
          )}
        </>
      )}
    </div>
  );
});

export default ImageViewer;
