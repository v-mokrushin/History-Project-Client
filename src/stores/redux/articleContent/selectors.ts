import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../index";

export const selectSelf = (state: RootState) => state.articlesContent;

export const selectArticleContentById = (
  state: RootState,
  { articleId }: { [key: string]: string }
) => selectSelf(state).entities[articleId];

// export const selectArticleContentById = ({
//   articleId,
// }: {
//   [key: string]: string;
// }) => createSelector(selectSelf, (state) => state.entities[articleId]);

export const selectArticleContentLoadingStatus = createSelector(
  selectSelf,
  (state) => state.status
);

export const selectIsExistingId = (articleId: string) =>
  createSelector(selectSelf, (state) => state.existingIds.includes(articleId));
