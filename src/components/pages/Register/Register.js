import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../services/userCredentialsService";
import { userProfileServiceFactory } from "../../../services/userProfileService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { EmailForm } from "./EmailForm/EmailForm";
import { DetailsForm } from "./DetailsForm/DetailsForm";
import { PasswordForm } from "./PasswordForm/PasswordForm";

import styles from "./Register.module.scss";

export const Register = () => {
  const [emailFilled, setEmailFilled] = useState(false);

  const updateEmailFilled = (value) => {
    setEmailFilled(value);
  };

  const [email, setEmail] = useState(null);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState(false);

  const updateEmailAlreadyRegistered = (value) => {
    setEmailAlreadyRegistered(value);
  };

  const [firstNameFilled, setFirstNameFilled] = useState(false);

  const updateFirstNameFilled = (value) => {
    setFirstNameFilled(value);
  };

  const [firstName, setFirstName] = useState(null);

  const updateFirstName = (value) => {
    setFirstName(value);
  };

  const [passwordFilled, setPasswordFilled] = useState(false);

  const updatePasswordFilled = (value) => {
    setPasswordFilled(value);
  };

  const displayEmailForm = !emailFilled;

  const displayPasswordForm = emailFilled && firstNameFilled;

  const displayDetailsForm =
    !emailAlreadyRegistered && emailFilled && !displayPasswordForm;

  let imgUrl;

  if (displayEmailForm) {
    imgUrl =
      "https://res.cloudinary.com/deztgvefu/image/upload/v1715634166/template_images/herolarged_ny24_plp-2_bs_necklace_jrpvsh.avif";
  } else if (displayDetailsForm) {
    imgUrl =
      "https://res.cloudinary.com/deztgvefu/image/upload/v1715602900/template_images/herolarged_ny24_plp_718_necklace_blue_g0wqz9.jpg";
  } else {
    imgUrl =
      "https://res.cloudinary.com/deztgvefu/image/upload/v1715634191/template_images/herolarged_ny24_plp_cl_earrings_qswzmg.avif";
  }

  return (
    <section className={styles["register"]}>
      {displayEmailForm && (
        <EmailForm
          updateEmailFilled={updateEmailFilled}
          updateEmailAlreadyRegistered={updateEmailAlreadyRegistered}
          updateEmail={updateEmail}
        />
      )}
      {displayDetailsForm && (
        <DetailsForm
          email={email}
          updateFirstNameFilled={updateFirstNameFilled}
          updateFirstName={updateFirstName}
        />
      )}
      {displayPasswordForm && (
        <PasswordForm email={email} firstName={firstName} />
      )}
      <div className={styles["register__thumbnail"]}>
        <img className={styles["register__image"]} src={imgUrl} alt="" />
      </div>
    </section>
  );
};
