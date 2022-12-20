import { articlePreviewsSlice } from ".";
import { mock } from "../../../data/mock";
import { normolize } from "../../../utils/normolize";
import { LOADING_STATUSES } from "../constants";
import {
  selectArticlePreviewsIds,
  selectArticlePreviewsLoadingStatus,
} from "./selectors";

export const loadArticlePreviews = (dispatch, getState) => {
  if (
    selectArticlePreviewsLoadingStatus(getState()) === LOADING_STATUSES.success
  )
    return;

  dispatch(articlePreviewsSlice.actions.startLoading());

  setTimeout(() => {
    dispatch(articlePreviewsSlice.actions.successLoading());
  }, Math.random() * 500 + 500);
};

// dispatch(articlePreviewsSlice.actions.successLoading(mock.articlePreviews));
// fetch("http://localhost:3001/api/articles")
//   .then((res) => res.json())
//   .then((data) => {
//     dispatch(articlesSlice.actions.successLoading(normolize(data)));
//   })
//   .catch(() => {
//     dispatch(articlesSlice.actions.failedLoading());
//   });
