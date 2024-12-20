export const validateForm = (formItems, userData) => {
  let isValid = true;

  Object.entries(formItems).forEach(([key, field]) => {
    const value = userData[key];

    const isFieldValid = new RegExp(field.pattern).test(value || "");

    field.isValid = isFieldValid;

    if (!isFieldValid) {
      isValid = false;
    }
  });

  return isValid;
};
