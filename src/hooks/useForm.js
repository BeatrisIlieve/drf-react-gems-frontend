import { useState } from "react";

export const useForm = ({ initialValues, userData }) => {
  const [formItems, setFormItems] = useState(initialValues);

  const updateFormItems = (name, value) => {
    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        isValid: new RegExp(prevFormItems[name].pattern).test(value),
      },
    }));
  };

  const submitFunction = (e) => {
    e.preventDefault();

    let isFormValid = true;

    Object.entries(formItems).forEach(([key, field]) => {
      const value = userData[key];

      let isFieldValid;

      if (
        !(key === "email" && field.alreadyRegistered === true) &&
        !(key === "email" && field.responseError === true) &&
        !(key === "password" && field.responseError === true)
      ) {
        isFieldValid = new RegExp(field.pattern).test(value || "");
      } else {
        isFieldValid = false;
      }

      if (!isFieldValid) {
        isFormValid = false;
      }

      setFormItems((prevFormItems) => ({
        ...prevFormItems,
        [key]: {
          ...field,
          isValid: isFieldValid,
        },
      }));
    });

    return isFormValid;
  };

  return { formItems, updateFormItems, submitFunction };
};
