import { articlesSlice } from ".";
import { mock } from "../../data/mock";
import { normolize } from "../../utils/normolize";
import { selectArticlesIds } from "./selectors";

export const loadArticles = (dispatch, getState) => {
  if (selectArticlesIds(getState())?.length > 0) return;

  dispatch(articlesSlice.actions.startLoading());

  setTimeout(() => {
    dispatch(articlesSlice.actions.successLoading(normolize(mock.articles)));
  }, 2000);

  // fetch("http://localhost:3001/api/articles")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     dispatch(articlesSlice.actions.successLoading(normolize(data)));
  //   })
  //   .catch(() => {
  //     dispatch(articlesSlice.actions.failedLoading());
  //   });
};
