import { articleContentSlice } from ".";
import { mock } from "../../../data/mock";
import { selectArticleContentById } from "./selectors";

export const loadArticleContent = (articleId) => (dispatch, getState) => {
  if (selectArticleContentById(getState(), { articleId })) return;

  dispatch(articleContentSlice.actions.startLoading());

  setTimeout(() => {
    dispatch(
      articleContentSlice.actions.successLoading(
        mock.articlesContent.entities[articleId]
      )
    );
  }, Math.random() * 800 + 200);
};
