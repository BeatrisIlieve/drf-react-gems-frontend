import { useState } from "react";
import { Form, FormGroup, FloatingLabel } from "react-bootstrap";

import styles from "./Select.module.scss";

export const Select = ({
  items,
  selectedItem,
  updateSelectedItem,
  label,
  errorMessage,
  error,
  setError,
}) => {
  const changeHandler = (event) => {
    const value = event.target.value;

    updateSelectedItem(value);
    if (value) setError(false);
  };

  const validateSelection = () => {
    if (!selectedItem) setError(true);
  };

  return (
    <div className="form-floating mb-3">
      <select
        className={`form-select ${error ? "is-invalid" : "is-valid"}`}
        id="floatingSelect"
        aria-label="Floating label select example"
        value={selectedItem || ""}
        onChange={changeHandler}
        onBlur={validateSelection}
      >
        <option value="" disabled>
          {items.length === 0 ? "" : label}
        </option>

        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="floatingSelect">
        {items.length === 0 ? (
          <span className={styles["loader"]}></span>
        ) : selectedItem ? (
          label
        ) : (
          ""
        )}
      </label>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
};
