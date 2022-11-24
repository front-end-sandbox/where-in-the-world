import {
  CountryPreviewDTM,
  CountryDTM,
  CountryPreviewContract,
  CountryContract,
} from "types";

export class RestCountryService {
  private baseURL = "https://restcountries.com/v2";

  private getCountryPreview = (country: CountryPreviewContract): CountryPreviewDTM => ({
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
  });

  private getCountry = (country: CountryContract): CountryDTM => ({
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
    nativeName: country.nativeName,
    subRegion: country.subregion,
    topLevelDomain: country.topLevelDomain,
    currencies: country.currencies.map(currency => currency.name),
    languages: country.languages.map(language => language.name),
    borderCountries: country.borders,
  })

  private fetchCountryName = async (countryShortName: string) => {
    const getCountryByNameResponse = await fetch(`${this.baseURL}/alpha/${countryShortName}`);
    if (!getCountryByNameResponse.ok) return countryShortName;
    const getCountryByNameResponseBody = await getCountryByNameResponse.json();
    if (getCountryByNameResponseBody.length !== 1) return countryShortName;

    const countryName: string = getCountryByNameResponseBody[0].name;
    return countryName;
  };

  public fetchAllCountries = async () => {
    const getCountriesResponse = await fetch(`${this.baseURL}/all`);
    if (!getCountriesResponse.ok) return;
    const getCountriesResponseBody = await getCountriesResponse.json();

    return getCountriesResponseBody.map(this.getCountryPreview);
  };

  public fetchSingleCountry = async (countryName?: string) => {
    const getCountryByNameResponse = await fetch(`${this.baseURL}/name/${countryName}?fullText=true`);
    if (!getCountryByNameResponse.ok) return;
    const getCountryByNameResponseBody = await getCountryByNameResponse.json();
    if (getCountryByNameResponseBody.length !== 1) return;

    const country = this.getCountry(getCountryByNameResponseBody[0]);
    
    let borderCountries: string[] = []
    for (const i in country.borderCountries) {
      const countryShortName = country.borderCountries[i];
      const countryName = await this.fetchCountryName(countryShortName)
      borderCountries[i] = countryName;
    }

    return {
      ...country,
      borderCountries,
    }
  };
}
