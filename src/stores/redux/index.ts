import React from "react";
import { combineReducers } from "redux";
import { articlePreviewsSlice } from "./articlePreviews";
import { configureStore } from "@reduxjs/toolkit";
import { articleContentSlice } from "./articleContent";

const rootReducer = combineReducers({
  articlesPreviews: articlePreviewsSlice.reducer,
  articlesContent: articleContentSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
