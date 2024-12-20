import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { useService } from "../hooks/useService";
import { userShippingDetailsServiceFactory } from "../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../constants/shippingDetailsFormItems";
import { useAuthenticationContext } from "./AuthenticationContext";
import { validateForm } from "../utils/validateForm";
export const ShippingDetailsContext = createContext();

export const ShippingDetailsProvider = ({ children }) => {
  const [formItems, setFormItems] = useState(SHIPPING_DETAILS_FORM_ITEMS);

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

  const [countryError, setCountryError] = useState(false);

  const updateCountryError = (value) => {
    setCountryError(value);
  };

  const [cityError, setCityError] = useState(false);

  const updateCityError = (value) => {
    setCityError(value);
  };

  const executeChildFunction = (childFunction) => {
    if (typeof childFunction === "function") {
      childFunction();
    }
  };

  const submitHandler = async (e, childFunction) => {
    e.preventDefault();

    const isFormValid = validateForm(formItems, userData);

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

      if (typeof childFunction === "function") {
        childFunction();
      }
    } catch (err) {
      console.log(err);
    }
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
    executeChildFunction,
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
