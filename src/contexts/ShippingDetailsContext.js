import { createContext, useContext, useEffect, useMemo, useState} from "react";

import { useService } from "../hooks/useService";
import { userShippingDetailsServiceFactory } from "../services/userShippingDetailsService";
import { FORM_ITEMS } from "../constants/formItems";
import { useAuthenticationContext } from "./AuthenticationContext";
export const ShippingDetailsContext = createContext();

export const ShippingDetailsProvider = ({ children }) => {
  const [formItems, setFormItems] = useState(FORM_ITEMS);

  const { userId } = useAuthenticationContext();

  const [userData, setUserData] = useState({});

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  useEffect(() => {
    userShippingDetailsService
      .get(userId)
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userShippingDetailsService]);

  const updateFormItems = (name, value) => {
    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        isValid: new RegExp(prevFormItems[name].pattern).test(value),
      },
    }));
  };

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.entries(formItems).forEach(([key, field]) => {
      const value = userData[key];

      const isFieldValid = new RegExp(field.pattern).test(value || "");

      field.isValid = isFieldValid;

      if (!isFieldValid) {
        isValid = false;
      }
    });

    return isValid;
  };

  const [countryError, setCountryError] = useState(false);

  const updateCountryError = (value) => {
    setCountryError(value);
  };

  const [cityError, setCityError] = useState(false);

  const updateCityError = (value) => {
    setCityError(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    const countryErrorOccurred = !userData.country;

    if (countryErrorOccurred) {
      setCountryError(true);
    }

    const cityErrorOccurred = !userData.city;

    if (cityErrorOccurred) {
      setCityError(true);
    }

    if (!isFormValid || countryErrorOccurred || cityErrorOccurred) {
      return;
    }

    try {
      await userShippingDetailsService.put(userId, userData);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSelectedCountry = (value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      ["country"]: value,
    }));
  };

  const updateSelectedCity = (value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      ["city"]: value,
    }));
  };

  const context = {
    formItems,
    userData,
    updateFormItems,
    updateUserData,
    countryError,
    updateCountryError,
    cityError,
    updateCityError,
    submitHandler,
    updateSelectedCountry,
    updateSelectedCity,
  };

  return (
    <ShippingDetailsContext.Provider value={context}>
      {children}
    </ShippingDetailsContext.Provider>
  );
};

export const useShippingDetailsContext = () => {
  const context = useContext(ShippingDetailsContext);

  return context;
};
