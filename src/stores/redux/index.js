import React from "react";
import { createStoreHook } from "react-redux";
import { combineReducers } from "redux";
import { articlePreviewsSlice } from "./articlePreviews";
import { configureStore } from "@reduxjs/toolkit";
import { articleContentSlice } from "./articleContent";

const rootReducer = combineReducers({
  articles: articlePreviewsSlice.reducer,
  articleContent: articleContentSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});
