export const selectArticlePreviewsModule = (state) => state.articles;

export const selectArticlePreviewsIds = (state) =>
  selectArticlePreviewsModule(state).ids;

export const selectArticlePreviewsLoadingStatus = (state) =>
  selectArticlePreviewsModule(state).status;

export const selectArticlePreviewById = (state, { articleId }) =>
  selectArticlePreviewsModule(state).entities[articleId];
