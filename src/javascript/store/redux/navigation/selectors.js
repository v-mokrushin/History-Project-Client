import { NAVIGATION_ACTUAL_SECTION } from "../../../../jsx/components/Navigation/constants";

const selectNavigationModule = (state) => state.navigation;
const selectActualSection = (state) =>
  navigationSelectors.selectNavigationModule(state).actualSection;

const isActualHome = (state) =>
  selectActualSection(state) === NAVIGATION_ACTUAL_SECTION.home;

const isActualArticles = (state) =>
  selectActualSection(state) === NAVIGATION_ACTUAL_SECTION.articles;

const isActualWeapons = (state) =>
  selectActualSection(state) === NAVIGATION_ACTUAL_SECTION.weapons;

const isActualBattles = (state) =>
  selectActualSection(state) === NAVIGATION_ACTUAL_SECTION.battles;

export const navigationSelectors = {
  selectNavigationModule,
  selectActualSection,
  isActualHome,
  isActualArticles,
  isActualWeapons,
  isActualBattles,
};
