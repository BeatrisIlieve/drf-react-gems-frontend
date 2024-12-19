import { useEffect, useState } from "react";
import { Button } from "../../../reusable/Button/Button";

import { CountrySelector } from "./CountrySelector/CountrySelector";
import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import styles from "./ShippingDetails.module.scss";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { CitySelector } from "./CitySelector/CitySelector";
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

    setFormItems((prevFormItems) => ({
      ...prevFormItems,
      [name]: {
        ...prevFormItems[name],
        isValid: new RegExp(prevFormItems[name].pattern).test(value),
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

  const validateForm = () => {
    let isValid = true;

    Object.entries(formItems).forEach(([key, field]) => {
      const value = userData[key];

      const isFieldValid = new RegExp(field.pattern).test(value || "");

      field.isValid = isFieldValid;

      if (!isFieldValid) {
        isValid = false;
      }
    });

    return isValid;
  };

  const [countryError, setCountryError] = useState(false);

  const updateCountryError = (value) => {
    setCountryError(value);
  };

  const [cityError, setCityError] = useState(false);

  const updateCityError = (value) => {
    setCityError(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    const countryErrorOccurred = !userData.country;

    if (countryErrorOccurred) {
      setCountryError(true);
    }

    const cityErrorOccurred = !userData.city;

    if (cityErrorOccurred) {
      setCityError(true);
    }

    if (!isFormValid || countryErrorOccurred | cityErrorOccurred) {
      return;
    }

    try {
      await userShippingDetailsService.put(userId, userData);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSelectedCountry = (value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      ["country"]: value,
    }));
  };

  const updateSelectedCity = (value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      ["city"]: value,
    }));
  };

  return (
    <section className={styles["shipping-details"]}>
      <h2 className={styles["shipping-details__title"]}>Shipping Details</h2>
      <div className="container mt-5">
        <form
          className={styles["shipping-details__form"]}
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
              error={countryError}
              setError={updateCountryError}
            />
          </div>
          <div className="form-floating mb-3">
            <CitySelector
              selectedCity={userData.city}
              updateSelectedCity={updateSelectedCity}
              error={cityError}
              setError={updateCityError}
            />
          </div>
          <div className={styles["shipping-details__button"]}>
            <Button label={"Save"} color={"black"} buttonType={"submit"} />
          </div>
        </form>
      </div>
    </section>
  );
};
