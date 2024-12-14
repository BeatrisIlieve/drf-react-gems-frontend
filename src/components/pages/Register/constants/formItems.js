export const FORM_ITEMS = {
  firstName: {
    type: "text",
    isValid: true,
    id: "firstName",
    name: "firstName",
    placeholder: "First Name *",
    userInput: "",
    label: "First Name *",
    pattern: "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)",
    invalidMessage: "Please enter a valid first name",
  },

  lastName: {
    type: "text",
    isValid: true,
    id: "lastName",
    name: "lastName",
    placeholder: "Last Name *",
    userInput: "",
    label: "Last Name *",
    pattern: "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)",
    invalidMessage: "Please enter a valid last name",
  },

  email: {
    type: "text",
    isValid: true,
    id: "email",
    name: "email",
    placeholder: "Email *",
    userInput: "",
    label: "Email *",
    pattern: "^.+$",
    invalidMessage: "Please enter your email address",
  },

  password: {
    type: "password",
    isValid: true,
    id: "password",
    name: "password",
    placeholder: "Password *",
    userInput: "",
    label: "Password *",
    pattern: "^.+$",
    invalidMessage: "Please enter your password",
    // the provided password does not match the required constraints
  },
};
