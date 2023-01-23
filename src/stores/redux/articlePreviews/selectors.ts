import { RootState } from "./../index";
import { IArticlePreviewsState } from "./index";

export const selectArticlePreviewsModule = (state: RootState) =>
  state.articlesPreviews;

export const selectArticlePreviewsIds = (state: RootState) =>
  selectArticlePreviewsModule(state).ids;

export const selectArticlePreviewsLoadingStatus = (state: RootState) =>
  selectArticlePreviewsModule(state).status;

export const selectArticlePreviewById = (
  state: RootState,
  { articleId }: { [key: string]: string }
) => selectArticlePreviewsModule(state).entities[articleId];
