export const FORM_ITEMS = {
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
};
