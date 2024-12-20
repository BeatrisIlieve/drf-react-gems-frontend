import { useState } from "react";

export const useUpdateFormItems = ({ initialValues }) => {
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

  return { formItems, updateFormItems };
};
