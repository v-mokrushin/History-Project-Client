import React from "react";
import styles from "./WeaponPhotoCollection.module.scss";
import classNames from "classnames";
import Block from "components/Structure/Block/Block";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import imageViewerStore from "stores/mobx/imageViewerStore";
import Preloader from "../Preloader/Preloader";

interface IWeaponPhotoCollectionProps {
  collection: string[] | undefined;
  articleId: string;
  className?: string;
}

const WeaponPhotoCollection: React.FC<IWeaponPhotoCollectionProps> = ({
  collection,
  articleId,
  className,
}) => {
  if (!collection) return <></>;

  return (
    <Block formatAsSection>
      <Subtitle id="Фотографии">Фотографии</Subtitle>
      <div className={styles.photos}>
        {collection.map((photo, index) => (
          <div
            key={`photo-${articleId}-${index}`}
            className={styles.photoWrapper}
          >
            <img
              src={photo}
              className={styles.photo}
              onClick={() =>
                imageViewerStore.openPhotoCollection(collection, index)
              }
            />
            <Preloader color="black" />
          </div>
        ))}
      </div>
    </Block>
  );
};

export default WeaponPhotoCollection;
