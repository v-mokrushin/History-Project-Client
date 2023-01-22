import { createSlice } from "@reduxjs/toolkit";
import { IArticleContent } from "data/articles/interfaces";
import { LOADING_STATUSES } from "../constants";

export interface IArticlesContentState {
  entities: { [key: string]: IArticleContent };
  ids: string[];
  status: LOADING_STATUSES;
}

const initialState: IArticlesContentState = {
  entities: {},
  ids: [],
  status: LOADING_STATUSES.idle,
};

export const articleContentSlice = createSlice({
  name: "articleContentSlice",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LOADING_STATUSES.inProgress;
    },
    successLoading: (state, action) => {
      state.entities[action.payload.id] = action.payload;
      state.ids.push(action.payload.id);
      state.status = LOADING_STATUSES.success;
    },
    failedLoading: (state) => {
      state.status = LOADING_STATUSES.failed;
    },
  },
});
