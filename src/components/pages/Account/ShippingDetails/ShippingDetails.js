import { useEffect, useState } from "react";
import { Button } from "../../../reusable/Button/Button";

import { CountrySelector } from "./CountrySelector/CountrySelector";
import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import styles from "./ShippingDetails.module.scss";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { FORM_ITEMS } from "./constants/formItems";

export const ShippingDetails = () => {
  const [formItems, setFormItems] = useState(FORM_ITEMS);
  const { userId } = useAuthenticationContext();

  const [userData, setUserData] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  useEffect(() => {
    userShippingDetailsService
      .get(userId)
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userShippingDetailsService]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
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

  const validateForm = () => {
    let isValid = true;

    Object.entries(formItems).forEach(([key, field]) => {
      console.log(key, field, "here");
      const value = userData[key];

      // Validate using the regex pattern from the field
      const isFieldValid = new RegExp(field.pattern).test(value);

      // Store whether the field is valid or invalid
      field.isValid = isFieldValid;

      // If any field is invalid, set isValid to false
      if (!isFieldValid) {
        isValid = false;
      }
    });

    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    try {
      await userShippingDetailsService.put(userId, userData);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSelectedCountry = (value) => {
    // setSelectedCountry(value);

    setUserData((prevFormItems) => ({
      ...prevFormItems,
      ["country"]: value,
    }));
  };

  return (
    <section className={styles["shipping-details"]}>
      <div className="container mt-5">
        <form
          className={styles["form-container__form"]}
          onSubmit={submitHandler}
        >
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
                value={userData[key] || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="floatingInput">{field.label}</label>
              <div className="invalid-feedback">{field.invalidMessage}</div>
            </div>
          ))}
          <div className="form-floating mb-3">
            <CountrySelector
              selectedCountry={userData.country}
              updateSelectedCountry={updateSelectedCountry}
            />
          </div>
          <Button label={"Continue"} color={"black"} buttonType={"submit"} />
        </form>
      </div>
    </section>
  );
};
