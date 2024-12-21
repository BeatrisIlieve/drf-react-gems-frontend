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

      const isFieldValid = new RegExp(field.pattern).test(value || "");

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
