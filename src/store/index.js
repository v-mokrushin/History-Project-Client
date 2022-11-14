import React from "react";
import { createStoreHook } from "react-redux";
import { combineReducers } from "redux";
import { articlesSlice } from "./acticles";
import { configureStore } from "@reduxjs/toolkit";
import { audioPlayerSlice } from "./audioPlayer";

const rootReducer = combineReducers({
  articles: articlesSlice.reducer,
  audioPlayer: audioPlayerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
