export const FORM_ITEMS = {
  password: {
    type: "password",
    isValid: true,
    responseError: false,
    id: "password",
    name: "password",
    placeholder: "Password *",
    label: "Password *",
    pattern: "[^.+$]{8,}",
    invalidMessage: "Password must be at least 8 characters long.",
    responseMessage: "",
  },
};
