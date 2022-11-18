export const selectArticleContentModule = (state) => state.articleContent;

export const selectArticleContentById = (state, { articleId }) =>
  selectArticleContentModule(state).entities[articleId];

export const selectArticleContentLoadingStatus = (state) =>
  selectArticleContentModule(state).status;
