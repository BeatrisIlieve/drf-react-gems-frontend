import { useState, useEffect } from "react";
import { useService } from "../../../hooks/useService";
import { userCredentialsServiceFactory } from "../../../services/userCredentialsService";
import { userProfileServiceFactory } from "../../../services/userProfileService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { EmailForm } from "./EmailForm/EmailForm";
import { DetailsForm } from "./DetailsForm/DetailsForm";


import styles from "./Register.module.scss";

export const Register = () => {
  const [emailFilled, setEmailFilled] = useState(false);

  const updateEmailFilled = (value) => {
    setEmailFilled(value);
  };

  const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState(false);

  const updateEmailAlreadyRegistered = (value) => {
    setEmailAlreadyRegistered(value);
  };

  const [detailsFilled, setDetailsFilled] = useState(false);

  const updateDetailsFilled = (value) => {
    setDetailsFilled(value);
  };

  const [passwordFilled, setPasswordFilled] = useState(false);

  const updatePasswordFilled = (value) => {
    setPasswordFilled(value);
  };

  const displayDetailsForm = !emailAlreadyRegistered && emailFilled;

  return (
    <section className={styles["register"]}>
      <EmailForm
        updateEmailFilled={updateEmailFilled}
        updateEmailAlreadyRegistered={updateEmailAlreadyRegistered}
      />
      {displayDetailsForm && <DetailsForm email={email} />}
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
