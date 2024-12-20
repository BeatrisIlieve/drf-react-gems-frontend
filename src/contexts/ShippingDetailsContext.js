import { createContext, useContext } from "react";

import { useService } from "../hooks/useService";
import { userShippingDetailsServiceFactory } from "../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../constants/shippingDetailsFormItems";
import { useAuthenticationContext } from "./AuthenticationContext";
import { validateForm } from "../utils/validateForm";
import { useManageUserData } from "../hooks/useManageUserData";

import { useUpdateFormItems } from "../hooks/useUpdateFormItems";

export const ShippingDetailsContext = createContext();

export const ShippingDetailsProvider = ({ children }) => {
  const { formItems, updateFormItems } = useUpdateFormItems({
    initialValues: SHIPPING_DETAILS_FORM_ITEMS,
  });

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const fetchFunction = userShippingDetailsService.get;

  const { userData, updateUserData } = useManageUserData({ fetchFunction });

  const submitHandler = async (e, childFunction) => {
    e.preventDefault();

    const isFormValid = validateForm(formItems, userData, updateFormItems);

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
