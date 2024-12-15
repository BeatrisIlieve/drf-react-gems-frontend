import { useState } from "react";
import { useService } from "../../../../hooks/useService";

import { Form } from "../reusable/Form";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

export const PasswordForm = ({ email, firstName }) => {
  const { updateAuthentication } = useAuthenticationContext();
  const userCredentialsService = useService(userCredentialsServiceFactory);

  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleBlur = () => {
    if (!password) {
      setIsValid(false);
      setErrorMessage("Please create a password.");

      return;
    }

    setIsValid(password.length >= 8);

    if (!isValid) {
      setErrorMessage("Password must be at least 8 characters long.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!password) {
      setIsValid(false);
      setErrorMessage("Please create a password.");

      return;
    }

    setIsValid(password.length >= 8);

    if (!isValid) {
      setErrorMessage("Password must be at least 8 characters long.");

      return;
    }

    try {
      const registerCredentials = {
        email,
        password,
        first_name: firstName,
      };

      await userCredentialsService.register(registerCredentials);

      const loginCredentials = {
        username: email,
        password,
      };

      const loginResult = await userCredentialsService.login(loginCredentials);

      updateAuthentication(loginResult);
    } catch (err) {
      if ("password" in err) {
        setIsValid(false);
        setErrorMessage(err["password"][0]);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Form
      formTitle={"Welcome!"}
      formParagraph={"Create an account."}
      buttonLabel={"Create account"}
      submitHandler={submitHandler}
    >
      <div className="form-floating mb-3">
        <input
          type="password"
          className={`form-control ${
            isValid === true
              ? "is-valid"
              : isValid === false
              ? "is-invalid"
              : ""
          }`.trim()}
          id="password"
          name="password"
          placeholder="Create password *"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Create password *</label>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Form>
  );
};
