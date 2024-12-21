import { useEffect, useState } from "react";

import { InputField } from "../../reusable/InputField/InputField";
import { SelectField } from "./SelectField/SelectField";

import { useService } from "../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../../../constants/shippingDetailsFormItems";
import { useForm } from "../../../hooks/useForm";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { Form } from "../../reusable/Form/Form";
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

  const { formItems, updateFormItems, submitFunction, changeHandler } = useForm(
    {
      initialValues: SHIPPING_DETAILS_FORM_ITEMS,
      userData,
    }
  );

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
    <>
      <Form
        buttonLabel={"Save"}
        buttonColor={"black"}
        buttonType={"submit"}
        submitHandler={submitHandler}
      >
        <InputField
          formItems={formItems}
          userData={userData}
          updateFormItems={updateFormItems}
          updateUserData={updateUserData}
          changeHandler={changeHandler}
        />
        <SelectField
          userData={userData}
          updateUserData={updateUserData}
          formItems={formItems}
          changeHandler={changeHandler}
          updateFormItems={updateFormItems}
        />
      </Form>
    </>
  );
};
