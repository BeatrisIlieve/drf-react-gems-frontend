import styles from "./Select.module.scss";
import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";

export const Select = ({
  items,
  selectedItem,
  label,
  isDisabled,
  inputName,
}) => {
  const { formItems, updateFormItems, updateUserData } =
    useShippingDetailsContext();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    updateUserData(name, value);

    updateFormItems(name, value);
  };

  return (
    <div className="form-floating mb-3">
      <select
        className={`form-select ${
          !formItems[inputName].isValid &&
          !isDisabled &&
          !formItems.country.isValid
            ? "is-invalid"
            : "is-valid"
        }`}
        id="floatingSelect"
        aria-label="Floating label select example"
        value={selectedItem || ""}
        name={inputName}
        onChange={changeHandler}
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
