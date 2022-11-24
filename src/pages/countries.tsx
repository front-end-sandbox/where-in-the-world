import { useCountries } from "hooks";

export const CountriesPage = () => {
  const { isLoading, countries } = useCountries();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{countries.map((country) => country.name)}</div>;
};
