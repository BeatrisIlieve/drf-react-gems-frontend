import { useState } from "react";

import { FirstNameForm } from "./FirstNameForm/FirstNameForm";
import { EmailForm } from "./EmailForm/EmailForm";
import { PasswordForm } from "./PasswordForm/PasswordForm";
import { CursorImageEffect } from "../utils/CursorImageEffect/CursorImageEffect";
import { XMark } from "../utils/XMark/XMark";
import styles from "./Auth.module.scss";
import { usePopup } from "../../../hooks/usePopup";
export const Auth = ({ displayAuthModal, closeAuthModalClickHandler }) => {
  const {
    isTransitioning,
    popupRef,
    popupCloseHandler,
    updateIsTransitioningHandler,
  } = usePopup({
    closeAuthModalClickHandler,
    displayAuthModal,
  });
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
        displayAuthModal
          ? styles["overlay_transition-in"]
          : styles["overlay_transition-out"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={popupRef}
        className={`${styles["overlay__modal"]}  ${
          movePopup ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        <XMark callbackFunction={closeAuthModalClickHandler} />

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
