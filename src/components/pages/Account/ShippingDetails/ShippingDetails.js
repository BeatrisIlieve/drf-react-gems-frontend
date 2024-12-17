import { useEffect, useState } from "react";
import { Button } from "../../../reusable/Button/Button";

import { CountrySelector } from "./CountrySelector/CountrySelector";
import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import styles from "./ShippingDetails.module.scss";

import { FORM_ITEMS } from "./constants/formItems";

export const ShippingDetails = () => {
  const [userData, setUserData] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  useEffect(() => {
    userShippingDetailsService
      .get()
      .then((data) => {
        setUserData(data[0]);
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

  //   const handleBlur = (e) => {
  //     const { name, value } = e.target;

  //     setFormItems((prevFormItems) => ({
  //       ...prevFormItems,
  //       [name]: {
  //         ...prevFormItems[name],
  //         isValid: new RegExp(prevFormItems[name].pattern).test(value),
  //       },
  //     }));
  //   };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await userShippingDetailsService.put(userData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles["shipping-details"]}>
      <CountrySelector />
      <div className="container mt-5">
        <form
          className={styles["form-container__form"]}
          onSubmit={submitHandler}
        >
          <div className="form-floating mb-3">
            <input
              type={"text"}
              className={`form-control ${
                isValid === true
                  ? "is-valid"
                  : isValid === false
                  ? "is-invalid"
                  : ""
              }`.trim()}
              id="first_name"
              name="first_name"
              placeholder="First Name *"
              value={userData.first_name}
              onChange={handleChange}
              //   onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">First Name *</label>
            <div className="invalid-feedback">{errorMessage}</div>
          </div>
          <Button label={"Continue"} color={"black"} buttonType={"submit"} />
        </form>
      </div>
    </section>
  );
};
