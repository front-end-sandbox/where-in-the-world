import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CountryDTM } from "types"

import { CountriesState } from "./countries.types"

const initialState: CountriesState = {
  isLoading: true,
  countries: [],
}

export const countriesStore = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCountries: (state, action: PayloadAction<CountryDTM[]>) => {
      state.countries = action.payload
    },
  }
})

export const countriesActions = countriesStore.actions;
export const countriesReducer = countriesStore.reducer;