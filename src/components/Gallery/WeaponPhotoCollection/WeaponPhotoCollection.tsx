import React from "react";
import styles from "./WeaponPhotoCollection.module.scss";
import classNames from "classnames";
import Block from "components/Structure/Block/Block";
import Subtitle from "components/Texts/Subtitle/Subtitle";
import imageViewerStore from "stores/mobx/imageViewerStore";
import Preloader from "../../Graphics/Preloader/Preloader";
import Text from "components/Texts/Text/Text";
import { useNavigate } from "react-router-dom";

interface IWeaponPhotoCollectionProps {
  title: string;
  collection: string[] | undefined;
  articleId: string;
  fullSize?: boolean;
  className?: string;
}

const WeaponPhotoCollection: React.FC<IWeaponPhotoCollectionProps> = ({
  title,
  collection,
  articleId,
  fullSize = false,
  className,
}) => {
  const navigate = useNavigate();

  const showCollection: string[] | undefined = React.useMemo(() => {
    if (fullSize) return collection;
    else return collection?.slice(0, 5);
  }, [collection, fullSize]);

  if (!collection || !showCollection) return <></>;

  return (
    <Block formatAsSection>
      {!fullSize ? (
        <Subtitle id={title}>{`${title} (${collection?.length})`}</Subtitle>
      ) : (
        <Subtitle id={title}>{`${title}`}</Subtitle>
      )}
      <div className={styles.innerBox}>
        <div
          className={classNames(
            styles.photos,
            fullSize && styles.photos_fullSize
          )}
        >
          {showCollection.map((photo, index) => (
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
        {fullSize || (
          <button
            className={styles.showButton}
            onClick={() => {
              navigate("gallery");
            }}
          >
            <Text className={styles.text} noMargin size="small">
              Показать галерею
            </Text>
          </button>
        )}
      </div>
    </Block>
  );
};

export default WeaponPhotoCollection;
