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

  phoneNumber: {
    type: "text",
    isValid: true,
    id: "phoneNumber",
    name: "phoneNumber",
    placeholder: "Phone Number *",
    userInput: "",
    label: "Phone Number *",
    pattern: "^[0-9]{7,15}$",
    invalidMessage: "The phone number must contain between 7 and 15 digits",
  },

  streetAddress: {
    type: "text",
    isValid: true,
    id: "streetAddress",
    name: "streetAddress",
    placeholder: "Street Address *",
    userInput: "",
    label: "Street Address *",
    pattern: "^([A-Za-z0-9])([A-Za-z0-9s-.,']{6,253})([A-Za-z0-9])$",
    invalidMessage: "Please enter a valid street address",
  },

  apartment: {
    type: "text",
    isValid: true,
    id: "apartment",
    name: "apartment",
    placeholder: "Apartment",
    userInput: "",
    label: "Apartment",
    pattern: "^[A-Za-z0-9]([A-Za-z0-9s-.]{0,6}[A-Za-z0-9])?$",
    invalidMessage: "Please enter a valid apartment",
  },

  postalCode: {
    type: "text",
    isValid: true,
    id: "postalCode",
    name: "postalCode",
    placeholder: "Postal Code *",
    userInput: "",
    label: "Postal Code *",
    pattern: "^[A-Za-z0-9]([A-Za-z0-9s-.]{0,6}[A-Za-z0-9])?$",
    invalidMessage: "Please enter a valid postal code",
  },
};
