import { useModal } from "../../../hooks/useModal";
import { CursorImageEffect } from "../../common/CursorImageEffect/CursorImageEffect";
import { FormContainer } from "./FormContainer/FormContainer";
import { IconsContainer } from "./IconsContainer/IconsContainer";
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
        <IconsContainer />
        <FormContainer modalCloseHandler={modalCloseHandler} />
      </div>
    </section>
  );
};
