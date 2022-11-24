import { configureStore } from "@reduxjs/toolkit";

import { countriesPreviewReducer } from "./countries-preview";
import { countryReducer } from "./country";

export const store = configureStore({
  reducer: {
    countriesPreview: countriesPreviewReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
