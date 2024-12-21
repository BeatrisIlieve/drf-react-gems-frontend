import { useState } from "react";

import { EmailForm } from "./EmailForm/EmailForm";

import { TITLES_BY_COUNTER } from "./constants/titlesByCounter";
import { PARAGRAPHS_BY_COUNTER } from "./constants/paragraphsByCounter";

import styles from "./FormContainer.module.scss";

export const FormContainer = ({ toggleIsModalOpen }) => {
  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

  const [modalsDisplayedCounter, setModalsDisplayedCounter] = useState(1);

  const updateContentIsTransitioningHandler = () => {
    setContentIsTransitioning(true);

    setModalsDisplayedCounter((prevCounter) => prevCounter + 1);

    if (modalsDisplayedCounter === 3) {
      toggleIsModalOpen();
    }

    setTimeout(() => {
      setContentIsTransitioning(false);
    }, 400);
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
        />
      )}
    </div>
  );
};
