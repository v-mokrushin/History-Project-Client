import { navigationSlice } from ".";
import { NAVIGATION_ACTUAL_SECTION } from "../../components/Navigation/constants";

const changeActualSection = (actualSection) => (dispatch) => {
  dispatch(navigationSlice.actions.setActualSection(actualSection));
};

const setHomeActualSection = () => (dispatch) => {
  dispatch(
    navigationSlice.actions.setActualSection(NAVIGATION_ACTUAL_SECTION.home)
  );
};

const setArticlesActualSection = () => (dispatch) => {
  dispatch(
    navigationSlice.actions.setActualSection(NAVIGATION_ACTUAL_SECTION.articles)
  );
};

const setWeaponsActualSection = () => (dispatch) => {
  dispatch(
    navigationSlice.actions.setActualSection(NAVIGATION_ACTUAL_SECTION.weapons)
  );
};

const setBattlesActualSection = () => (dispatch) => {
  dispatch(
    navigationSlice.actions.setActualSection(NAVIGATION_ACTUAL_SECTION.battles)
  );
};

export const navigationMiddlewares = {
  changeActualSection,
  setHomeActualSection,
  setArticlesActualSection,
  setWeaponsActualSection,
  setBattlesActualSection,
};
