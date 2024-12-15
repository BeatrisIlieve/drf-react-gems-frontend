import { useState, useEffect } from "react";
import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";
import { Form } from "../reusable/Form";
import { userCredentialsServiceFactory } from "../../../../services/userCredentialsService";
export const DetailsForm = ({
  email,
  updateFirstNameFilled,
  updateFirstName,
}) => {


  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );
  const [firstName, setFirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;

    setFirstName(value);
  };

  const handleBlur = (e) => {
    const { value } = e.target;

    setIsValid(new RegExp(
        "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)"
      ).test(value));

    if (!isValid) {
      setErrorMessage("Please enter a valid first name.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { value } = e.target;

    try {
      //   const data = { first_name: firstName };

      //   await userShippingDetailsService.create(data);

      //   updateFirstNameFilled(true);
      //   updateFirstName(firstName);
      
      setIsValid(new RegExp(
        "(^[A-Za-z]{1,255}$)|(^[A-Za-z]{1,}[s-]{1}[A-Za-z]{1,253}$)"
      ).test(value));

      if (!isValid) {
        setErrorMessage("Please enter a valid first name.");
      } else {
        updateFirstNameFilled(true);
        updateFirstName(firstName);
      }
    } catch (err) {
      console.log(err);

      //   setIsValid(false);
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
          type="text"
          className={`form-control ${
            isValid === true
              ? "is-valid"
              : isValid === false
              ? "is-invalid"
              : ""
          }`.trim()}
          id="firstName"
          name="firstName"
          placeholder="First Name *"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">First Name *</label>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Form>
  );
};
