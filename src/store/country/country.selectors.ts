import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";

const getCountry = createSelector(
  (state: RootState) => state.country,
  (state) => state.country
);

export const countrySelectors = {
  getCountry,
};
