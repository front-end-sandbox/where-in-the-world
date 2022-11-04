import { CountryDTM } from "store/services"

export interface CountriesState {
  isLoading: boolean,
  countries: CountryDTM[],
}