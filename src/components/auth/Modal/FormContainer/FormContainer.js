import { useState } from "react";

import { EmailForm } from "./EmailForm/EmailForm";
import { FirstNameForm } from "./FirstNameForm/FirstNameForm";
import { PasswordForm } from "./PasswordForm/PasswordForm";

import { TITLES_BY_COUNTER } from "./constants/titlesByCounter";
import { PARAGRAPHS_BY_COUNTER } from "./constants/paragraphsByCounter";

import styles from "./FormContainer.module.scss";

export const FormContainer = ({ modalCloseHandler }) => {
  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

  const [modalsDisplayedCounter, setModalsDisplayedCounter] = useState(1);

  const updateContentIsTransitioningHandler = () => {
    setContentIsTransitioning(true);

    setModalsDisplayedCounter((prevCounter) => prevCounter + 1);

    if (modalsDisplayedCounter === 3) {
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
      <h1 className={styles["form-container__title"]}>
        {TITLES_BY_COUNTER[modalsDisplayedCounter]}
      </h1>
      <p className={styles["form-container__paragraph"]}>
        {PARAGRAPHS_BY_COUNTER[modalsDisplayedCounter]}
      </p>
      {modalsDisplayedCounter === 1 && (
        <EmailForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          updateEmail={updateEmail}
        />
      )}
      {modalsDisplayedCounter === 2 && (
        <FirstNameForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          updateFirstName={updateFirstName}
        />
      )}
      {modalsDisplayedCounter === 3 && (
        <PasswordForm
          updateContentIsTransitioningHandler={
            updateContentIsTransitioningHandler
          }
          email={email}
          firstName={firstName}
        />
      )}
    </div>
  );
};
