import styles from "./Select.module.scss";

export const Select = ({
  items,
  selectedItem,
  label,
  isDisabled,
  inputName,
  formItems,
  updateFormItems,
  updateUserData,
}) => {
  return (
    <div className="form-floating mb-3">
      <select
        className={`form-select ${
          !formItems[inputName].isValid && !isDisabled
            ? "is-invalid"
            : "is-valid"
        }`}
        id="floatingSelect"
        aria-label="Floating label select example"
        value={selectedItem || ""}
        name={inputName}
        onChange={(e) => {
          updateUserData(inputName, e.target.value);
          updateFormItems(inputName, e.target.value);
        }}
        onBlur={(e) => updateFormItems(inputName, e.target.value)}
        disabled={isDisabled}
      >
        <option value="" disabled>
          {items.length === 0 && !isDisabled ? "" : label}
        </option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="floatingSelect">
        {items.length === 0 && !isDisabled ? (
          <span className={styles["loader"]}></span>
        ) : selectedItem ? (
          label
        ) : (
          ""
        )}
      </label>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">
        {formItems[inputName].invalidMessage}
      </div>
    </div>
  );
};
