import { useState, useEffect } from "react";
import { useService } from "../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { Form } from "../reusable/Form";

export const EmailForm = ({
  updateEmailFilled,
  updateEmailAlreadyRegistered,
  updateEmail,
}) => {
  const userCredentialsService = useService(userCredentialsServiceFactory);
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleBlur = () => {
    if (!email) {
      setIsValid(false);
      setErrorMessage("Please enter your email.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email) {
      setIsValid(false);
      setErrorMessage("Please enter your email.");

      return;
    }

    try {
      const data = { email };

      const result = await userCredentialsService.emailCheck(data);

      if ("registered" in result) {
        updateEmailAlreadyRegistered(true);
      }

      updateEmailFilled(true);
      updateEmail(email);
    } catch (err) {
      setErrorMessage(err["email"]);

      setIsValid(false);
    }
  };

  return (
    <Form
      formTitle={"Good day!"}
      formParagraph={
        "Fill in your e-mail address to log in or create an account"
      }
      buttonLabel={"Continue"}
      submitHandler={submitHandler}
    >
      <div className="form-floating mb-3">
        <input
          type="email"
          className={`form-control ${
            isValid === true
              ? "is-valid"
              : isValid === false
              ? "is-invalid"
              : ""
          }`.trim()}
          id="email"
          name="email"
          placeholder="Email *"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Email *</label>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Form>
  );
};
