import { useState } from "react";

import { FirstNameForm } from "./FirstNameForm/FirstNameForm";
import { EmailForm } from "./EmailForm/EmailForm";
import { PasswordForm } from "./PasswordForm/PasswordForm";

import styles from "./Auth.module.scss";
export const Auth = () => {
  const movePopup = false;

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

  const displayEmailForm = !emailFilled;

  const displayPasswordForm = emailFilled && firstNameFilled;

  const displayFirstNameForm =
    !emailAlreadyRegistered && emailFilled && !displayPasswordForm;
    
  return (
    <section
      className={`${styles["overlay"]}  ${
        movePopup ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]}  ${
          movePopup ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {displayEmailForm && (
          <EmailForm
            updateEmailFilled={updateEmailFilled}
            updateEmailAlreadyRegistered={updateEmailAlreadyRegistered}
            updateEmail={updateEmail}
          />
        )}
        {displayFirstNameForm && (
          <FirstNameForm
            email={email}
            updateFirstNameFilled={updateFirstNameFilled}
            updateFirstName={updateFirstName}
          />
        )}
        {displayPasswordForm && (
          <PasswordForm email={email} firstName={firstName} />
        )}
      </div>
    </section>
  );
};