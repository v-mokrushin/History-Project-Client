import { navigationSlice } from ".";

export const changeActualSection = (actualSection) => (dispatch, getState) => {
  dispatch(navigationSlice.actions.setActualSection(actualSection));
};
