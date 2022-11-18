import { articlePreviewsSlice } from ".";
import { mock } from "../../data/mock";
import { normolize } from "../../utils/normolize";
import { selectArticlePreviewsIds } from "./selectors";

export const loadArticlePreviews = (dispatch, getState) => {
  if (selectArticlePreviewsIds(getState())?.length > 0) return;

  dispatch(articlePreviewsSlice.actions.startLoading());

  setTimeout(() => {
    dispatch(articlePreviewsSlice.actions.successLoading(mock.articlePreviews));
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
