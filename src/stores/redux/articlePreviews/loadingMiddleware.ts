import { Articles } from "data/articles/articles";
import { Random } from "utils/random";
import { articlePreviewsSlice } from ".";
import { AppDispatch, RootState } from "..";
import { LOADING_STATUSES } from "../constants";
import { selectArticlePreviewsLoadingStatus } from "./selectors";

export const loadArticlePreviews = (
  dispatch: AppDispatch,
  getState: () => RootState
): void => {
  if (
    selectArticlePreviewsLoadingStatus(getState()) === LOADING_STATUSES.success
  )
    return;

  dispatch(articlePreviewsSlice.actions.startLoading());

  setTimeout(() => {
    dispatch(articlePreviewsSlice.actions.successLoading(Articles.previews));
  }, Random.getInteger(500, 1000));
};
