import { useState } from "react";
import { useService } from "../../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../../services/userCredentialsService";
import { Form } from "../../../../reusable/Form/Form";
import { InputField } from "../../../../reusable/InputField/InputField";
import { FORM_ITEMS } from "./constants/formItems";
import { useForm } from "../../../../../hooks/useForm";

export const EmailForm = ({
  updateContentIsTransitioningHandler,
  updateEmail,
}) => {
  const [userData, setUserData] = useState({ email: "" });

  const { formItems, updateFormItems, submitFunction } = useForm({
    initialValues: FORM_ITEMS,
    userData,
  });
  const userCredentialsService = useService(userCredentialsServiceFactory);

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await userCredentialsService.emailCheck(userData);

      if ("registered" in result) {
        formItems.email.alreadyRegistered = true;

        const isFormValid = submitFunction(e);

        if (!isFormValid) {
          return;
        }
      } else {
        updateContentIsTransitioningHandler();
        updateEmail(userData.email);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      buttonLabel={"Continue"}
      buttonColor={"black"}
      buttonType={"submit"}
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
