import { useState } from "react";
import { useService } from "../../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../../services/userCredentialsService";
import { Form } from "../../../../reusable/Form/Form";
import { InputField } from "../../../../reusable/InputField/InputField";
import { FORM_ITEMS } from "./constants/formItems";
import { useForm } from "../../../../../hooks/useForm";
import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

export const PasswordForm = ({
  updateContentIsTransitioningHandler,
  email,
  firstName,
}) => {
  const { updateAuthentication } = useAuthenticationContext();

  const [userData, setUserData] = useState({ password: "" });

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
    const isFormValid = submitFunction(e);

    if (!isFormValid) {
      return;
    }

    try {
      const registerCredentials = {
        email,
        password: userData.password,
        first_name: firstName,
      };

      await userCredentialsService.register(registerCredentials);

      const loginCredentials = {
        username: email,
        password: userData.password,
      };

      const loginResult = await userCredentialsService.login(loginCredentials);

      updateAuthentication(loginResult);

      updateContentIsTransitioningHandler();
    } catch (err) {
      if ("password" in err) {
        setIsValid(false);
        setErrorMessage(err["password"][0]);
      } else {
        console.log(err);
      }
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
