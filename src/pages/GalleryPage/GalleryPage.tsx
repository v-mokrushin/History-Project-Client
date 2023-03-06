import React from "react";
import styles from "./GalleryPage.module.scss";
import classNames from "classnames";
import Container from "components/Structure/Container/Container";
import { CONTAINER_TYPES } from "components/Structure/Container/constants";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import imageViewerStore from "stores/mobx/imageViewerStore";
import Preloader from "components/Graphics/Preloader/Preloader";
import Title from "components/Texts/Title/Title";
import { ANIMATIONS } from "constants/animations";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";
import { alertsStore } from "stores/mobx/alertsStore";
import loadingStore from "stores/mobx/loadingStore";
import { IGallerySection } from "interfaces/gallery";
import galleryStore from "stores/mobx/galleryStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import CustomButton from "components/Buttons/Button/Button";
import GallerySectionCard from "components/Cards/GallerySectionCard/GallerySectionCard";

interface IGalleryPageProps {
  className?: string;
}

const GalleryPage: React.FC<IGalleryPageProps> = observer(({ className }) => {
  const isLoading = commonApplicationStore.isUserArticlesLoading;

  return (
    <>
      <ContentWrapper containerType={CONTAINER_TYPES.wide}>
        <Container type={CONTAINER_TYPES.wide}>
          <Title>Галерея</Title>
          <div className={styles.root}>
            <div className={styles.sectionsBox}>
              {galleryStore.getSections().map((section) => (
                <GallerySectionCard
                  section={section}
                  isLoading={isLoading}
                  key={section.name}
                />
              ))}
            </div>
            <div
              className={classNames(styles.photos, ANIMATIONS.fadeIn)}
              key={galleryStore.actualSection.name}
            >
              {isLoading ||
                galleryStore.actualSection.content.map((photo, index) => (
                  <div key={photo} className={styles.photoWrapper}>
                    <img
                      src={photo}
                      className={styles.photo}
                      onClick={() =>
                        imageViewerStore.openPhotoCollection(
                          galleryStore.actualSection.content,
                          index
                        )
                      }
                    />
                    <Preloader color="black" />
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </ContentWrapper>
    </>
  );
});

export default GalleryPage;
