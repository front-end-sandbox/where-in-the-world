import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryPreviewDTM } from "types";

import { CountriesPreviewState } from "./countries-preview.types";

const initialState: CountriesPreviewState = {
  isLoading: true,
  countries: [],
};

export const countriesPreviewStore = createSlice({
  name: "countries-preview",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCountriesList: (state, action: PayloadAction<CountryPreviewDTM[]>) => {
      state.countries = action.payload;
    },
  },
});

export const countriesPreviewActions = countriesPreviewStore.actions;
export const countriesPreviewReducer = countriesPreviewStore.reducer;
