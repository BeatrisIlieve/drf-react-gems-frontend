import React, { useState, useEffect } from "react";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";
import { Select } from "../reusable/Select";

export const CitySelector = ({
  selectedCity,
  updateSelectedCity,
  error,
  setError,
}) => {
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const [cities, setCities] = useState([]);

  useEffect(() => {
    userShippingDetailsService
      .getCities()
      .then((data) => {
        setCities(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Select
      items={cities}
      selectedItem={selectedCity}
      updateSelectedItem={updateSelectedCity}
      label={"City *"}
      errorMessage={"Please select a city."}
      error={error}
      setError={setError}
    />
  );
};
