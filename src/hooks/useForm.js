import { useState } from "react";

import { useUserData } from "./useUserData";

export const useForm = ({ initialValues, userData }) => {
  const [formItems, setFormItems] = useState(initialValues);

  // const { userData, updateUserData } = useUserData({ fetchFunction });


  const updateFormItems = (name, value) => {
    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        isValid: new RegExp(prevFormItems[name].pattern).test(value),
      },
    }));
  };

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;

  //   updateUserData(name, value);

  //   updateFormItems(name, value);
  // };

  const hookSubmitHandler = (e) => {
    e.preventDefault();

    console.log(userData)

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

  return { formItems, updateFormItems, hookSubmitHandler };
};
