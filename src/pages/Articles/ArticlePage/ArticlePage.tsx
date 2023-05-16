import classNames from "classnames";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CONTAINER_TYPES } from "../../../components/Structure/Container/constants";
import Container from "../../../components/Structure/Container/Container";
import ContentWrapper from "../../../components/Structure/ContentWrapper/ContentWrapper";
import IntroImage from "../../../components/Graphics/IntroImage/IntroImage";
import { SPECIAL_LOGO_TYPE } from "../../../components/Graphics/SpecialLogo/constants";
import SpecialLogo from "../../../components/Graphics/SpecialLogo/SpecialLogo";
import { ANIMATIONS } from "../../../constants/animations";
import Title from "../../../components/Texts/Title/Title";
import { loadArticleContent } from "../../../stores/redux/articleContent/loadingMiddleware";
import {
  selectArticleContentById,
  selectArticleContentLoadingStatus,
  selectIsExistingId,
} from "../../../stores/redux/articleContent/selectors";
import { LOADING_STATUSES } from "../../../stores/redux/constants";
import styles from "./ArticlePage.module.scss";
import Text from "../../../components/Texts/Text/Text";
import ReadingProgressBar from "../../../components/Graphics/ReadingProgressBar/ReadingProgressBar";
import WarningPage from "pages/WarningPage/WarningPage";
import { WARNING_PAGE_TYPE } from "pages/WarningPage/constants";
import { Scroll } from "utils/scroll";
import { AppDispatch, RootState } from "stores/redux";
import { Pages } from "constants/pages";
import ArticleInfo from "components/Texts/ArticleInfo/ArticleInfo";

export default function ArticlePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { articleId } = useParams();
  if (!articleId) return <></>;

  const loadingStatus = useSelector(selectArticleContentLoadingStatus);
  const articleContent = useSelector((state) =>
    selectArticleContentById(state as RootState, { articleId })
  );
  const isExistingId = useSelector(selectIsExistingId(articleId));

  React.useEffect(() => {
    Scroll.toTopInstantly();
  }, []);

  React.useEffect(() => {
    articleId && dispatch(loadArticleContent(articleId));
  }, [articleId]);

  function getContent() {
    if (!articleContent) return;

    if (!articleContent.text) {
      return (
        <SpecialLogo type={SPECIAL_LOGO_TYPE.inDevelopment} vertiacalFill />
      );
    }

    return (
      <>
        <Title centered>{articleContent.title}</Title>
        <div className={classNames(styles.innerWrapper, ANIMATIONS.fadeIn)}>
          <ArticleInfo
            author={articleContent.author}
            origin={articleContent.origin}
          />
          {articleContent.text}
        </div>
      </>
    );
  }

  if (!isExistingId)
    return <WarningPage pageType={WARNING_PAGE_TYPE.notFound} />;

  return (
    <>
      <ReadingProgressBar />
      <IntroImage
        imageUrl={
          articleContent
            ? articleContent.backgroundURL
            : Pages.articles.introImage
        }
      />
      <ContentWrapper>
        <Container type={CONTAINER_TYPES.default}>
          <article className={styles.innerWrapper}>
            {loadingStatus === LOADING_STATUSES.inProgress && (
              <SpecialLogo type={SPECIAL_LOGO_TYPE.loading} vertiacalFill />
            )}
            {loadingStatus === LOADING_STATUSES.failed && (
              <span>Загрузка не удалась</span>
            )}
            {loadingStatus === LOADING_STATUSES.success && getContent()}
          </article>
        </Container>
      </ContentWrapper>
    </>
  );
}
