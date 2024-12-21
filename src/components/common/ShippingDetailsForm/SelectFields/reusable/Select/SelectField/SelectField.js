export const SelectField = ({
  items,
  selectedItem,
  isDisabled,
  inputName,
  formItems,
  updateUserData,
  updateFormItems,
}) => {
  return (
    <select
      className={`form-select ${
        !formItems[inputName].isValid && !isDisabled ? "is-invalid" : "is-valid"
      }`}
      id="floatingSelect"
      aria-label="Floating label select example"
      value={selectedItem || ""}
      name={formItems[inputName].name}
      onChange={(e) => {
        updateUserData(inputName, e.target.value);
        updateFormItems(inputName, e.target.value);
      }}
      onBlur={(e) => updateFormItems(inputName, e.target.value)}
      disabled={isDisabled}
    >
      <option value="" disabled>
        {items.length === 0 && !isDisabled ? "" : formItems[inputName].label}
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
