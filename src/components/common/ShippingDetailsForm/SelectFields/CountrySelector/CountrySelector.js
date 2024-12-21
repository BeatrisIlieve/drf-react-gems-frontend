import React, { useState, useEffect } from "react";
import { useService } from "../../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../../services/userShippingDetailsService";
import { Select } from "../reusable/Select";

export const CountrySelector = ({
  userData,
  updateUserData,
  changeHandler,
  formItems,
  updateFormItems
}) => {
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );
  const selectedCountry = userData.country;

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
      updateSelectedItem={(value) => updateUserData("country", value)}
      label={"Country *"}
      isDisabled={false}
      inputName={"country"}
      changeHandler={changeHandler}
      formItems={formItems}
      updateFormItems={updateFormItems}
      updateUserData={updateUserData}
    />
  );
};
