import React, { useState, useEffect } from "react";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";

export const CountrySelector = () => {
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );
  const [countries, setCountries] = useState([]); // List of countries
  const [selectedCountry, setSelectedCountry] = useState(""); // Currently selected country

  useEffect(() => {
    userShippingDetailsService.getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* Country Selection */}
      <label>Country:</label>
      <select
        onChange={(e) => setSelectedCountry(e.target.value)}
        value={selectedCountry}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
