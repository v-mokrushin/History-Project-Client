import { createSlice } from "@reduxjs/toolkit";
import { IArticlePreview } from "data/articles/interfaces";
import { Articles } from "../../../data/articles/articles";
import { LOADING_STATUSES } from "../constants";

export interface IArticlePreviewsState {
  entities: { [key: string]: IArticlePreview };
  ids: string[];
  status: LOADING_STATUSES;
}

const initialState: IArticlePreviewsState = {
  entities: {},
  ids: [],
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
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.status = LOADING_STATUSES.success;
    },
    failedLoading: (state) => {
      state.status = LOADING_STATUSES.failed;
    },
  },
});
