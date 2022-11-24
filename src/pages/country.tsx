import { useCountry } from "hooks";

export const CountryPage = () => {
  useCountry();

  return <div>Country page</div>;
};
