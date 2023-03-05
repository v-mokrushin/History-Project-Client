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

interface IGalleryPageProps {
  className?: string;
}

const GalleryPage: React.FC<IGalleryPageProps> = observer(({ className }) => {
  const isLoading = commonApplicationStore.isUserArticlesLoading;

  const SectionCard = (section: IGallerySection, isLoading: boolean) => {
    return (
      <div
        className={styles.sectionCard}
        onClick={() => galleryStore.setActual(section)}
        key={section.name}
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
        <div className={styles.background}></div>
      </div>
    );
  };

  return (
    <>
      <ContentWrapper containerType={CONTAINER_TYPES.wide}>
        <Container type={CONTAINER_TYPES.wide}>
          <Title>Галерея</Title>
          <div className={styles.root}>
            <div className={styles.sectionsBox}>
              {galleryStore
                .getSections()
                .map((item) => SectionCard(item, isLoading))}
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
          {/* <CustomButton color="black" uppercase>Загрузить еще</CustomButton> */}
        </Container>
      </ContentWrapper>
    </>
  );
});

export default GalleryPage;
