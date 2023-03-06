import React from "react";
import styles from "./GallerySectionCard.module.scss";
import classNames from "classnames";
import { IGallerySection } from "interfaces/gallery";
import galleryStore from "stores/mobx/galleryStore";

interface IGallerySectionCardProps {
  section: IGallerySection;
  isLoading: boolean;
}

const GallerySectionCard: React.FC<IGallerySectionCardProps> = ({
  section,
  isLoading,
}) => {
  return (
    <div
      className={styles.sectionCard}
      onClick={() => galleryStore.setActual(section)}
    >
      <div className={styles.contentBox}>
        {isLoading ? (
          <span
            className={classNames(
              styles.title,
              galleryStore.isActual(section) && styles.title_actual
            )}
          >{`${section.title}`}</span>
        ) : (
          <span
            className={classNames(
              styles.title,
              galleryStore.isActual(section) && styles.title_actual
            )}
          >{`${section.title} (${section.content.length})`}</span>
        )}
      </div>
      <img className={styles.sectionImage} src={section.src} />
    </div>
  );
};

export default GallerySectionCard;
