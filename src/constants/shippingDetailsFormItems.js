export const SHIPPING_DETAILS_FORM_ITEMS = {
  first_name: {
    type: "text",
    isValid: true,
    id: "first_name",
    name: "first_name",
    placeholder: "First Name *",
    label: "First Name *",
    pattern: "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[ -]{1}[A-Za-z]{1,253}$)",
    invalidMessage: "Please enter a valid first name.",
  },

  last_name: {
    type: "text",
    isValid: true,
    id: "last_name",
    name: "last_name",
    placeholder: "Last Name *",
    label: "Last Name *",
    pattern: "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[ -]{1}[A-Za-z]{1,253}$)",
    invalidMessage: "Please enter a valid last name.",
  },

  phone_number: {
    type: "text",
    isValid: true,
    id: "phone_number",
    name: "phone_number",
    placeholder: "Phone Number *",
    userInput: "",
    label: "Phone Number *",
    pattern: "^[0-9]{7,15}$",
    invalidMessage: "Please enter a valid phone number.",
  },

  street_address: {
    type: "text",
    isValid: true,
    id: "street_address",
    name: "street_address",
    placeholder: "Street Address *",
    userInput: "",
    label: "Street Address *",
    pattern: "^([A-Za-z0-9])([A-Za-z0-9 -.,']{6,253})([A-Za-z0-9])$",
    invalidMessage: "Please enter a valid street address.",
  },

  apartment: {
    type: "text",
    isValid: true,
    id: "apartment",
    name: "apartment",
    placeholder: "Apartment",
    userInput: "",
    label: "Apartment",
    pattern: "^[A-Za-z0-9]*([A-Za-z0-9 -.]*[A-Za-z0-9])*$",
    invalidMessage: "Please enter a valid apartment.",
  },

  postal_code: {
    type: "text",
    isValid: true,
    id: "postal_code",
    name: "postal_code",
    placeholder: "Postal Code *",
    userInput: "",
    label: "Postal Code *",
    pattern: "^([A-Za-z0-9]{1,})([A-Za-z0-9 -.,]{0,12})([A-Za-z0-9]{1})$",
    invalidMessage: "Please enter a valid postal code.",
  },

  country: {
    isValid: true,
    name: "country",
    pattern: "[0-9]{1,}",
    invalidMessage: "Please select a country.",
  },

  city: {
    isValid: true,
    name: "city",
    pattern: "[0-9]{1,}",
    invalidMessage: "Please select a city.",
  },
};
