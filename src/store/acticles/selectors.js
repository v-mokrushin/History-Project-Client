export const selectArticlesModule = (state) => state.articles;

export const selectArticlesIds = (state) => selectArticlesModule(state).ids;

export const selectArticlesLoadingStatus = (state) =>
  selectArticlesModule(state).status;

export const selectArticleById = (state, { id }) =>
  selectArticlesModule(state).entities[id];