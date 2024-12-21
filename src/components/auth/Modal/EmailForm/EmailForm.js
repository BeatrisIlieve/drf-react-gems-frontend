import { useState } from "react";
import { useService } from "../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { Form } from "../../../reusable/Form/Form";
import { InputField } from "../../../reusable/InputField/InputField";
import { useForm } from "../../../../hooks/useForm";
import { EMAIL_FORM_ITEMS } from "./constants/emailFormItems";

export const EmailForm = ({ updateContentIsTransitioningHandler }) => {
  const userCredentialsService = useService(userCredentialsServiceFactory);

  const [userData, setUserData] = useState({ email: "" });

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const { formItems, updateFormItems, submitFunction } = useForm({
    initialValues: EMAIL_FORM_ITEMS,
    userData,
  });

  const submitHandler = async (e) => {
    const isFormValid = submitFunction(e);

    if (!isFormValid) {
      return;
    }

    try {
      const data = userData.email;

      const result = await userCredentialsService.emailCheck(data);

      if ("registered" in result) {
        EMAIL_FORM_ITEMS.alreadyRegistered = true;
        return;
      }

      updateContentIsTransitioningHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      buttonLabel={"Continue"}
      buttonColor={"black"}
      buttonType={"button"}
      submitHandler={submitHandler}
    >
      <InputField
        formItems={formItems}
        userData={userData}
        updateFormItems={updateFormItems}
        updateUserData={updateUserData}
      />
    </Form>
  );
};
