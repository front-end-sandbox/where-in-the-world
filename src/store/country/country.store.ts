import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryDTM } from "types";

import { CountryState } from "./country.types";

const initialState: CountryState = {
  isLoading: true,
};

export const countryStore = createSlice({
  name: "country",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCountry: (state, action: PayloadAction<CountryDTM>) => {
      state.country = action.payload;
    },
  },
});

export const countryActions = countryStore.actions;
export const countryReducer = countryStore.reducer;
