import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../services/userCredentialsService";
import { userProfileServiceFactory } from "../../../services/userProfileService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { Button } from "../../reusable/Button/Button"

import { FORM_ITEMS } from "./constants/formItems";

import styles from "./Register.module.scss";

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
            invalidMessage: err["password"][0],
          },
        }));
      } else {
        console.log(err);
      }
    }
  };

  return (
    <section className={styles["register"]}>
            <div className={styles["register__form-container"]}>
        <h1 className={styles["register__title"]}>Become a Member</h1>
        <div className="container mt-5">
          <form className={styles["register__form"]} onSubmit={handleSubmit}>
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
            <Button label={"Sign Up"} color={"black"}/>
          </form>
        </div>
        <div className={styles["register__sign-in"]}>
          <span>Already a member?</span>
          <span className={styles["register__button"]}>Sign In</span>
        </div>
      </div>
      <div className={styles["register__thumbnail"]}>
        <img
          className={styles["register__image"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1715634166/template_images/herolarged_ny24_plp-2_bs_necklace_jrpvsh.avif"
          alt=""
        />
      </div>
    </section>
  );
};
