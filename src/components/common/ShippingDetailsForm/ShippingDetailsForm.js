import { useEffect, useState } from "react";

import { InputFields } from "./InputFields/InputFields";
import { SelectFields } from "./SelectFields/SelectFields";

import { Button } from "../../reusable/Button/Button";

import styles from "./ShippingDetailsForm.module.scss";

import { useService } from "../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../../../constants/shippingDetailsFormItems";
import { useForm } from "../../../hooks/useForm";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const ShippingDetailsForm = ({ callBackFunction }) => {
  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const [userData, setUserData] = useState({});

  useEffect(() => {
    userShippingDetailsService
      .get(userId)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const { formItems, updateFormItems, submitFunction, changeHandler } =
    useForm({
      initialValues: SHIPPING_DETAILS_FORM_ITEMS,
      userData,
    });

  const submitHandler = async (e) => {
    const isFormValid = submitFunction(e);

    if (!isFormValid) {
      return;
    }

    try {
      await userShippingDetailsService.put(userId, userData);

      if (typeof callBackFunction === "function") {
        callBackFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <form
        className={styles["shipping-details-form"]}
        onSubmit={submitHandler}
      >
        <InputFields
          formItems={formItems}
          userData={userData}
          updateFormItems={updateFormItems}
          updateUserData={updateUserData}
          changeHandler={changeHandler}
        />
        <SelectFields
          userData={userData}
          updateUserData={updateUserData}
          formItems={formItems}
          changeHandler={changeHandler}
          updateFormItems={updateFormItems}
        />
        <div className={styles["shipping-details-form__button"]}>
          <Button label={"Save"} color={"black"} buttonType={"submit"} />
        </div>
      </form>
    </div>
  );
};
