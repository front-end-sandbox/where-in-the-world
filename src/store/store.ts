import { configureStore } from "@reduxjs/toolkit"

import { countriesReducer } from "./slices"

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>