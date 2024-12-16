import { useState } from "react";
import { useService } from "../../../../hooks/useService";

import { Form } from "../reusable/Form";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import styles from "./PasswordForm.module.scss";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <Form
      formTitle={"Create an account"}
      formParagraph={"Choose a secure password to protect your treasure"}
      buttonLabel={"Create account"}
      submitHandler={submitHandler}
    >
      <div className="form-floating mb-3">
        <input
          type={showPassword ? "text" : "password"}
          className={`form-control ${
            isValid === true
              ? "is-valid"
              : isValid === false
              ? "is-invalid"
              : ""
          }`.trim()}
          id="password"
          name="password"
          placeholder="Password *"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Password *</label>
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className={styles["icon"]}
          onClick={toggleShowPassword}
        />
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Form>
  );
};
