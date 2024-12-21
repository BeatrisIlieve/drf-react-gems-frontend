import { useState } from "react";

import { useModal } from "../../../hooks/useModal";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../reusable/XMark/XMark";
import { EmailForm } from "./EmailForm/EmailForm";

import styles from "./Modal.module.scss";

export const Modal = ({ toggleIsModalOpen, isModalOpen }) => {
  const [modalsDisplayedCounter, setModalsDisplayedCounter] = useState(1);

  const { isTransitioning, modalRef, modalCloseHandler } = useModal({
    toggleIsModalOpen,
    isModalOpen,
  });

  const [contentIsTransitioning, setContentIsTransitioning] = useState(false);

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
    <section
      className={`${styles["overlay"]}  ${
        isModalOpen
          ? styles["overlay_transition-in"]
          : styles["overlay_transition-out"]
      }`}
    >
      <CursorImageEffect />
      <div
        ref={modalRef}
        className={`${styles["overlay__modal"]}  ${
          isTransitioning
            ? styles["overlay_slide-out"]
            : styles["overlay_slide-in"]
        }`}
      >
        <XMark callbackFunction={modalCloseHandler} />
        <div
          className={`${styles["form-container"]} ${
            contentIsTransitioning
              ? styles["form-container_transition-out"]
              : styles["form-container_transition-in"]
          }`}
        >
          <h1 className={styles["form-container__title"]}>Title</h1>
          <p className={styles["form-container__paragraph"]}>Par</p>
          {modalsDisplayedCounter === 1 && (
            <EmailForm
              updateContentIsTransitioningHandler={
                updateContentIsTransitioningHandler
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};
