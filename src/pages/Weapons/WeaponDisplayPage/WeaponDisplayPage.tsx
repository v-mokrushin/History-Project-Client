import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Container from "../../../components/Structure/Container/Container";
import ContentWrapper from "../../../components/Structure/ContentWrapper/ContentWrapper";
import IntroImage from "../../../components/Graphics/IntroImage/IntroImage";
import Subtitle from "../../../components/Texts/Subtitle/Subtitle";
import Title from "../../../components/Texts/Title/Title";
import { ANIMATIONS } from "../../../constants/animations";
import { Weapons } from "../../../data/weapons/weapons";
import styles from "./WeaponDisplayPage.module.scss";
import Spec from "../../../components/Specifications/Spec/Spec";
import SpecialLogo from "../../../components/Graphics/SpecialLogo/SpecialLogo";
import { SPECIAL_LOGO_TYPE } from "../../../components/Graphics/SpecialLogo/constants";
import Paragraph from "../../../components/Texts/Paragraph/Paragraph";
import Block from "../../../components/Structure/Block/Block";
import ContentList from "../../../components/Structure/ContentList/ContentList";
import { CONTAINER_TYPES } from "../../../components/Structure/Container/constants";
import ReadingProgressBar from "../../../components/Graphics/ReadingProgressBar/ReadingProgressBar";
import YTFrame from "../../../components/Structure/YTFrame/YTFrame";
import Models from "components/Structure/Models/Models";
import Recommendations from "components/Structure/Recommendations/Recommendations";
import SideSpec from "components/Specifications/SideSpec/SideSpec";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import loadingStore from "stores/mobx/loadingStore";
import { observer } from "mobx-react";
import { CONTENT_LIST_TYPE } from "components/Structure/ContentList/constants";
import imageViewerStore from "stores/mobx/imageViewerStore";
import TextIntro from "components/Texts/TextIntro/TextIntro";
import { Scroll } from "utils/scroll";
import Preloader from "components/Graphics/Preloader/Preloader";
import VideoIntro from "components/Graphics/VideoIntro/VideoIntro";
import { DocumentTitle } from "utils/document-title";
import Comments from "components/Structure/Comments/Comments";
import { CommentsTemplate } from "testing-templates/comments";

const WeaponDisplayPage = observer(() => {
  const { weaponId } = useParams();
  const weapon = Weapons.getById(weaponId);

  React.useEffect(() => {
    loadingStore.checkLoading(weaponId);
    Scroll.toTopInstantly();
    DocumentTitle.set(weapon?.name || "");

    return () => {
      imageViewerStore.close();
    };
  }, [weaponId]);

  if (!weapon)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root)}>
      <>
        {weapon.isReady && <ReadingProgressBar />}
        {weapon.gallery &&
          (!weapon.isVideoIntro ? (
            <IntroImage imageUrl={weapon.gallery.icon} />
          ) : (
            <VideoIntro
              path={weapon.gallery?.intro}
              poster={weapon.gallery.icon}
              size="half"
            />
          ))}
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
                <div className={ANIMATIONS.fadeIn}>
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
                              {weapon.gallery.photos.map((photo, index) => (
                                <div
                                  key={`photo-${weapon.id}-${index}`}
                                  className={styles.photoWrapper}
                                >
                                  <img
                                    src={photo}
                                    className={styles.photo}
                                    onClick={() =>
                                      imageViewerStore.openPhotoCollection(
                                        weapon.gallery!.photos!,
                                        index
                                      )
                                    }
                                  />
                                  <Preloader color="black" />
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
                      {/* <Comments comments={CommentsTemplate} /> */}
                    </>
                  ) : (
                    <SpecialLogo
                      type={SPECIAL_LOGO_TYPE.inDevelopment}
                      vertiacalFill
                    />
                  )}
                </div>
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
