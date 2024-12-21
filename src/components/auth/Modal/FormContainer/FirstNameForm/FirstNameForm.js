import { useState } from "react";
import { Form } from "../../../../reusable/Form/Form";
import { InputField } from "../../../../reusable/InputField/InputField";
import { FORM_ITEMS } from "./constants/formItems";
import { useForm } from "../../../../../hooks/useForm";

export const FirstNameForm = ({
  updateContentIsTransitioningHandler,
  updateFirstName,
}) => {
  const [userData, setUserData] = useState({ firstName: "" });

  const { formItems, updateFormItems, submitFunction } = useForm({
    initialValues: FORM_ITEMS,
    userData,
  });

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const isFormValid = submitFunction(e);

    if (!isFormValid) {
      return;
    } else {
      updateContentIsTransitioningHandler();

      updateFirstName(userData.firstName);
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
