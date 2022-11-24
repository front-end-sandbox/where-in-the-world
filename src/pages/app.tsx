import { Navigate, Route, Routes } from "react-router-dom";

import { CountriesPage } from "pages/countries";
import { CountryPage } from "pages/country";

export const App = () => (
  <Routes>
    <Route index element={<Navigate to="countries" />} />
    <Route path="countries" element={<CountriesPage />} />
    <Route path="country/:countryName" element={<CountryPage />} />
  </Routes>
);
