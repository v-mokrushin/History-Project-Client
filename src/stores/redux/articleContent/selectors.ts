import { RootState } from "./../index";

export const selectArticleContentModule = (state: RootState) =>
  state.articlesContent;

export const selectArticleContentById = (
  state: RootState,
  { articleId }: { [key: string]: string }
) => selectArticleContentModule(state).entities[articleId];

export const selectArticleContentLoadingStatus = (state: RootState) =>
  selectArticleContentModule(state).status;

export const selectIsExistingId = (
  state: RootState,
  { articleId }: { [key: string]: string }
) => selectArticleContentModule(state).existingIds.includes(articleId);
