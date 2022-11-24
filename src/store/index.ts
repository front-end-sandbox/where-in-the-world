import { countriesPreviewSelectors, countriesPreviewActions } from "./countries-preview";

import { countrySelectors, countryActions } from "./country";

export const actions = {
  countriesPreview: countriesPreviewActions,
  country: countryActions,
};

export const selectors = {
  countriesPreview: countriesPreviewSelectors,
  country: countrySelectors,
};

export * from "./store";
