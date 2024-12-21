import { useEffect, useState } from "react";

import { InputFields } from "./InputFields/InputFields";
import { SelectFields } from "./SelectFields/SelectFields";

import { Button } from "../../reusable/Button/Button";
// import { useShippingDetailsContext } from "../../../contexts/ShippingDetailsContext";
import styles from "./ShippingDetailsForm.module.scss";

import { useService } from "../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../services/userShippingDetailsService";
import { SHIPPING_DETAILS_FORM_ITEMS } from "../../../constants/shippingDetailsFormItems";
import { useForm } from "../../../hooks/useForm";
import { useUserData } from "../../../hooks/useUserData";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const ShippingDetailsForm = ({ callBackFunction }) => {
  // const {
  //   submitHandler,
  //   formItems,
  //   userData,
  //   updateFormItems,
  //   updateUserData,
  // } = useShippingDetailsContext();

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  // const fetchFunction = userShippingDetailsService.get;

  // const { userData, updateUserData } = useUserData({ fetchFunction });


  const [userData, setUserData] = useState({});

  useEffect(() => {
    userShippingDetailsService.get(userId)
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


  const { formItems, updateFormItems, hookSubmitHandler, changeHandler,  } = useForm({
    initialValues: SHIPPING_DETAILS_FORM_ITEMS,
    userData
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

  return (
    <div className="container mt-5">
      <form
        className={styles["shipping-details-form"]}
        onSubmit={(e) => submitHandler(e, callBackFunction)}
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
        formItems= {formItems}
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
