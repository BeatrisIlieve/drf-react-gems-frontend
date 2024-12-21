import { useModal } from "../../../hooks/useModal";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../reusable/XMark/XMark";
import { FormContainer } from "./FormContainer/FormContainer";

import { CircleLeft } from "./CircleLeft/CircleLeft";

import styles from "./Modal.module.scss";

export const Modal = ({ toggleIsModalOpen, isModalOpen }) => {
  const { isTransitioning, modalRef, modalCloseHandler } = useModal({
    toggleIsModalOpen,
    isModalOpen,
  });

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
        <div className={styles["overlay__icons"]}>
          <CircleLeft />
          <XMark callbackFunction={modalCloseHandler} />
        </div>
        <FormContainer toggleIsModalOpen={toggleIsModalOpen} />
      </div>
    </section>
  );
};
