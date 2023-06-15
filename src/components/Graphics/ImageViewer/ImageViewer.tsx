import React from "react";
import styles from "./ImageViewer.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react";
import imageViewerStore from "../../../stores/mobx/imageViewerStore";
import { DocumentOverflow } from "utils/document-overflow";
import Text from "components/Texts/Text/Text";
import Preloader from "components/Graphics/Preloader/Preloader";

const ImageViewer = observer(() => {
  const [displayed, setDisplayed] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

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
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) imageViewerStore.switchPhoto(false);
      if (event.deltaY < 0) imageViewerStore.switchPhoto(true);
      // imageViewerStore.close();
    });
  }, []);

  React.useLayoutEffect(() => {
    if (imageViewerStore.open) {
      setDisplayed(true);
    } else {
      setOpen(false);
      setTimeout(() => setDisplayed(false), 250);
    }

    imageViewerStore.open
      ? DocumentOverflow.setHidden()
      : DocumentOverflow.setAuto();
  }, [imageViewerStore.open]);

  React.useEffect(() => {
    if (displayed) setOpen(true);
  }, [displayed]);

  return (
    <div
      className={classNames(
        styles.root,
        displayed && styles.root_displayed,
        open && styles.root_open
      )}
    >
      <img
        id="image-viewer-image"
        className={classNames(styles.image)}
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
