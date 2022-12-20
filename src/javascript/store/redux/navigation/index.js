import { createSlice } from "@reduxjs/toolkit";
import { NAVIGATION_ACTUAL_SECTION } from "../../../../jsx/components/Navigation/constants";

const initialState = {
  actualSection: NAVIGATION_ACTUAL_SECTION.home,
};

export const navigationSlice = createSlice({
  name: "navigationSlice",
  initialState,
  reducers: {
    setActualSection: (state, action) => {
      state.actualSection = action.payload;
    },
  },
});
