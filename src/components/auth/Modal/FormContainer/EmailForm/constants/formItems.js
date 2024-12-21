export const FORM_ITEMS = {
  email: {
    type: "email",
    isValid: true,
    alreadyRegistered: false,
    id: "email",
    name: "email",
    placeholder: "Email *",
    label: "Email *",
    pattern: "^[A-Za-z0-9]+@+[a-z]+.[a-z]{2,4}$",
    invalidMessage: "Please enter a valid email address.",
    alreadyRegisteredMessage: "This email is already registered.",
  },
};
