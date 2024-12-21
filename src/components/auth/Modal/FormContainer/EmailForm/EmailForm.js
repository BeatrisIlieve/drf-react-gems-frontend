import { useState } from "react";
import { useService } from "../../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../../services/userCredentialsService";
import { Form } from "../../../../reusable/Form/Form";
import { InputField } from "../../../../reusable/InputField/InputField";
import { FORM_ITEMS } from "./constants/formItems";
import { useForm } from "../../../../../hooks/useForm";
import { XMark } from "../../../../reusable/XMark/XMark";
import { TextContainer } from "../reusable/TextContainer/TextContainer";


export const EmailForm = ({
  updateContentIsTransitioningHandler,
  updateEmail,
  modalCloseHandler,
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

    if (!userData.email) {
      submitFunction(e);

      return;
    }

    try {
      const result = await userCredentialsService.emailCheck(userData);

      if ("registered" in result) {
        formItems.email.alreadyRegistered = true;

        const isFormValid = submitFunction(e);

        if (!isFormValid) {
          return;
        }
      } else {
        updateEmail(userData.email);
        updateContentIsTransitioningHandler(1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <XMark callbackFunction={modalCloseHandler} />
      <TextContainer
        titleContent={"Good Day!"}
        paragraphContent={
          "Fill in your e-mail address to log in or create an account"
        }
      />
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
    </>
  );
};
