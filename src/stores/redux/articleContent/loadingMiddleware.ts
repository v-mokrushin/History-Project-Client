import { articleContentSlice } from ".";
import { AppDispatch, RootState } from "..";
import { Articles } from "../../../data/articles/articles";
import { selectArticleContentById } from "./selectors";

export const loadArticleContent =
  (articleId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (selectArticleContentById(getState(), { articleId })) return;

    dispatch(articleContentSlice.actions.startLoading());

    setTimeout(() => {
      dispatch(
        articleContentSlice.actions.successLoading(
          Articles.content.entities[articleId]
        )
      );
    }, Math.random() * 800 + 200);
  };
