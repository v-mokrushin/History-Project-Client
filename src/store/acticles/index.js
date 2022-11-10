import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../constants";

const initialState = {
  entities: {},
  ids: [],
  status: LOADING_STATUSES.idle,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = LOADING_STATUSES.inProgress;
    },
    successLoading: (state, action) => {
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.status = LOADING_STATUSES.success;
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = LOADING_STATUSES.failed;
    },
  },
});
