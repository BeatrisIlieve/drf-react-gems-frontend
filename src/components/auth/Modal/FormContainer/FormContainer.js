import { useState } from "react";

import { EmailForm } from "./EmailForm/EmailForm";
import { FirstNameForm } from "./FirstNameForm/FirstNameForm";
import { PasswordForm } from "./PasswordForm/PasswordForm";

import styles from "./FormContainer.module.scss";

export const FormContainer = ({ modalCloseHandler }) => {
  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

  const [modalsDisplayedCounter, setModalsDisplayedCounter] = useState(1);

  const updateContentIsTransitioningHandler = (value) => {
    setContentIsTransitioning(true);

    setModalsDisplayedCounter((prevCounter) => prevCounter + value);

    if (modalsDisplayedCounter > 3) {
      modalCloseHandler();
    }

    setTimeout(() => {
      setContentIsTransitioning(false);
    }, 400);
  };

  const [email, setEmail] = useState(null);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const [firstName, setFirstName] = useState(null);

  const updateFirstName = (value) => {
    setFirstName(value);
  };

  return (
    <div
      className={`${styles["form-container"]} ${
        contentIsTransitioning
          ? styles["form-container_transition-out"]
          : styles["form-container_transition-in"]
      }`}
    >
      {modalsDisplayedCounter === 1 && (
        <EmailForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          updateEmail={updateEmail}
          modalCloseHandler={modalCloseHandler}
        />
      )}
      {modalsDisplayedCounter === 2 && (
        <FirstNameForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          modalCloseHandler={modalCloseHandler}
          updateFirstName={updateFirstName}
        />
      )}
      {modalsDisplayedCounter === 3 && (
        <PasswordForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          modalCloseHandler={modalCloseHandler}
          email={email}
          firstName={firstName}
        />
      )}
    </div>
  );
};
