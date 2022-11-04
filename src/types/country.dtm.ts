import { CountryPreviewDTM } from "./country-preview.dtm"

export interface CountryDTM extends CountryPreviewDTM {
  nativeName: string
  subRegion: string
  topLevelDomain: string[]
  currencies: string[]
  languages: string[]
  borderCountries: string[]
}
