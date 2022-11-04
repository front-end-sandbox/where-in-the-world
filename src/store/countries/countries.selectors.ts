import { RootState } from "store"

export const countriesSelectors = {
  getCountries: (state: RootState) => (state.countries),
}
