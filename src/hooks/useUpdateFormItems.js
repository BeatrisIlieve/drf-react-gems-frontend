import { useState } from "react";

export const useUpdateFormItems = ({ initialValues, userData }) => {
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

  const hookSubmitHandler = (e) => {
    e.preventDefault();
    let isFormValid = true;


    Object.entries(formItems).forEach(([key, field]) => {
      const value = userData[key];

      updateFormItems(key, value);

      const isFieldValid = field.isValid;

      if (isFieldValid === false) {
        console.log("invalid field")
        isFormValid = false;
      }
    });
    return isFormValid;
  };

  return { formItems, updateFormItems, hookSubmitHandler };
};
