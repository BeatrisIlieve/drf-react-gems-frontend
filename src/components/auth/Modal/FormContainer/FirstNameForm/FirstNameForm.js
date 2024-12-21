import { useState } from "react";
import { Form } from "../../../../reusable/Form/Form";
import { InputField } from "../../../../reusable/InputField/InputField";
import { FORM_ITEMS } from "./constants/formItems";
import { useForm } from "../../../../../hooks/useForm";
import {IconsContainer} from "../reusable/IconsContainer/IconsContainer";
import { TextContainer } from "../reusable/TextContainer/TextContainer";

export const FirstNameForm = ({
  updateContentIsTransitioningHandler,
  modalCloseHandler,
  updateFirstName,
}) => {
  const [userData, setUserData] = useState({ first_name: "" });

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
      updateFirstName(userData.first_name);

      updateContentIsTransitioningHandler(1);
    }
  };

  return (
    <>
      <IconsContainer
        modalCloseHandler={modalCloseHandler}
        updateContentIsTransitioningHandler={
          updateContentIsTransitioningHandler
        }
      />
      <TextContainer
        titleContent={"Welcome!"}
        paragraphContent={
          "Share your name to help us tailor a personalized shopping experience"
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
