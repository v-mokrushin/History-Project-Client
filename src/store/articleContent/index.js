import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../constants";

const initialState = {
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
      const obj = {};
      obj[action.payload.id] = action.payload;

      state.entities = { ...state.entities, ...obj };
      state.ids = Array.from(new Set([...state.ids, action.payload.id]));
      state.status = LOADING_STATUSES.success;
    },
    failedLoading: (state) => {
      state.status = LOADING_STATUSES.failed;
    },
  },
});
