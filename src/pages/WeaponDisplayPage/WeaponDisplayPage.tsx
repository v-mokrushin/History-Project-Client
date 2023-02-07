import React from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import IntroImage from "../../components/IntroImage/IntroImage";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import { ANIMATIONS } from "../../constants/animations";
import { WEAPONS } from "../../data/weapons/weapons";
import styles from "./WeaponDisplayPage.module.scss";
import Spec from "../../components/Spec/Spec";
import SpecialLogo from "../../components/SpecialLogo/SpecialLogo";
import { SPECIAL_LOGO_TYPE } from "../../components/SpecialLogo/constants";
import Paragraph from "../../components/Paragraph/Paragraph";
import Block from "../../components/Block/Block";
import ContentList from "../../components/ContentList/ContentList";
import { CONTAINER_TYPES } from "../../components/Container/constants";
import ReadingProgressBar from "../../components/ReadingProgressBar/ReadingProgressBar";
import YTFrame from "../../components/YTFrame/YTFrame";
import Models from "components/Models/Models";
import Recommendations from "components/Recommendations/Recommendations";
import SideSpec from "components/SideSpec/SideSpec";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import loadingStore from "stores/mobx/loadingStore";
import { observer } from "mobx-react";
import { CONTENT_LIST_TYPE } from "components/ContentList/constants";
import imageViewerStore from "stores/mobx/imageViewerStore";
import TextIntro from "components/TextIntro/TextIntro";
import { Scroll } from "utils/scroll";

const WeaponDisplayPage = observer(() => {
  const { weaponId } = useParams();
  const weapon = WEAPONS.getById(weaponId);

  React.useEffect(() => {
    loadingStore.checkLoading(weaponId);
    Scroll.toTopInstantly();

    return () => {
      imageViewerStore.setClose();
    };
  }, [weaponId]);

  if (!weapon)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root)}>
      <>
        {weapon.isReady && <ReadingProgressBar />}
        {weapon.gallery && <IntroImage imageUrl={weapon.gallery.icon} />}
        <ContentWrapper className={ANIMATIONS.fadeIn}>
          <Container type={CONTAINER_TYPES.aside}>
            <ContentList
              type={CONTENT_LIST_TYPE.desktop}
              list={weapon.sections}
              weaponId={weapon.id}
              loadingStatus={loadingStore.getStatus()}
            />
            <Container>
              <Title id="Введение">{weapon.name}</Title>
              {loadingStore.getStatus() ? (
                <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} vertiacalFill />
              ) : (
                <>
                  {weapon.isReady ? (
                    <>
                      <ContentList
                        type={CONTENT_LIST_TYPE.mobile}
                        weaponId={weapon.id}
                        list={weapon.sections}
                        loadingStatus={loadingStore.getStatus()}
                      />
                      <TextIntro weapon={weapon} />
                      {weapon.gallery?.photos && (
                        <>
                          <Block formatAsSection>
                            <Subtitle id="Фотографии">Фотографии</Subtitle>
                            <div className={styles.photos}>
                              {weapon.gallery.photos.map((photo) => (
                                <div className={styles.photoWrapper}>
                                  <img
                                    src={photo}
                                    className={styles.photo}
                                    onClick={() =>
                                      imageViewerStore.setOpen(photo)
                                    }
                                  />
                                  <div
                                    className={styles.preloader}
                                    onClick={(event) => {
                                      // event.stopPropagation();
                                      console.log("click");
                                    }}
                                  ></div>
                                </div>
                              ))}
                            </div>
                          </Block>
                        </>
                      )}
                      <Spec weapon={weapon} />
                      {weapon.article}
                      {weapon.videomaterials && (
                        <YTFrame
                          links={weapon.videomaterials}
                          id={weapon.id!}
                        />
                      )}
                      {weapon.models && <Models models={weapon.models} />}
                      <Block formatAsSection>
                        <Subtitle id="Читайте также">Читайте также</Subtitle>
                        <Recommendations weapon={weapon} />
                      </Block>
                    </>
                  ) : (
                    <SpecialLogo
                      type={SPECIAL_LOGO_TYPE.inDevelopment}
                      vertiacalFill
                    />
                  )}
                </>
              )}
            </Container>
            <SideSpec
              weapon={weapon}
              loadingStatus={loadingStore.getStatus()}
            />
          </Container>
        </ContentWrapper>
      </>
    </div>
  );
});

export default WeaponDisplayPage;
