import {
  CountryPreviewDTM,
  CountryPreviewContract,
} from "./rest-country.types"

export class RestCountryService {
  private baseURL = "https://restcountries.com/v2"

  public getCountryPreview = (country: CountryPreviewContract): CountryPreviewDTM => ({
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
  })

  public fetchAllCountries = async () => {
    const response = await fetch(`${this.baseURL}/all`)
    if (!response.ok) return
    const countries = await response.json() 
    return countries.map(this.getCountryPreview)
  }
}