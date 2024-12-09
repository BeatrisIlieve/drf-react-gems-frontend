import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../services/userCredentialsService";
import { userProfileServiceFactory } from "../../../services/userProfileService";
import {  useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Register = () => {
  const {updateAuthentication} = useAuthenticationContext();
  const userCredentialsService = useService(userCredentialsServiceFactory);
  const userProfileService = useService(userProfileServiceFactory);

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    // setInputValue(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = () => {
    if (inputValue.trim().length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password, first_name, last_name } = formData;

      const registerCredentials = {
        email,
        password,
      };

      const result = await userCredentialsService.register(registerCredentials);
      // const userId = result.user_id;

      const loginCredentials = {
        username: email,
        password,
      };

      const loginResult = await userCredentialsService.login(loginCredentials);
      updateAuthentication(loginResult);

      const profileDetails = {
        first_name,
        last_name,
        // user_id: userId,
      };

      await userProfileService.create(profileDetails);
    } catch (err) {
      if ("email" in err) console.log(err["email"]);
      else {
        console.log(err);
        // console.log(err["password"]);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
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
            id="first_name"
            name="first_name"
            placeholder="Enter your first name"
            value={formData.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Enter your first name</label>
          {/* <div className="valid-feedback">Looks good!</div> */}
          <div className="invalid-feedback">
            Please enter at least 3 characters.
          </div>
        </div>
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
            id="last_name"
            name="last_name"
            placeholder="Enter your last name"
            value={formData.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Enter your last name</label>
          {/* <div className="valid-feedback">Looks good!</div> */}
          <div className="invalid-feedback">
            Please enter at least 3 characters.
          </div>
        </div>
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
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Enter your email</label>
          {/* <div className="valid-feedback">Looks good!</div> */}
          <div className="invalid-feedback">
            Please enter at least 3 characters.
          </div>
        </div>
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
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Enter your password</label>
          {/* <div className="valid-feedback">Looks good!</div> */}
          <div className="invalid-feedback">
            Please enter at least 3 characters.
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
