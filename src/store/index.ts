import { configureStore } from "@reduxjs/toolkit"

import { countriesReducer, countriesSelectors, countriesActions } from "./countries"

export const actions = {
  countries: countriesActions,
}

export const selectors = {
  countries: countriesSelectors,
}

export const reducers = {
  countries: countriesReducer,
}

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
