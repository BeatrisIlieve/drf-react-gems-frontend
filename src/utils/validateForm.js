export const validateForm = (formItems, userData, callBackFunction) => {
  let isFormValid = true;

  Object.entries(formItems).forEach(([key, field]) => {
    const value = userData[key];

    callBackFunction(key, value);

    const isFieldValid = field.isValid;

    if (!isFieldValid) {
      isFormValid = false;
    }
  });

  return isFormValid;
};
