import React from "react";
import styles from "./WeaponGalleryPage.module.scss";
import classNames from "classnames";
import Container from "components/Structure/Container/Container";
import { CONTAINER_TYPES } from "components/Structure/Container/constants";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";

import Title from "components/Texts/Title/Title";
import { useParams } from "react-router-dom";
import { Weapons } from "data/weapons/weapons";
import WeaponPhotoCollection from "components/Gallery/WeaponPhotoCollection/WeaponPhotoCollection";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import { observer } from "mobx-react-lite";
import { Scroll } from "utils/scroll";
import { ANIMATIONS } from "constants/animations";

interface IWeaponGalleryPageProps {
  className?: string;
}

const WeaponGalleryPage: React.FC<IWeaponGalleryPageProps> = observer(
  ({ className }) => {
    const isUserArticlesLoading = commonApplicationStore.isUserArticlesLoading;
    const { weaponId } = useParams();
    const weapon = Weapons.getById(weaponId);

    React.useEffect(() => {
      Scroll.toTopInstantly();
      return () => {};
    }, []);

    if (isUserArticlesLoading) return <></>;
    if (!weapon || !weaponId || !weapon.id)
      return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

    return (
      <>
        <ContentWrapper containerType={CONTAINER_TYPES.wide}>
          <Container type={CONTAINER_TYPES.wide} className={ANIMATIONS.fadeIn}>
            <Title>{`${weapon.name}`}</Title>
            <WeaponPhotoCollection
              title="Фотографии"
              collection={weapon.gallery?.photos}
              articleId={weapon.id}
              fullSize
            />
            <WeaponPhotoCollection
              title="Схемы"
              collection={weapon.gallery?.schemes}
              articleId={weapon.id}
              fullSize
            />
            <WeaponPhotoCollection
              title="Арты"
              collection={weapon.gallery?.arts}
              articleId={weapon.id}
              fullSize
            />
          </Container>
        </ContentWrapper>
      </>
    );
  }
);

export default WeaponGalleryPage;
