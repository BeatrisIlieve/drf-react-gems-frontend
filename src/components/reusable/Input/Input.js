export const Input = ({
  userData,
  updateUserData,
  updateFormItems,
  field,
  fieldKey,
}) => {
  return (
    <input
      type={field.type}
      className={`form-control ${
        field.isValid === true
          ? "is-valid"
          : field.isValid === false
          ? "is-invalid"
          : ""
      }`.trim()}
      id={field.id}
      name={field.name}
      placeholder={field.placeholder}
      value={userData[fieldKey] || ""}
      onChange={(e) => {
        updateUserData(fieldKey, e.target.value);
        updateFormItems(fieldKey, e.target.value);
      }}
      onBlur={(e) => updateFormItems(fieldKey, e.target.value)}
    />
  );
};
