export const AUTH_FORM_ITEMS = {
  email: {
    type: "email",
    isValid: true,
    alreadyRegistered: false,
    id: "email",
    name: "email",
    placeholder: "Email *",
    label: "Email *",
    pattern: "/^[A-Za-z0-9]+@+[a-z]+.[a-z]{2,4}$/",
    invalidMessage: "Please enter a valid email address.",
    alreadyRegisteredMessage: "This email is already registered."
  },

  first_name: {
    type: "text",
    isValid: true,
    id: "first_name",
    name: "first_name",
    placeholder: "First Name *",
    label: "First Name *",
    pattern: "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)",
    invalidMessage: "Please enter a valid first name.",
  },

  password: {
    type: "password",
    isValid: true,
    id: "password",
    name: "password",
    placeholder: "Password *",
    label: "Password *",
    pattern: "[^.+$]{8,}",
    invalidMessage: "Password must be at least 8 characters long.",
  },
};
