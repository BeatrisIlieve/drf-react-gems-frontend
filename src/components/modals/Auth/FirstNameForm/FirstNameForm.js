import { useState } from "react";
import { Form } from "../reusable/Form";

export const FirstNameForm = ({ updateFirstNameFilled, updateFirstName }) => {
  const [firstName, setFirstName] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setFirstName(value);
  };

  const handleBlur = () => {
    if (!firstName) {
      setIsValid(false);
      setErrorMessage("Please enter you first name.");

      return
    }

    setIsValid(
      new RegExp(
        "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)"
      ).test(firstName)
    );

    if (!isValid) {
      setErrorMessage("Please enter a valid first name.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!firstName) {
      setIsValid(false);
      setErrorMessage("Please enter you first name.");

      return;
    }

    setIsValid(
      new RegExp(
        "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)"
      ).test(firstName)
    );

    if (!isValid) {
      setErrorMessage("Please enter a valid first name.");

      return;
    }

    updateFirstNameFilled(true);
    updateFirstName(firstName);
  };

  return (
    <Form
      formTitle={"Welcome!"}
      formParagraph={"Share your name to help us tailor a personalized shopping experience for you"}
      buttonLabel={"Continue"}
      submitHandler={submitHandler}
    >
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
          id="firstName"
          name="firstName"
          placeholder="First Name *"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">First Name *</label>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Form>
  );
};
