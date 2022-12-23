import React from "react";
import { createStoreHook } from "react-redux";
import { combineReducers } from "redux";
import { articlePreviewsSlice } from "./articlePreviews";
import { configureStore } from "@reduxjs/toolkit";
import { articleContentSlice } from "./articleContent";
import { navigationSlice } from "./navigation";

const rootReducer = combineReducers({
  articles: articlePreviewsSlice.reducer,
  articleContent: articleContentSlice.reducer,
  navigation: navigationSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
