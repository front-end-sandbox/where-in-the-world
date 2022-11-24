import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectors, actions } from "store";

import services from "services";

export const useCountry = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    services.restCountries.fetchSingleCountry(countryName).then(console.log);
  }, []);
};
