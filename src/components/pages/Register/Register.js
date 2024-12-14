import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../services/userCredentialsService";
import { userProfileServiceFactory } from "../../../services/userProfileService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { FORM_ITEMS } from "./constants/formItems";

export const Register = () => {
  const { updateAuthentication } = useAuthenticationContext();
  const userCredentialsService = useService(userCredentialsServiceFactory);
  const userProfileService = useService(userProfileServiceFactory);

  const [formItems, setFormItems] = useState(FORM_ITEMS);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        userInput: value,
      },
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        isValid: new RegExp(prevFormItems[name].pattern).test(value),
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = formItems.email.userInput;
      const password = formItems.password.userInput;

      const registerCredentials = {
        email,
        password,
      };

      await userCredentialsService.register(registerCredentials);

      const firstName = formItems.firstName.userInput;
      const lastName = formItems.lastName.userInput;

      const profileDetails = {
        first_name: firstName,
        last_name: lastName,
      };

      await userProfileService.create(profileDetails);

      const loginCredentials = {
        username: email,
        password,
      };

      const loginResult = await userCredentialsService.login(loginCredentials);
      updateAuthentication(loginResult);
    } catch (err) {
      if ("email" in err) {
        setFormItems((prevFormItems) => ({
          ...prevFormItems,
          ["email"]: {
            ...prevFormItems["email"],
            isValid: false,
            invalidMessage: err["email"],
          },
        }));
      }

      if ("password" in err) {
        setFormItems((prevFormItems) => ({
          ...prevFormItems,
          ["password"]: {
            ...prevFormItems["password"],
            isValid: false,
            invalidMessage:
              "The provided password does not match the required constraints",
          },
        }));
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Account Registration</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(formItems).map(([key, field]) => (
          <div className="form-floating mb-3" key={key}>
            <input
              type={field.type}
              className={`form-control ${
                field.isValid === true
                  ? "is-valid"
                  : field.isValid === false
                  ? "is-invalid"
                  : ""
              }`.trim()}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              value={field.userInput}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">{field.label}</label>
            <div className="invalid-feedback">{field.invalidMessage}</div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
