import { createContext, useContext } from "react";

import { useService } from "../hooks/useService";
import { userShippingDetailsServiceFactory } from "../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../constants/shippingDetailsFormItems";
import { useAuthenticationContext } from "./AuthenticationContext";

import { useUserData } from "../hooks/useUserData";
import { useForm } from "../hooks/useForm";

export const ShippingDetailsContext = createContext();

export const ShippingDetailsProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const fetchFunction = userShippingDetailsService.get;

  const { userData, updateUserData } = useUserData({ fetchFunction });

  const { formItems, updateFormItems, hookSubmitHandler } = useForm({
    initialValues: SHIPPING_DETAILS_FORM_ITEMS,
    userData,
  });

  const submitHandler = async (e, childFunction) => {
    const isFormValid = hookSubmitHandler(e);

    if (!isFormValid) {
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
    submitHandler,
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
