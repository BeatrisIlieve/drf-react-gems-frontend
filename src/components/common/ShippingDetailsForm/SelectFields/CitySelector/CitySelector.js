import React, { useState, useEffect } from "react";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";
import { Select } from "../reusable/Select";

export const CitySelector = ({
  userData,
  updateUserData,
  changeHandler,
  formItems,
  updateFormItems,
}) => {
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const selectedCity = userData.city;
  const selectedCountry = userData.country;

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!selectedCountry) {
      return;
    }

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
      isDisabled={!selectedCountry}
      inputName={"city"}
      changeHandler={changeHandler}
      formItems={formItems}
      updateFormItems={updateFormItems}
      updateUserData={updateUserData}
    />
  );
};
