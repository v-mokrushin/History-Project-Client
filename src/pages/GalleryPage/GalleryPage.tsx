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

interface IGalleryPageProps {
  className?: string;
}

const testPhotos = new Array(29)
  .fill("")
  .map((_, index: number) => `/images/gallery/${index + 1}.jpg`);

const GalleryPage: React.FC<IGalleryPageProps> = ({ className }) => {
  React.useEffect(() => {
    alertsStore.add("info", `Раздел на начальном этупе разработки`);

    return () => {};
  }, []);

  return (
    <>
      <ContentWrapper containerType={CONTAINER_TYPES.wide}>
        <Container type={CONTAINER_TYPES.wide}>
          <Title>Галерея</Title>
          <div className={styles.root}>
            <div className={styles.sectionsBox}>
              <div className={styles.sectionCard}>
                <img
                  className={styles.sectionImage}
                  src="/images/backgrounds/weapons/armored.jpg"
                  alt=""
                />
              </div>
              <div className={styles.sectionsBox}>
                <div className={styles.sectionCard}>
                  <img
                    className={styles.sectionImage}
                    src="/images/backgrounds/weapons/aviation_2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.sectionsBox}>
                <div className={styles.sectionCard}>
                  <img
                    className={styles.sectionImage}
                    src="/images/backgrounds/weapons/gun.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.sectionsBox}>
                <div className={styles.sectionCard}>
                  <img
                    className={styles.sectionImage}
                    src="/images/backgrounds/weapons/artillery.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.sectionsBox}>
                <div className={styles.sectionCard}>
                  <img
                    className={styles.sectionImage}
                    src="/images/ss.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.photos}>
              {testPhotos.map((photo, index) => (
                <div key={index} className={styles.photoWrapper}>
                  <img
                    src={photo}
                    className={styles.photo}
                    onClick={() =>
                      imageViewerStore.openPhotoCollection(testPhotos, index)
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
};

export default GalleryPage;
