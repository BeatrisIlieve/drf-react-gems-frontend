import React, { useState, useEffect } from "react";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";
import { Select } from "../reusable/Select";
import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";

export const CitySelector = () => {
  const {
    userData,
    cityError,
    updateCityError,
    updateUserData
  } = useShippingDetailsContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const selectedCity = userData.city;
  const selectedCountry = userData.country;

  const [cities, setCities] = useState([]);

  useEffect(() => {
    userShippingDetailsService
      .getCities(selectedCountry)
      .then((data) => {
        setCities(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedCountry]);



  return (
    <Select
      items={cities}
      selectedItem={selectedCity}
      updateSelectedItem={(value) => updateUserData("city", value)}
      label={"City *"}
      errorMessage={"Please select a city."}
      error={cityError}
      setError={updateCityError}
      isDisabled={!selectedCountry}
    />
  );
};
