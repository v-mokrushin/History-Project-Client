import { articleContentSlice } from ".";
import { articles } from "../../../data/articles";
import { selectArticleContentById } from "./selectors";

export const loadArticleContent =
  (articleId: string) => (dispatch: Function, getState: Function) => {
    if (selectArticleContentById(getState(), { articleId })) return;

    dispatch(articleContentSlice.actions.startLoading());

    setTimeout(() => {
      dispatch(
        articleContentSlice.actions.successLoading(
          articles.articlesContent.entities[articleId]
        )
      );
    }, Math.random() * 800 + 200);
  };
