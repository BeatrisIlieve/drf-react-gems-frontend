import { useState, useEffect } from "react";
import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import { Form } from "../reusable/Form";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

export const PasswordForm = ({ email, firstName }) => {
  const { updateAuthentication } = useAuthenticationContext();
  const userCredentialsService = useService(userCredentialsServiceFactory);
  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleBlur = (e) => {
    const { value } = e.target;

    setIsValid(value.length >= 8);

    if (!isValid) {
      setErrorMessage("Password must be at least 8 characters long.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const registerCredentials = {
        email,
        password,
        first_name: firstName
      };

      await userCredentialsService.register(registerCredentials);


      // const userShippingDetails = {
      //   first_name: firstName,
      // };

      // await userShippingDetailsService.create(userShippingDetails);

      const loginCredentials = {
        username: email,
        password,
      };

      const loginResult = await userCredentialsService.login(loginCredentials);
      updateAuthentication(loginResult);


    } catch (err) {
      if ("password" in err) {
        setErrorMessage(err["password"][0]);
        // setFormItems((prevFormItems) => ({
        //   ...prevFormItems,
        //   ["password"]: {
        //     ...prevFormItems["password"],
        //     isValid: false,
        //     invalidMessage: err["password"][0],
        //   },
        // }));
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
