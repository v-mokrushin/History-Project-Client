import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../../../data/articles";
import { LOADING_STATUSES } from "../constants";

const initialState = {
  entities: mock.articlePreviews.entities,
  ids: mock.articlePreviews.ids,
  status: LOADING_STATUSES.idle,
};

export const articlePreviewsSlice = createSlice({
  name: "articlePreviewsSlice",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LOADING_STATUSES.inProgress;
    },
    successLoading: (state, action) => {
      // state.entities = action.payload.entities;
      // state.ids = action.payload.ids;
      state.status = LOADING_STATUSES.success;
    },
    failedLoading: (state) => {
      state.status = LOADING_STATUSES.failed;
    },
  },
});
