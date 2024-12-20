export const validateForm = (formItems, userData, callBackFunction) => {
  let isValid = true;

  Object.entries(formItems).forEach(([key, field]) => {
    const value = userData[key];

    callBackFunction(key, value)

    const isFieldValid = field.isValid;

    if (!isFieldValid) {
      isValid = false;
    }
  });

  return isValid;
};
