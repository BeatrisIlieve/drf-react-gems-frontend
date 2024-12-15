import { useState, useEffect } from "react";
import { useService } from "../../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { Form } from "../reusable/Form";

export const EmailExists = () => {
  const userCredentialsService = useService(userCredentialsServiceFactory);
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleBlur = (e) => {
    const { value } = e.target;

    setIsValid(value.length > 0);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await userCredentialsService.checkEmailExists(email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      formTitle={"Good day!"}
      formParagraph={
        "Fill in your e-mail address to log in or create an account."
      }
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
          id="email"
          name="email"
          placeholder="Email *"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Email *</label>
        <div className="invalid-feedback">Please enter your email.</div>
      </div>
    </Form>
  );
};
