import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";

const getCountriesPreview = createSelector(
  (state: RootState) => state.countriesPreview,
  (state) => state,
)

const getCountriesList = createSelector(
  (state: RootState) => state.countriesPreview,
  (state) => state.countries,
);

const getCountriesLoadingStatus = createSelector(
  (state: RootState) => state.countriesPreview,
  (state) => state.isLoading,
)

export const countriesPreviewSelectors = {
  getCountriesPreview,
  getCountriesList,
  getCountriesLoadingStatus,
};
