import React, { useState } from "react";

import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./App.module.css";
import './global.css';



function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null); // Track validation state

  // Handle input changes
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Trigger validation onBlur (when focus is lost from the input field)
  const handleBlur = () => {
    if (inputValue.trim().length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className={styles["app"]}>
    <div className="container mt-5">
      <h1>Form with Floating Labels & Validation onBlur</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${
              isValid === true
                ? "is-valid"
                : isValid === false
                ? "is-invalid"
                : ""
            }`.trim()}
            id="floatingInput"
            placeholder="Enter text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur} // Trigger validation onBlur
          />
          <label htmlFor="floatingInput">Enter at least 3 characters</label>
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            Please enter at least 3 characters.
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default App;
