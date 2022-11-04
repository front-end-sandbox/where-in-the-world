import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CountryDTM } from "store/services"

import { CountriesState } from "./countries.types"

const countriesSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    countries: [],
  } as CountriesState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCountries: (state, action: PayloadAction<CountryDTM[]>) => {
      state.countries = action.payload
    },
  }
})

export const { setLoading, setCountries } = countriesSlice.actions

export const countriesReducer = countriesSlice.reducer