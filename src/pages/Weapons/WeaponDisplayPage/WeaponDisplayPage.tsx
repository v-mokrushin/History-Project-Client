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
import commonApplicationStore from "stores/mobx/commonApplicationStore";
import Text from "components/Texts/Text/Text";
import WeaponPhotoCollection from "components/Gallery/WeaponPhotoCollection/WeaponPhotoCollection";
import { accountStore } from "stores/mobx/authorizationStore";

const WeaponDisplayPage = observer(() => {
  const isUserArticlesLoading = commonApplicationStore.isUserArticlesLoading;
  const { weaponId } = useParams();
  const weapon = Weapons.getById(weaponId);

  React.useEffect(() => {
    if (!isUserArticlesLoading) {
      loadingStore.checkLoading(weaponId);
      Scroll.toTopInstantly();
      DocumentTitle.set(weapon?.name || "");
      weaponId && accountStore.addViewsHistory(weaponId);
    }

    return () => {
      imageViewerStore.close();
    };
  }, [weaponId, isUserArticlesLoading]);

  if (isUserArticlesLoading) return <></>;

  if (!weapon || !weaponId || !weapon.id)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound}></WarningPage>;

  return (
    <div className={classNames(styles.root)}>
      <>
        {weapon.isReady && <ReadingProgressBar />}
        {weapon.gallery &&
          (!weapon.isVideoIntro ? (
            <IntroImage
              imageUrl={weapon.gallery.icon}
              className={ANIMATIONS.fadeIn}
            />
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
              loadingStatus={loadingStore.isLoading}
            />
            <Container>
              <div className={styles.header}>
                <Title id="Введение">{weapon.name}</Title>
                {!loadingStore.isLoading &&
                loadingStore.getActualArticleViews() ? (
                  <div className={styles.viewsBox}>
                    <div className={styles.eye}></div>
                    <Text noMargin>{loadingStore.getActualArticleViews()}</Text>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {loadingStore.isLoading ? (
                <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} vertiacalFill />
              ) : (
                <div className={ANIMATIONS.fadeIn}>
                  {weapon.isReady ? (
                    <>
                      <ContentList
                        type={CONTENT_LIST_TYPE.mobile}
                        weaponId={weapon.id}
                        list={weapon.sections}
                        loadingStatus={loadingStore.isLoading}
                      />
                      <TextIntro weapon={weapon} />
                      <WeaponPhotoCollection
                        title="Фотографии"
                        collection={weapon.gallery?.photos}
                        articleId={weapon.id}
                      />
                      <WeaponPhotoCollection
                        title="Схемы"
                        collection={weapon.gallery?.schemes}
                        articleId={weapon.id}
                      />
                      <Spec weapon={weapon} />
                      {weapon.article}
                      {weapon.videomaterials && (
                        <YTFrame links={weapon.videomaterials} id={weapon.id} />
                      )}
                      <Models models={weapon.models} />
                      <Block formatAsSection>
                        <Subtitle id="Читайте также">Читайте также</Subtitle>
                        <Recommendations weapon={weapon} />
                      </Block>
                      <Comments
                        articleId={weaponId}
                        comments={loadingStore.getActualArticleComments()}
                      />
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
            <SideSpec weapon={weapon} loadingStatus={loadingStore.isLoading} />
          </Container>
        </ContentWrapper>
      </>
    </div>
  );
});

export default WeaponDisplayPage;
