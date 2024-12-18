import React, { useState, useEffect } from "react";

import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";
import { Select } from "../reusable/Select";
export const CountrySelector = ({ selectedCountry, updateSelectedCountry }) => {
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    userShippingDetailsService
      .getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Select
      items={countries}
      selectedItem={selectedCountry}
      updateSelectedItem={updateSelectedCountry}
    />
  );
};
